const AUTH_KEY = "gaotong_demo_auth";
const LOGIN_PAGE = "/login/";
const PORTAL_PAGE = "/";
const LOGIN_USERS = [
  { username: "jsc", password: "83170510" },
  { username: "wl", password: "police2006" },
  { username: "jjc", password: "rescue2000" },
  { username: "gtzf", password: "zf123" },
  { username: "admin", password: "admin" }
];

const documents = [
  {
    number: "高政办〔2006〕12号",
    title: "关于进一步加强汛期安全巡查工作的通知",
    type: "通知",
    dept: "县政府办公室",
    date: "2006-07-28",
    level: "内部通报",
    keywords: ["汛期", "巡查", "安全"],
    attachments: ["汛期值班安排表.pdf", "重点隐患点位清单.doc"],
    body: [
      "各乡镇人民政府、县直有关单位：为切实做好汛期安全防范工作，保障人民群众生命财产安全，现就进一步加强巡查值守、隐患排查和应急准备有关事项通知如下。",
      "一是严格落实属地管理责任和部门监管责任，重点围绕山塘水库、在建工程、低洼地带和地质灾害隐患点开展拉网式巡查。二是完善预警会商机制，确保雨情、水情、险情信息第一时间上传下达。三是加强值班值守，遇有紧急情况要快速处置、及时报告。",
      "各单位要按照本通知要求，于每周五前报送工作开展情况，县政府办公室将适时组织专项督查。"
    ]
  },
  {
    number: "高发改〔2006〕4号",
    title: "关于推进县域重点项目建设提速增效的实施意见",
    type: "意见",
    dept: "县发展改革局",
    date: "2006-03-11",
    level: "主动公开",
    keywords: ["项目建设", "投资", "调度"],
    attachments: ["重点项目责任分工表.xlsx"],
    body: [
      "为进一步扩大有效投资，推动重点项目早开工、快建设、早见效，现结合全县实际提出如下实施意见。",
      "坚持项目全生命周期管理，健全联审联批、定期调度、问题交办和现场协调机制，对手续办理、要素保障和建设进度实行清单化管理。",
      "各责任单位要聚焦年度目标任务，细化时间表、路线图，切实提高项目推进的质效和落地速度。"
    ]
  },
  {
    number: "高教字〔2006〕18号",
    title: "关于规范中小学校园安全管理工作的通告",
    type: "通告",
    dept: "县教育局",
    date: "2005-09-03",
    level: "主动公开",
    keywords: ["校园安全", "教育", "管理"],
    attachments: ["校园安全检查指引.pdf"],
    body: [
      "为进一步强化校园安全责任，规范学校日常安全管理，保障师生安全，现就有关事项通告如下。",
      "各学校要严格落实门卫值守、食品安全、消防安全、校车安全和应急演练制度，持续开展风险排查整改。",
      "县教育局将联合相关部门开展常态化督导检查，对责任落实不到位的单位依法依规进行处理。"
    ]
  },
  {
    number: "高民政〔2006〕9号",
    title: "关于做好城乡困难群众临时救助工作的通知",
    type: "通知",
    dept: "县民政局",
    date: "2006-01-15",
    level: "主动公开",
    keywords: ["救助", "民生", "困难群众"],
    attachments: ["临时救助申请表.doc"],
    body: [
      "为保障困难群众基本生活，及时解决群众突发性、紧迫性、临时性基本生活困难，现就有关工作通知如下。",
      "各乡镇要畅通申请受理渠道，优化审核审批流程，做到应救尽救、应助尽助，切实提升救助时效和服务温度。",
      "县民政局将定期汇总救助数据，跟踪政策落实情况，及时回应群众关切问题。"
    ]
  },
  {
    number: "高卫健〔2005〕21号",
    title: "关于开展夏季公共卫生专项整治行动的方案",
    type: "方案",
    dept: "县卫生健康局",
    date: "2005-07-08",
    level: "依申请公开",
    keywords: ["卫生", "整治", "夏季"],
    attachments: ["专项整治工作安排.doc", "巡查检查记录表.xlsx"],
    body: [
      "根据季节性公共卫生工作特点，决定自即日起在全县范围内开展夏季公共卫生专项整治行动。",
      "重点整治农贸市场、餐饮单位、学校周边和重点公共场所环境卫生秩序，强化病媒生物防制和饮用水安全监管。",
      "各单位要加强宣传引导，营造全民参与、共建共享的卫生环境。"
    ]
  },
  {
    number: "高自然资〔2005〕6号",
    title: "关于规范建设用地审批档案归集工作的通知",
    type: "通知",
    dept: "县自然资源局",
    date: "2005-02-26",
    level: "主动公开",
    keywords: ["档案", "建设用地", "审批"],
    attachments: ["审批档案归集目录.pdf"],
    body: [
      "为进一步提高建设用地审批管理规范化水平，现就档案资料归集、编号管理和查询利用等工作提出要求。",
      "各有关单位要按照统一格式做好电子档案和纸质档案同步归集，确保资料完整、要素齐全、查询便捷。",
      "县自然资源局将对归档质量开展抽查，对问题较多的单位进行通报。"
    ]
  },
  {
    number: "高自然资〔2005〕6号",
    title: "关于规范建设用地审批档案归集工作的通知",
    type: "通知",
    dept: "县自然资源局",
    date: "2005-02-26",
    level: "主动公开",
    keywords: ["档案", "建设用地", "审批"],
    attachments: ["审批档案归集目录.pdf"],
    body: [
      "为进一步提高建设用地审批管理规范化水平，现就档案资料归集、编号管理和查询利用等工作提出要求。",
      "各有关单位要按照统一格式做好电子档案和纸质档案同步归集，确保资料完整、要素齐全、查询便捷。",
      "县自然资源局将对归档质量开展抽查，对问题较多的单位进行通报。"
    ]
  },
    
];

