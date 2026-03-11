# OpenClaw-BusyLobster-Indicator 🦞

一款为 OpenClaw 设计的高级 UI 增强插件。通过一只飞奔的小龙虾动画，优雅地缓解用户在 AI 任务处理过程中的等待焦虑。

## ✨ 特性

- **黄金延迟触发**：仅在任务超过 1.5 秒时出现，避免短任务干扰视觉。
- **优雅淡入效果**：0.4 秒线性淡出过渡，极致舒适的 UX 体验。
- **CDN 加速**：基于 jsDelivr 分发，全球访问无延迟。
- **零负担设计**：自动预加载及销毁逻辑，不占用多余内存。

## 🚀 快速安装

1. 下载 `index.js` 并放入你的 OpenClaw 插件目录。
2. 在主程序中引入：
   ```javascript
   import LobsterIndicator from './skills/OpenClaw-BusyLobster-Indicator';
   app.use(LobsterIndicator);
   ```

## 📁 项目结构

```
openclaw-busylobster-indicator/
├── assets/
│   └── busylobster.gif      # 动画素材
├── index.js                 # 核心代码
├── manifest.json            # 插件配置
└── README.md               # 本文件
```

## 🔧 配置说明

在 `index.js` 中可以自定义以下参数：

- `LOBSTER_GIF_URL`：动画 GIF 的 CDN 地址
- 延迟时间：修改 `setTimeout` 的延迟值（默认 1500ms）
- 样式：修改 `injectStyles()` 中的 CSS

## 📜 License

MIT

---

Powered by [deepseek.club](https://deepseek.club/)
