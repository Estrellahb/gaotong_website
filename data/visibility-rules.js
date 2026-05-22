// 文件密级可见规则
// 功能：控制不同登录用户可以看到哪些密级的文件。
// "*" 表示所有登录用户可见；未出现在本表中的密级默认不可见，避免误公开。

window.GaotongVisibilityRules = {
  "主动公开": ["*"],
  "内部公开": ["admin", "gtzf", "jjc", "jsc", "wl"],
  "内部通报": ["admin", "gtzf", "jjc", "jsc", "wl"],
  "依申请公开": ["admin"],
  "机密": ["admin"]
};
