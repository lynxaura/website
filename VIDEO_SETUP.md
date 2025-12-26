# 视频设置指南 / Video Setup Guide

## 📹 如何获取视频 ID

### YouTube 视频 ID
1. 上传视频到 YouTube
2. 在视频页面查看 URL，格式如：`https://www.youtube.com/watch?v=dQw4w9WgXcQ`
3. `v=` 后面的部分就是视频 ID，例如：`dQw4w9WgXcQ`

### Bilibili 视频 ID (BV号)
1. 上传视频到 Bilibili
2. 在视频页面查看 URL，格式如：`https://www.bilibili.com/video/BV1xx411c7mD`
3. `BV` 开头的部分就是视频 ID，例如：`BV1xx411c7mD`

## 🔧 配置视频

编辑 `components/Hero.tsx` 文件的第 111-112 行：

```tsx
<VideoModal
  isOpen={isVideoOpen}
  onClose={() => setIsVideoOpen(false)}
  youtubeId="你的YouTube视频ID"    // ← 替换这里
  bilibiliId="你的B站BV号"          // ← 替换这里
/>
```

### 示例：
```tsx
<VideoModal
  isOpen={isVideoOpen}
  onClose={() => setIsVideoOpen(false)}
  youtubeId="dQw4w9WgXcQ"        // YouTube 示例
  bilibiliId="BV1xx411c7mD"      // B站 示例
/>
```

## 🌍 地区检测逻辑

VideoModal 组件会自动检测用户地区：

- **中国大陆用户** → 播放 Bilibili 视频
- **其他地区用户** → 播放 YouTube 视频

### 检测方式：
1. ✅ 时区检测（`Asia/Shanghai`, `Asia/Chongqing`）
2. ✅ 浏览器语言（`zh-CN`, `zh`）
3. ✅ 默认为 YouTube（确保全球访问）

## ✨ 功能特点

- 🎬 自动播放
- ⌨️ ESC 键关闭
- 📱 响应式设计
- 🌓 点击背景关闭
- 🔄 加载动画
- 🎨 优雅的弹窗动画
- 🐛 开发模式显示当前播放平台

## 🎥 视频建议

### YouTube 设置：
- ✅ 设置为"不公开"（Unlisted）如果不想被搜索到
- ✅ 建议时长：30-90 秒（宣传视频）
- ✅ 关闭评论（可选）
- ✅ 添加字幕（提升体验）

### Bilibili 设置：
- ✅ 上传相同视频
- ✅ 选择合适的分区（数码/科技）
- ✅ 添加封面和标题
- ✅ 稿件类型选"自制"

## 🚀 测试

运行开发服务器测试：
```bash
npm run dev
```

1. 点击首页的 "Watch Video" 按钮
2. 视频应该在弹窗中自动播放
3. 点击 X 或背景可关闭
4. 按 ESC 键也可关闭

## 📝 注意事项

1. **先上传视频**到 YouTube 和 Bilibili 后再配置 ID
2. **确保视频为公开或不公开（Unlisted）**，不能是私密视频
3. **YouTube 视频必须允许嵌入**（默认开启）
4. **B站视频需要审核通过**后才能播放
5. 开发环境下左下角会显示当前播放的平台（生产环境不显示）

## 🔗 相关文件

- 📄 [components/VideoModal.tsx](components/VideoModal.tsx) - 视频弹窗组件
- 📄 [components/Hero.tsx](components/Hero.tsx) - 首页 Hero 部分（第 111-112 行配置视频 ID）
