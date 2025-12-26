# Azure Static Web Apps 部署指南

## 📋 文件说明

### 1. `staticwebapp.config.json` - 核心配置文件

这个文件告诉 Azure 如何处理你的应用，包括路由、缓存、MIME 类型等。

#### 🎯 主要作用：

| 配置项 | 作用 | 为什么重要 |
|--------|------|-----------|
| **routes** | 定义路由规则和访问权限 | 控制谁可以访问哪些页面 |
| **navigationFallback** | SPA 路由回退 | 让 React Router 正常工作 |
| **mimeTypes** | 文件类型定义 | 确保 WebP、字体正确加载 |
| **globalHeaders** | 缓存策略 | 加速网站，节省流量 |
| **responseOverrides** | 404 处理 | 404 错误自动返回首页 |

#### 📝 详细解释：

```json
// 1. 路由配置 - 允许所有人访问
"routes": [
  {
    "route": "/*",
    "allowedRoles": ["anonymous"]  // 公开访问
  }
]
```

```json
// 2. SPA 回退 - 关键！让单页应用正常工作
"navigationFallback": {
  "rewrite": "/index.html",  // 所有路由都返回 index.html
  "exclude": ["/images/*", "/*.css", "/*.js"]  // 排除静态资源
}
```
**为什么需要这个？**
- React 是单页应用（SPA）
- 用户直接访问 `/about` 时，服务器找不到这个文件
- 这个配置让服务器返回 `index.html`，然后 React 接管路由

```json
// 3. MIME 类型 - 确保文件正确识别
"mimeTypes": {
  ".webp": "image/webp",  // WebP 图片
  ".woff2": "font/woff2"  // 字体文件
}
```

```json
// 4. 缓存策略 - 性能优化
"globalHeaders": {
  "cache-control": "public, max-age=31536000, immutable"
}
```
**效果：**
- 静态资源缓存 1 年（31536000 秒）
- 用户第二次访问超快
- 节省 CDN 流量

---

### 2. `.github/workflows/azure-static-web-apps.yml` - 自动部署流程

这是 GitHub Actions 工作流，实现自动部署。

#### 🚀 工作原理：

```
你推送代码到 GitHub
    ↓
GitHub Actions 自动触发
    ↓
自动运行 npm install & npm run build
    ↓
自动部署到 Azure
    ↓
✅ 网站自动更新！
```

#### 🎯 核心配置：

```yaml
app_location: "/"           # 源代码在根目录
output_location: "dist"     # Vite 构建输出到 dist 文件夹
```

---

## ✨ 为什么部署更简单？

### 没有配置文件时：
❌ 需要在 Azure Portal 手动配置路由
❌ 需要手动设置缓存规则
❌ 404 页面可能不工作
❌ WebP 图片可能加载失败
❌ 每次部署要手动上传文件

### 有了配置文件后：
✅ **一次配置，永久生效**
✅ **自动部署** - Git push 就发布
✅ **路由自动工作** - SPA 完美支持
✅ **性能优化** - 自动缓存
✅ **预览环境** - PR 自动创建预览站

---

## 🚀 部署步骤（超简单）

### 第一次部署：

1. **推送代码到 GitHub**
   ```bash
   git add .
   git commit -m "Add Azure config"
   git push origin main
   ```

2. **在 Azure Portal 创建 Static Web App**
   - 登录 https://portal.azure.com
   - 搜索 "Static Web Apps" → 创建
   - 连接你的 GitHub 仓库
   - Azure 会自动识别 `staticwebapp.config.json`
   - 点击"创建"

3. **完成！** 🎉
   - Azure 会自动部署
   - 给你一个免费域名：`https://your-app.azurestaticapps.net`

### 之后的部署：

```bash
git add .
git commit -m "Update content"
git push
```
**就这么简单！** Azure 自动检测更新并部署。

---

## 📊 对比：其他部署方式

| 方式 | 难度 | 自动部署 | CDN | HTTPS | 成本 |
|------|------|----------|-----|-------|------|
| **Azure Static Web Apps** | ⭐ 简单 | ✅ 是 | ✅ 全球 | ✅ 免费 | 免费 |
| Azure App Service | ⭐⭐⭐ 复杂 | 需配置 | ❌ 需额外配置 | ✅ | $$ |
| 手动 FTP 上传 | ⭐⭐ 中等 | ❌ 否 | ❌ 否 | 需配置 | $ |
| Vercel | ⭐ 简单 | ✅ 是 | ✅ 全球 | ✅ 免费 | 免费 |
| Netlify | ⭐ 简单 | ✅ 是 | ✅ 全球 | ✅ 免费 | 免费 |

---

## 🎁 额外福利

### PR 预览环境
当你创建 Pull Request 时，Azure 会自动：
- 创建一个临时预览站点
- URL 像：`https://your-app-pr123.azurestaticapps.net`
- 测试完成后自动删除

### 自定义域名
```json
// 在 Azure Portal 中配置
你的域名.com → Azure Static Web Apps
```

---

## 📝 常见问题

### Q: 如果我没有 API，需要改配置吗？
A: 不需要！配置文件中 `api_location: ""` 已经设置为空。

### Q: 我的图片会自动上传吗？
A: 是的！所有在 `public/` 和 `dist/` 中的文件都会自动部署。

### Q: 部署失败怎么办？
A: 在 GitHub 仓库的 "Actions" 标签页查看日志。

### Q: 可以部署到多个环境吗？
A: 可以！创建不同的分支（如 `dev`, `staging`, `production`），每个分支自动部署到不同的站点。

---

## 🔗 有用的链接

- [Azure Static Web Apps 文档](https://learn.microsoft.com/azure/static-web-apps/)
- [配置文件参考](https://learn.microsoft.com/azure/static-web-apps/configuration)
- [GitHub Actions 文档](https://docs.github.com/actions)

---

## 🎯 总结

**有了这两个文件，你只需要：**

1. ✅ Git push → 自动部署
2. ✅ 全球 CDN → 访问飞快
3. ✅ 免费 HTTPS → 安全可靠
4. ✅ 零运维 → 省心省力

**就这么简单！** 🚀
