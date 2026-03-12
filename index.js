/**
 * Skill Name: OpenClaw-BusyLobster-Indicator
 * Description: 1.5s 延迟触发的跑动龙虾动画（CSS动画 + Emoji），缓解用户等待焦虑。
 * Author: deepseek.club
 * Version: 2.0.0 - 纯CSS动画，无需GIF
 */

export default {
    id: "openclaw-busylobster-indicator",
    name: "OpenClaw-BusyLobster-Indicator",

    install(app) {
        this.injectStyles();
        const ui = this.createUI();

        // 监听 OpenClaw 任务状态
        app.on('task:start', () => {
            this.timer = setTimeout(() => {
                ui.style.display = 'flex';
                // 使用 requestAnimationFrame 确保 display:flex 渲染后再触发淡入
                requestAnimationFrame(() => {
                    ui.classList.add('visible');
                });
            }, 1500); // 1.5秒黄金延迟
        });

        app.on('task:end', () => {
            clearTimeout(this.timer);
            ui.classList.remove('visible');
            // 等待 400ms 淡出动画完成后彻底隐藏，释放性能
            setTimeout(() => {
                if (!ui.classList.contains('visible')) {
                    ui.style.display = 'none';
                }
            }, 400);
        });
    },

    injectStyles() {
        if (document.getElementById('lobster-indicator-style')) return;
        const style = document.createElement('style');
        style.id = 'lobster-indicator-style';
        style.innerHTML = `
            /* 主容器 */
            #claw-busy-overlay {
                position: fixed;
                bottom: 30px;
                right: 30px;
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(12px);
                border: 2px solid #FF6B6B;
                border-radius: 50px;
                padding: 12px 24px;
                box-shadow: 0 8px 32px rgba(255, 107, 107, 0.25);
                z-index: 99999;
                display: none;
                align-items: center;
                gap: 8px;
                opacity: 0;
                transform: translateY(20px) scale(0.9);
                transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1),
                            transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
                pointer-events: none;
            }
            #claw-busy-overlay.visible {
                opacity: 1;
                transform: translateY(0) scale(1);
            }

            /* 龙虾 Emoji 动画 */
            .lobster-emoji {
                font-size: 32px;
                display: inline-block;
                animation: lobsterRun 0.6s ease-in-out infinite;
                transform-origin: center bottom;
            }

            @keyframes lobsterRun {
                0%, 100% {
                    transform: translateY(0) rotate(-5deg) scaleX(1);
                }
                25% {
                    transform: translateY(-6px) rotate(5deg) scaleX(-1);
                }
                50% {
                    transform: translateY(0) rotate(-5deg) scaleX(-1);
                }
                75% {
                    transform: translateY(-6px) rotate(5deg) scaleX(1);
                }
            }

            /* 闪电 Emoji 动画 */
            .bolt-emoji {
                font-size: 24px;
                display: inline-block;
                animation: boltPulse 0.4s ease-in-out infinite alternate;
            }

            @keyframes boltPulse {
                0% {
                    transform: scale(1) rotate(-10deg);
                    opacity: 0.7;
                    filter: drop-shadow(0 0 2px #FFD93D);
                }
                100% {
                    transform: scale(1.3) rotate(10deg);
                    opacity: 1;
                    filter: drop-shadow(0 0 8px #FFD93D);
                }
            }

            /* 文字样式 */
            .lobster-text {
                color: #333;
                font-size: 14px;
                font-weight: 600;
                white-space: nowrap;
                margin-left: 4px;
                animation: textPulse 1.5s ease-in-out infinite;
            }

            @keyframes textPulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.7; }
            }

            /* 跑步尘土效果 */
            .dust-container {
                display: flex;
                gap: 2px;
                margin-left: -4px;
            }
            .dust-dot {
                width: 4px;
                height: 4px;
                background: #FFB4B4;
                border-radius: 50%;
                opacity: 0;
                animation: dustCloud 0.8s ease-out infinite;
            }
            .dust-dot:nth-child(1) { animation-delay: 0s; }
            .dust-dot:nth-child(2) { animation-delay: 0.2s; }
            .dust-dot:nth-child(3) { animation-delay: 0.4s; }

            @keyframes dustCloud {
                0% {
                    opacity: 0;
                    transform: translateX(0) scale(0.5);
                }
                50% {
                    opacity: 0.8;
                    transform: translateX(-8px) scale(1);
                }
                100% {
                    opacity: 0;
                    transform: translateX(-16px) scale(0.3);
                }
            }

            /* 深色模式支持 */
            @media (prefers-color-scheme: dark) {
                #claw-busy-overlay {
                    background: rgba(40, 40, 45, 0.95);
                    border-color: #FF6B6B;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
                }
                .lobster-text {
                    color: #F5F5F5;
                }
                .dust-dot {
                    background: #FF9999;
                }
            }
        `;
        document.head.appendChild(style);
    },

    createUI() {
        let div = document.getElementById('claw-busy-overlay');
        if (!div) {
            div = document.createElement('div');
            div.id = 'claw-busy-overlay';
            div.innerHTML = `
                <div class="dust-container">
                    <span class="dust-dot"></span>
                    <span class="dust-dot"></span>
                    <span class="dust-dot"></span>
                </div>
                <span class="lobster-emoji">🦞</span>
                <span class="bolt-emoji">⚡</span>
                <span class="lobster-text">龙虾君正在飞奔处理...</span>
            `;
            document.body.appendChild(div);
        }
        return div;
    }
};
