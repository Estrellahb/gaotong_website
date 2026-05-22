// 门户页交互脚本
// 功能：负责页面识别、列表筛选、内容渲染、Tab 切换、详情打开和退出登录。
// 依赖：需要先加载 auth.js 和 app.js；其中 auth.js 提供认证工具，app.js 提供 documents、notices、state 等数据。
// 基础 DOM 与页面识别工具：统一处理元素查询、当前路径和门户页判断。
function byId(id) {
  return document.getElementById(id);
}

function currentPath() {
  return decodeURIComponent(window.location.pathname || "");
}

function currentFileName() {
  const path = currentPath();
  const segments = path.split("/").filter(Boolean);
  return segments.length ? segments[segments.length - 1] : "index.html";
}

function currentPageType() {
  return document.body?.dataset?.page || "";
}

function isPortalPage() {
  if (currentPageType() === "portal") {
    return true;
  }
  const fileName = currentFileName().toLowerCase();
  const portalFile = PORTAL_PAGE.toLowerCase();
  const portalAlias = portalFile.endsWith(".html") ? portalFile.slice(0, -5) : portalFile;
  return fileName === portalFile || fileName === portalAlias;
}

// 数据读取与筛选：基于 app.js 中的 documents、notices、state 生成当前页面需要展示的数据。
function canViewDocument(doc) {
  const rules = window.GaotongVisibilityRules || {};
  const allowedUsers = rules[doc.level] || [];
  const currentUser = window.GaotongAuth.getCurrentUser();
  return allowedUsers.includes("*") || allowedUsers.includes(currentUser);
}

function getVisibleDocuments() {
  return documents.filter(canViewDocument);
}

function getSelectedDoc() {
  const visibleDocuments = getVisibleDocuments();
  return visibleDocuments.find((doc) => doc.number === state.selectedDocNumber) || visibleDocuments[0];
}

function getUniqueValues(list, key) {
  return [...new Set(list.map((item) => item[key]))];
}

function includesKeyword(fields, keyword) {
  if (!keyword) {
    return true;
  }
  return fields.join("|").toLowerCase().includes(keyword.toLowerCase());
}

function getFilteredNotices() {
  return notices.filter((notice) => {
    const deptMatch = !state.noticeDept || notice.dept === state.noticeDept;
    const keywordMatch = includesKeyword([notice.title, notice.dept, notice.date], state.keyword);
    return deptMatch && keywordMatch;
  });
}

function getFilteredDocuments() {
  return getVisibleDocuments().filter((doc) => {
    const keywordMatch = includesKeyword(
      [doc.number, doc.title, doc.type, doc.dept, doc.level, doc.keywords.join(" "), doc.body.join(" ")],
      state.keyword
    );
    const typeMatch = !state.docType || doc.type === state.docType;
    const deptMatch = !state.docDept || doc.dept === state.docDept;
    const levelMatch = !state.docLevel || doc.level === state.docLevel;
    return keywordMatch && typeMatch && deptMatch && levelMatch;
  });
}

// 页面渲染：将筛选后的数据写入首页、通知、文件、详情和档案检索区域。
function activateTab(tabId) {
  state.activeTab = tabId;
  document.querySelectorAll(".nav-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabId);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === tabId);
  });
}

function renderHome() {
  const homeNotices = byId("homeNotices");
  const homeDocs = byId("homeDocs");
  const filteredNotices = getFilteredNotices().slice(0, 5);
  const filteredDocs = getFilteredDocuments().slice(0, 5);

  homeNotices.innerHTML = filteredNotices.length
    ? filteredNotices
        .map(
          (notice) => `
            <li class="notice-item">
              <div>
                <button class="notice-link" type="button" data-notice-id="${notice.id}">${notice.title}</button>
                <div class="notice-meta">${notice.dept}</div>
              </div>
              <div class="notice-meta">${notice.date}</div>
            </li>
          `
        )
        .join("")
    : `<li class="empty-state">没有符合条件的通知公告。</li>`;

  homeDocs.innerHTML = filteredDocs.length
    ? filteredDocs
        .map(
          (doc) => `
            <li class="notice-item">
              <div>
                <button class="notice-link" type="button" data-doc-number="${doc.number}">${doc.title}</button>
                <div class="notice-meta">${doc.dept} · ${doc.number}</div>
              </div>
              <div class="notice-meta">${doc.date}</div>
            </li>
          `
        )
        .join("")
    : `<li class="empty-state">没有符合条件的公开文件。</li>`;
}

