var express = require("express");
var AV = require('leanengine');

// 🔑 密钥一律从环境变量读取，不要写死在代码里。
// 本地开发：把 .env.example 复制为 .env 并填写（.env 已在 .gitignore 中）。
var appId = process.env.LEANCLOUD_APP_ID;
var appKey = process.env.LEANCLOUD_APP_KEY;
var masterKey = process.env.LEANCLOUD_APP_MASTER_KEY;

if (!appId || !appKey) {
  console.error('[启动失败] 缺少 LeanCloud 凭据。请先设置环境变量：');
  console.error('  LEANCLOUD_APP_ID / LEANCLOUD_APP_KEY / LEANCLOUD_APP_MASTER_KEY');
  console.error('  （可复制 .env.example 为 .env 后填写）');
  process.exit(1);
}

AV.init({
  appId: appId,
  appKey: appKey,
  masterKey: masterKey
});

var app = express();

app.use(AV.express());

app.use(express.static(__dirname + "/static"));

app.get("/", function (req, res) {
  res.end("123");
});

app.listen(process.env.LEANCLOUD_APP_PORT || 3000, function () {
  console.log("server listening on port " + (process.env.LEANCLOUD_APP_PORT || 3000));
});