const notices = [
  {
    id: "n1",
    title: "关于开展防汛安全夜查的工作提醒",
    dept: "县应急管理局",
    date: "2006-07-26",
    documentNumber: "高政办〔2006〕12号"
  },
  {
    id: "n2",
    title: "重点项目周调度会议召开通知",
    dept: "县发展改革局",
    date: "2006-05-08",
    documentNumber: "高发改〔2006〕4号"
  },
  {
    id: "n3",
    title: "校园安全专项督导检查公告",
    dept: "县教育局",
    date: "2006-04-26",
    documentNumber: "高教字〔2006〕18号"
  },
  {
    id: "n4",
    title: "城乡困难群众救助申请办理提示",
    dept: "县民政局",
    date: "2006-04-14",
    documentNumber: "高民政〔2006〕9号"
  },
  {
    id: "n5",
    title: "建设用地档案归档时间安排表",
    dept: "县自然资源局",
    date: "2006-03-29",
    documentNumber: "高自然资〔2006〕6号"
  }
];

const state = {
  activeTab: "home",
  keyword: "",
  noticeDept: "",
  docType: "",
  docDept: "",
  docLevel: "",
  selectedDocNumber: documents[0].number
};

const storage = (() => {
  try {
    const testKey = "__gaotong_storage_test__";
    window.localStorage.setItem(testKey, "1");
    window.localStorage.removeItem(testKey);
    return window.localStorage;
  } catch (error) {
    return window.sessionStorage;
  }
})();

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

function goToPage(page) {
  window.location.href = new URL(page, window.location.href).href;
}


function isLoginPage() {
  if (currentPageType() === "login") {
    return true;
  }
  const fileName = currentFileName().toLowerCase();
  return fileName === LOGIN_PAGE.toLowerCase() || fileName === "login";
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

function getSelectedDoc() {
  return documents.find((doc) => doc.number === state.selectedDocNumber) || documents[0];
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
  return documents.filter((doc) => {
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

  const results = documents.filter((doc) => {
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
  const docTypes = getUniqueValues(documents, "type");
  const docDepts = getUniqueValues(documents, "dept");
  const docLevels = getUniqueValues(documents, "level");

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

function rerenderAll() {
  renderHome();
  renderNotices();
  renderDocuments();
  renderDetail(getSelectedDoc());
  renderArchiveResults();
}

function openDocument(docNumber) {
  state.selectedDocNumber = docNumber;
  renderDetail(getSelectedDoc());
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
    storage.removeItem(AUTH_KEY);
    goToPage(LOGIN_PAGE);
  });
}

function initLoginPage() {
  const form = byId("loginForm");
  const usernameInput = byId("username");
  const passwordInput = byId("password");
  const errorBox = byId("loginError");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    const matchedUser = LOGIN_USERS.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      storage.setItem(AUTH_KEY, "ok");
      if (matchedUser.username === "admin") {
        goToPage("/admin/");
      } else {
        goToPage(`/${matchedUser.username}/`);
      }
      return;
    }

    errorBox.textContent = "用户名或密码错误，请检查后重新输入。";
  });
}

if (isPortalPage()) {
  initPortalPage();
}

if (isLoginPage()) {
  initLoginPage();
}