function renderNotices() {
  const rows = getFilteredNotices();
  const tbody = byId("noticeTableBody");

  tbody.innerHTML = rows.length
    ? rows
        .map(
          (notice) => `
            <tr>
              <td data-label="标题">
                <button class="table-link" type="button" data-notice-id="${notice.id}">${notice.title}</button>
              </td>
              <td data-label="发文单位">${notice.dept}</td>
              <td data-label="发布日期">${notice.date}</td>
            </tr>
          `
        )
        .join("")
    : `<tr><td colspan="3" class="empty-state">没有符合条件的通知公告。</td></tr>`;
}

function renderDocuments() {
  const rows = getFilteredDocuments();
  const tbody = byId("docTableBody");

  tbody.innerHTML = rows.length
    ? rows
        .map(
          (doc) => `
            <tr>
              <td data-label="文号">${doc.number}</td>
              <td data-label="标题">
                <button class="table-link" type="button" data-doc-number="${doc.number}">${doc.title}</button>
              </td>
              <td data-label="类型">${doc.type}</td>
              <td data-label="发文单位">${doc.dept}</td>
              <td data-label="发布日期">${doc.date}</td>
              <td data-label="密级">${doc.level}</td>
            </tr>
          `
        )
        .join("")
    : `<tr><td colspan="6" class="empty-state">没有符合条件的公开文件。</td></tr>`;
}

function renderDetail(doc) {
  if (!doc) {
    byId("detailTypeBadge").textContent = "--";
    byId("detailNumber").textContent = "--";
    byId("detailTitle").textContent = "暂无可查看文件";
    byId("detailDept").textContent = "--";
    byId("detailDate").textContent = "--";
    byId("detailLevel").textContent = "--";
    byId("detailKeywords").textContent = "--";
    byId("detailBody").innerHTML = `<p>当前账号暂无可查看文件。</p>`;
    byId("detailAttachments").innerHTML = "";
    return;
  }

  byId("detailTypeBadge").textContent = doc.level;
  byId("detailNumber").textContent = doc.number;
  byId("detailTitle").textContent = doc.title;
  byId("detailDept").textContent = doc.dept;
  byId("detailDate").textContent = doc.date;
  byId("detailLevel").textContent = doc.level;
  byId("detailKeywords").textContent = doc.keywords.join("、");
  byId("detailBody").innerHTML = doc.body.map((paragraph) => `<p>${paragraph}</p>`).join("");
  byId("detailAttachments").innerHTML = doc.attachments.map((item) => `<li>${item}</li>`).join("");
}

function renderArchiveResults() {
  const keyword = byId("archiveKeyword").value.trim();
  const dept = byId("archiveDeptFilter").value;
  const type = byId("archiveTypeFilter").value;

  const results = getVisibleDocuments().filter((doc) => {
    const keywordMatch = includesKeyword(
      [doc.number, doc.title, doc.dept, doc.type, doc.keywords.join(" "), doc.body.join(" ")],
      keyword
    );
    const deptMatch = !dept || doc.dept === dept;
    const typeMatch = !type || doc.type === type;
    return keywordMatch && deptMatch && typeMatch;
  });

  byId("archiveResults").innerHTML = results.length
    ? results
        .map(
          (doc) => `
            <article class="archive-card">
              <div>
                <button class="archive-link" type="button" data-doc-number="${doc.number}">${doc.title}</button>
                <div class="archive-meta">${doc.number} · ${doc.dept} · ${doc.date}</div>
              </div>
              <div class="archive-meta">${doc.type}</div>
            </article>
          `
        )
        .join("")
    : `<div class="empty-state">未检索到相关档案，请调整关键词后重试。</div>`;
}

