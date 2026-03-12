# OpenClaw BusyLobster Indicator 🦞⚡

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/deepseekfund-dot/openclaw-busylobster-indicator)

A UI enhancement plugin for OpenClaw that displays an animated running lobster with lightning effect to soothe user waiting anxiety during AI task processing.

## ✨ Features

- 🦞 **Native Emoji Animation** - No GIF files needed! Uses system emoji with pure CSS animations
- ⚡ **Lightning Pulse Effect** - Dynamic energy indicator
- 💨 **Dust Cloud Particles** - Cute running effect
- 🌙 **Dark Mode Support** - Auto-adapts to system theme
- ⏱️ **1.5s Golden Delay** - Only appears for longer tasks
- 🎨 **Smooth Transitions** - Elegant fade in/out effects

## 🎬 Preview

When OpenClaw is processing a task for more than 1.5 seconds:

```
💨💨💨 🦞 ⚡ 龙虾君正在飞奔处理...
```

The lobster runs/hops while lightning pulses, with dust clouds trailing behind!

## 📦 Installation

### Via ClawHub (Recommended)

```bash
clawhub install openclaw-busylobster-indicator
```

### Manual Installation

Copy the `openclaw-busylobster-indicator` folder to your OpenClaw skills directory.

## 🔧 Technical Details

### Version 2.0.0 Changes

- **Removed**: GIF file dependency
- **Added**: Pure CSS animations with native emoji
- **Added**: Lightning pulse effect (⚡)
- **Added**: Dust cloud particles
- **Added**: Dark mode support
- **Improved**: Smaller file size, no external asset loading

### CSS Animations Used

| Animation | Effect |
|-----------|--------|
| `lobsterRun` | Lobster hops and flips direction |
| `boltPulse` | Lightning grows and glows |
| `dustCloud` | Particles trail behind |
| `textPulse` | Text gently fades |

## 📄 License

MIT License - feel free to use and modify!

---

Made with ❤️ by [deepseek.club](https://deepseek.club)
