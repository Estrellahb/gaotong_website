# 高瞳县政务信息公开平台

这是一个纯静态前端项目，由 HTML、CSS、JavaScript 组成，不依赖前端框架。页面可以部署到任意静态托管环境，也可以用本地静态服务预览。

## 项目结构

```text
.
├── index.html                 # 门户首页
├── app.js                     # 门户运行数据入口，读取转换后的内容数据
├── style.css                  # 全站样式
├── _redirects                 # 旧用户目录路径重定向到首页
├── wrangler.jsonc             # Cloudflare Pages / Workers 相关配置
├── login/
│   └── index.html             # 登录页
├── data/
│   ├── documents-source.js    # 公开文件内容维护区
│   ├── notices-source.js      # 通知公告维护区
│   └── visibility-rules.js    # 文件密级可见规则
└── assets/
    └── js/
        ├── auth.js            # 登录、退出、当前用户等认证逻辑
        ├── login.js           # 登录页表单逻辑
        ├── content-adapter.js # 内容转换层，将中文字段转换成页面内部数据结构
        └── portal.js          # 门户页筛选、渲染、事件绑定逻辑
```

## 本地运行

建议使用本地静态服务预览，不建议直接双击 HTML 文件打开。

在项目根目录运行：

```bash
python -m http.server 4173 --bind 127.0.0.1
```

然后访问：

```text
http://127.0.0.1:4173/login/
```

## 登录逻辑

登录账号配置在：

```text
assets/js/auth.js
```

所有用户登录成功后都会跳转到根首页 `/`，也就是 `index.html`。旧的 `/admin/`、`/gtzf/`、`/jjc/`、`/jsc/`、`/wl/` 路径已经不再作为独立页面维护，部署时会通过 `_redirects` 回到首页。

登录页只加载：

```html
<script src="../assets/js/auth.js"></script>
<script src="../assets/js/login.js"></script>
```

门户页加载顺序是：

```html
<script src="/assets/js/auth.js"></script>
<script src="/data/visibility-rules.js"></script>
<script src="/data/documents-source.js"></script>
<script src="/data/notices-source.js"></script>
<script src="/assets/js/content-adapter.js"></script>
<script src="/app.js"></script>
<script src="/assets/js/portal.js"></script>
```

这个顺序不能随意调整。`visibility-rules.js` 提供密级可见规则；`content-adapter.js` 需要先读取 `data/` 下的内容，再生成 `window.GaotongData`，`app.js` 和 `portal.js` 才能正常使用。

## 添加公开文件

公开文件统一维护在：

```text
data/documents-source.js
```

新增文件时，在 `window.GaotongContentDocuments = [ ... ]` 数组里添加一组内容：

```js
{
  "文号": "高政办〔2006〕12号",
  "标题": "关于进一步加强汛期安全巡查工作的通知",
  "类型": "通知公告",
  "发文单位": "中共高瞳县委办公室",
  "发布日期": "2006-07-28",
  "密级": "内部通报",
  "关键词": "汛期, 巡查, 安全",
  "附件": "汛期值班安排表.pdf, 重点隐患点位清单.doc",
  "正文": `
第一段正文。

第二段正文。

第三段正文。
  `
}
```

维护规则：

- 每条文件放在一组 `{ ... }` 中
- 多条文件之间使用英文逗号 `,` 分隔
- 字段名不要修改，例如 `文号`、`标题`、`发文单位`
- `发布日期` 建议使用 `YYYY-MM-DD`
- `关键词` 和 `附件` 可以用中文逗号、英文逗号或顿号分隔
- 没有附件时，`附件` 写成空字符串 `""`
- `正文` 使用反引号包裹，可以直接粘贴多段文字，段落之间空一行

## 添加通知公告

通知公告统一维护在：

```text
data/notices-source.js
```

新增公告时，在 `window.GaotongContentNotices = [ ... ]` 数组里添加一组内容：

```js
{
  "编号": "n1",
  "标题": "关于开展防汛安全夜查的工作提醒",
  "发布单位": "高瞳县防汛抗旱指挥部办公室",
  "发布日期": "2006-07-26",
  "关联文号": "高政办〔2006〕12号"
}
```

维护规则：

- `编号` 建议按 `n1`、`n2`、`n3` 递增
- `关联文号` 要填写 `documents-source.js` 中已有的 `文号`
- 点击公告时，会根据 `关联文号` 打开对应文件详情
- 如果公告不关联文件，可以写 `"关联文号": ""`

## 内容转换说明

维护者在 `data/` 中填写的是中文字段。页面实际渲染使用的是英文内部字段，例如：

```js
{
  number: "高政办〔2006〕12号",
  title: "关于进一步加强汛期安全巡查工作的通知",
  dept: "中共高瞳县委办公室",
  body: ["第一段正文", "第二段正文"]
}
```

转换逻辑在：

```text
assets/js/content-adapter.js
```

一般不需要修改这个文件。只有在新增字段或调整数据格式时，才需要同步修改转换逻辑。

## 文件可见规则

文件是否显示由 `data/visibility-rules.js` 控制。通知公告不做权限过滤，所有登录用户都能看到。

规则示例：

```js
window.GaotongVisibilityRules = {
  "主动公开": ["*"],
  "内部公开": ["admin", "gtzf", "jjc", "jsc", "wl"],
  "内部通报": ["admin", "gtzf", "jjc", "jsc", "wl"],
  "依申请公开": ["admin"],
  "机密": ["admin"]
};
```

说明：

- `"*"` 表示所有登录用户可见
- 未出现在规则表里的 `密级` 默认不可见
- 文件列表、首页文件、档案检索、文件详情都会应用这套规则
- 通知公告仍然所有人可见；如果公告关联的文件当前用户无权查看，点击时会提示无权查看

## 修改后检查

修改内容后，可以运行基础语法检查：

```bash
node --check data/documents-source.js
node --check data/notices-source.js
node --check data/visibility-rules.js
node --check assets/js/content-adapter.js
node --check app.js
node --check assets/js/portal.js
```

如果没有输出错误，说明 JavaScript 语法检查通过。之后刷新本地页面，确认列表、详情、通知公告是否正常显示。

## 常见问题

- 多条内容之间漏写英文逗号 `,`
- 把正文外面的反引号 `` ` `` 改成普通引号
- 删除了 `window.GaotongContentDocuments = [` 或 `window.GaotongContentNotices = [`
- 修改了字段名，例如把 `发文单位` 改成 `单位`
- `关联文号` 和文件里的 `文号` 不一致，导致公告无法打开对应详情
- 调整了脚本加载顺序，导致页面读取不到数据
