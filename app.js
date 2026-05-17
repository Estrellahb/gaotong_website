const AUTH_KEY = "gaotong_demo_auth";
const LOGIN_PAGE = "/login/";
const PORTAL_PAGE = "/";
const LOGIN_USERS = [
  { username: "jsc", password: "83170510" },
  { username: "wl", password: "police2006" },
  { username: "jjc", password: "rescue2000" },
  { username: "gtzf", password: "zf123" }
];

const documents = [
  {
    number: "高政办〔2006〕12号",
    title: "关于进一步加强汛期安全巡查工作的通知",
    type: "通知公告",
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
    type: "通知公告",
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
    type: "通知公告",
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
    type: "通知公告",
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
    number: "高政办〔2005〕32号",
    title: "关于进一步加强汛期安全巡查工作的通知",
    type: "通知公告",
    dept: "高瞳地区政务办公室",
    date: "2005-07-26",
    level: "主动公开",
    keywords: ["汛期", "巡查", "安全"],
    attachments: ["附件1：重点巡查点位名录", "附件2：值班人员排班表"],
    body: [
      "各有关单位：",
      "当前已进入汛期关键阶段，为切实维护辖区内学校、居民区、矿区及沿河区域安全稳定，现就进一步加强巡查工作通知如下。",
      "一、各单位须严格落实24小时值班制度，对重点区域进行不间断巡查，发现异常情况应第一时间报告。",
      "二、对学生宿舍、旧厂房、废弃矿道等封控区域，不得擅自拆封、进入或转移现场物品。",
      "三、涉及未成年人安全、人员失踪、突发伤亡等事项，应同步上报，并按规定启动联合处置机制。",
      "特此通知。"
    ]
  },
  {
    number: "高公刑内〔2006〕07号",
    title: "关于近期失踪案件线索梳理情况的内部通报",
    type: "调查简报",
    dept: "高瞳县公安局刑侦大队",
    date: "2006-08-14",
    level: "内部通报",
    keywords: ["失踪", "排查", "内部通报"],
    attachments: ["附件：重点询问对象名单"],
    body: [
      "各办案小组：",
      "根据近期案件侦查进展，现对有关线索进行阶段性汇总。经走访核查，多起失踪案件在时间、地点及接触人员方面具有一定重合性，需持续关注相关场所与接触链。",
      "各组应结合前期笔录、走访记录和现场情况，对重点对象进行复核，对封控区域保持警戒，并及时补充影像、纸面和物证材料。",
      "本通报仅供内部使用，不得外传。"
    ]
  },
  {
    number: "高调简〔2006〕03号",
    title: "关于后河村周边情况的阶段性调查简报",
    type: "调查简报",
    dept: "专项调查组",
    date: "2006-08-15",
    level: "机密",
    keywords:  ["后河村", "旧屋", "调查"],
    attachments: ["附表：地点示意图", "附表：问询摘要"],
    body: [
      "一、后河村村内住户较少，夜间活动稀疏，村口招待所为主要落脚点。",
      "二、村西北方向一处旧屋长期无人居住，但有村民称偶尔见到灯光，具体情况尚待核验。",
      "三、相关口述信息存在互相矛盾之处，需结合实地勘验进一步判断。",
      "四、建议后续调查人员结伴进入，注意保留现场状态，避免单独行动。"
    ]
  },
  {
    number: "高教通〔2006〕09号",
    title: "关于调整近期教学安排及住宿管理要求的公告",
    type: "通知公告",
    dept: "高瞳县教育事务管理处",
    date: "2006-06-12",
    level: "主动公开",
    keywords: ["教学安排", "宿舍", "公告"],
    attachments: ["附表：地点示意图", "附表：问询摘要"],
    body: [
      "根据近期工作安排，现对有关教学与住宿管理要求公告如下。",
      "一、严格执行晚间点名和宿舍巡查制度。",
      "二、封控区域未经许可不得进入。",
      "三、学生外出须履行请假手续，由班主任或值班人员登记备案。"
    ]
  },
  { 
    number: "高综议〔2006〕04号",
    title: "重点单位联席会议纪要",
    type: "会议纪要",
    dept: "高瞳地区综合治理办公室",
    date: "2006-08-13",
    level: "内部通报",
    keywords: ["会议", "联席", "综合治理"],
    attachments: ["附件：参会名单"],
    body: [
      "会议指出，各单位要提高政治站位，压实责任，切实做好重点时期的稳定工作。",
      "会议强调，要强化信息联动，严格保密要求，对外口径须统一规范。",
      "会议要求，对历史遗留问题、重点场所和敏感区域应开展滚动式排查。"
    ]
  },
  { 
    number: "高计投〔2001〕17号",
    title: "高瞳县发展计划文件",
    type: "项目建设",
    dept: "高瞳县发展计划局",
    date: "2001-05-10",
    level: "内部通报",
    keywords: ["后河村水库", "方山", "山洪灾害", ],
    attachments: ["附件：招投标文件","附件：工程计划安排","附件：工程量调整及追加工程签证单","附件：竣工验收报告"],
    body: [
      "经县政府研究，并报有关部门审查，现对《关于申请实施后河村水库及方山片区山洪灾害综合治理工程的请示》批复如下：",
    "为切实加强后河村水库及方山片区防汛抗灾能力，保障沿线群众生命财产安全，改善高瞳县南部山区基础设施薄弱现状，同意实施后河村水库及方山片区山洪灾害综合治理工程。", 
    ]
  },   
  { 
    number:"高政发〔2001〕01 号",
    title: "关于印发《高瞳县 2006 年度铜矿企业安全生产专项整治方案》的通知",
    type: "通知公告",
    dept: "高瞳地区政务办公室",
    date: "2006-08-13",
    level: "主动公开",
    keywords: ["会议", "安全生产"],
    attachments:["附件：无"],
    body: [
      "各乡（镇）人民政府，县府各部门、各直属机构：",
    "为深刻汲取近年省内外矿山安全生产事故教训，切实规范我县铜矿开采秩序，消除各类安全隐患，保障人民群众生命财产安全，经县政府研究决定，自 2006 年 2 月 1 日起，在全县范围内开展为期三个月的铜矿企业安全生产专项整治行动。现已印发《高瞳县 2006 年度铜矿企业安全生产专项整治方案》，请认真贯彻执行。",
    "一、整治目标",
    "通过本次专项整治，全面排查全县铜矿企业安全生产薄弱环节，依法取缔非法采矿点，关停不具备基本安全生产条件的矿山企业，督促企业落实安全生产主体责任，坚决防范和遏制重特大矿山安全事故发生，确保我县矿山安全生产形势稳定好转。",
    "二、整治范围",
    "............",
    ]
  },
  { 
    number:"高政发〔2006〕12 号",
    title: "关于2006年暴雨季省道 S312 高瞳段交通管制的公告",
    type:  "通知公告",
    dept: "遂山市交通局、公安局交警大队",
    date: "2006-08-12",
    level: "主动公开",
    keywords: ["交通管制", "暴雨"],
    attachments:["附件：无"],
    body: [
     "根据气象部门预警，我县将于8月上旬正式进入集中降雨期，为防范山体滑坡、道路塌方风险，暴雨红色预警期间，省道 S312 高瞳段将于8月14日起实施临时交通管制，禁止社会车辆通行。",
    ]
  }
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
      goToPage(PORTAL_PAGE);
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
