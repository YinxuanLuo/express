# 毕业设计 · Web 音乐播放器（服务端 / 部署部分）

2019 年本科毕业设计的**部署壳**。前端在 `static/`，服务端用 Express + LeanCloud 云引擎
（LeanEngine）把它跑起来。

配套论文：《用 Javascript 实现 Web 音乐播放器》。
前端源码与构建过程在姊妹仓库 **`musicPlayer`**，这里只是把它放进 `static/` 并套上部署层。

## 目录

| 路径 | 说明 |
|---|---|
| `static/` | 前端产物（来自 `musicPlayer` 的 `dist/`） |
| `server.js` | Express + LeanEngine 入口 |
| `package.json` | 依赖：`express`、`leanengine` |

## 怎么跑

```bash
npm install
cp .env.example .env     # 填入自己的 LeanCloud 密钥
npm start                # 默认 http://localhost:3000
```

没配环境变量时，`server.js` 会直接报错退出，并提示缺哪些变量——避免拿一串失效密钥去连。

## 🔑 关于密钥（请务必读一下）

`AV.init()` 需要 appId / appKey / **masterKey**，这三个值一律从**环境变量**读取：

```
LEANCLOUD_APP_ID
LEANCLOUD_APP_KEY
LEANCLOUD_APP_MASTER_KEY
```

> **不要把密钥写进代码再提交。** `masterKey` 是应用的最高权限钥匙，等同于数据库管理权，
> 一旦推到公开仓库，就等于把整个应用交了出去。

> ⚠️ **本仓库的历史提交里曾明文出现过一组密钥。**
> 即使现在代码里已经改成读环境变量，那组密钥**仍然能从 git 历史里翻出来**。
> 如果那个 LeanCloud 应用还在使用，**请立刻到 LeanCloud 控制台作废并重新生成密钥**。
> （同类问题也出现在已归档的 `node-musicPlayer` 仓库。）

## 备注

- `app.get("/")` 目前只是 `res.end("123")` 的占位，当年没写完。
- `static/` 里打包了受版权保护的完整歌曲，仅作个人学习用途，请勿公开分发或上线。