function populateFilters() {
  const noticeDepts = getUniqueValues(notices, "dept");
  const visibleDocuments = getVisibleDocuments();
  const docTypes = getUniqueValues(visibleDocuments, "type");
  const docDepts = getUniqueValues(visibleDocuments, "dept");
  const docLevels = getUniqueValues(visibleDocuments, "level");

  byId("noticeDeptFilter").innerHTML =
    `<option value="">全部单位</option>` +
    noticeDepts.map((item) => `<option value="${item}">${item}</option>`).join("");

  byId("docTypeFilter").innerHTML =
    `<option value="">全部类型</option>` +
    docTypes.map((item) => `<option value="${item}">${item}</option>`).join("");

  byId("docDeptFilter").innerHTML =
    `<option value="">全部单位</option>` +
    docDepts.map((item) => `<option value="${item}">${item}</option>`).join("");

  byId("docLevelFilter").innerHTML =
    `<option value="">全部密级</option>` +
    docLevels.map((item) => `<option value="${item}">${item}</option>`).join("");

  byId("archiveDeptFilter").innerHTML =
    `<option value="">全部单位</option>` +
    docDepts.map((item) => `<option value="${item}">${item}</option>`).join("");

  byId("archiveTypeFilter").innerHTML =
    `<option value="">全部类型</option>` +
    docTypes.map((item) => `<option value="${item}">${item}</option>`).join("");
}

// 门户交互入口：绑定页面事件、处理打开文件/通知、登录校验和退出登录。
function rerenderAll() {
  renderHome();
  renderNotices();
  renderDocuments();
  renderDetail(getSelectedDoc());
  renderArchiveResults();
}

function openDocument(docNumber) {
  const doc = getVisibleDocuments().find((item) => item.number === docNumber);

  if (!doc) {
    window.alert("当前账号无权查看该文件。");
    return;
  }

  state.selectedDocNumber = docNumber;
  renderDetail(doc);
  activateTab("detail");
}

function openNotice(noticeId) {
  const notice = notices.find((item) => item.id === noticeId);
  if (notice && notice.documentNumber) {
    openDocument(notice.documentNumber);
    return;
  }
  activateTab("notices");
}

function initPortalPage() {
  if (storage.getItem(AUTH_KEY) !== "ok") {
    goToPage(LOGIN_PAGE);
    return;
  }

  byId("currentUsername").textContent = `当前用户：${window.GaotongAuth.getCurrentUser() || "访客"}`;

  populateFilters();
  rerenderAll();
  activateTab(state.activeTab);

  document.querySelectorAll(".nav-btn").forEach((button) => {
    button.addEventListener("click", () => activateTab(button.dataset.tab));
  });

  document.querySelectorAll("[data-go]").forEach((button) => {
    button.addEventListener("click", () => activateTab(button.dataset.go));
  });

  byId("searchBtn").addEventListener("click", () => {
    state.keyword = byId("searchInput").value.trim();
    rerenderAll();
    activateTab("documents");
  });

  byId("searchInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      byId("searchBtn").click();
    }
  });

  byId("noticeDeptFilter").addEventListener("change", (event) => {
    state.noticeDept = event.target.value;
    renderNotices();
  });

  byId("docTypeFilter").addEventListener("change", (event) => {
    state.docType = event.target.value;
    renderDocuments();
  });

  byId("docDeptFilter").addEventListener("change", (event) => {
    state.docDept = event.target.value;
    renderDocuments();
  });

  byId("docLevelFilter").addEventListener("change", (event) => {
    state.docLevel = event.target.value;
    renderDocuments();
  });

  byId("archiveSearchBtn").addEventListener("click", renderArchiveResults);

  byId("archiveKeyword").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      renderArchiveResults();
    }
  });

  document.body.addEventListener("click", (event) => {
    const docButton = event.target.closest("[data-doc-number]");
    const noticeButton = event.target.closest("[data-notice-id]");

    if (docButton) {
      openDocument(docButton.dataset.docNumber);
    }

    if (noticeButton) {
      openNotice(noticeButton.dataset.noticeId);
    }
  });

  byId("logoutBtn").addEventListener("click", () => {
    signOut();
    goToPage(LOGIN_PAGE);
  });
}

if (isPortalPage()) {
  initPortalPage();
}

