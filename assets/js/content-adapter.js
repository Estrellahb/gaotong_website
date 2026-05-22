// 内容转换层
// 功能：把 data/*-source.js 中面向维护者的中文字段，转换成门户页面内部使用的数据结构。
// 依赖：需要先加载 data/documents-source.js 和 data/notices-source.js。

(function () {
  function splitList(value) {
    if (Array.isArray(value)) {
      return value.map((item) => String(item).trim()).filter(Boolean);
    }
    return String(value || '')
      .split(/[,\uFF0C\u3001]/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function splitParagraphs(value) {
    if (Array.isArray(value)) {
      return value.map((item) => String(item).trim()).filter(Boolean);
    }
    return String(value || '')
      .trim()
      .split(/\n\s*\n/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function normalizeDocument(item) {
    return {
      number: item["文号"] || '',
      title: item["标题"] || '',
      type: item["类型"] || "通知公告",
      dept: item["发文单位"] || '',
      date: item["发布日期"] || '',
      level: item["密级"] || "主动公开",
      keywords: splitList(item["关键词"]),
      attachments: splitList(item["附件"]),
      body: splitParagraphs(item["正文"])
    };
  }

  function normalizeNotice(item) {
    return {
      id: item["编号"] || '',
      title: item["标题"] || '',
      dept: item["发布单位"] || '',
      date: item["发布日期"] || '',
      documentNumber: item["关联文号"] || ''
    };
  }

  const sourceDocuments = window.GaotongContentDocuments || [];
  const sourceNotices = window.GaotongContentNotices || [];

  window.GaotongData = Object.freeze({
    documents: sourceDocuments.map(normalizeDocument),
    notices: sourceNotices.map(normalizeNotice)
  });
})();
