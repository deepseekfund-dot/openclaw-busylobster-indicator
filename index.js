/**
 * Skill Name: OpenClaw-BusyLobster-Indicator
 * Description: 1.5s 延迟触发的跑动龙虾动画，缓解用户等待焦虑。
 * Author: deepseek.club
 */

const LOBSTER_GIF_URL = "https://cdn.jsdelivr.net/gh/deepseekfund-dot/openclaw-busylobster-indicator@main/assets/busylobster.gif";

export default {
    id: "openclaw-busylobster-indicator",
    name: "OpenClaw-BusyLobster-Indicator",

    install(app) {
        // 1. 预加载图片到浏览器缓存，确保触发时瞬间显示
        const imgPreload = new Image();
        imgPreload.src = LOBSTER_GIF_URL;

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
            #claw-busy-overlay {
                position: fixed;
                bottom: 30px;
                right: 30px;
                background: rgba(255, 255, 255, 0.9);
                backdrop-filter: blur(8px);
                border: 2px solid #FF4D4F;
                border-radius: 50px;
                padding: 10px 24px;
                box-shadow: 0 8px 24px rgba(0,0,0,0.12);
                z-index: 99999;
                display: none;
                align-items: center;
                opacity: 0;
                transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);
                pointer-events: none;
            }
            #claw-busy-overlay.visible {
                opacity: 1;
            }
            #claw-busy-overlay img {
                width: 40px;
                height: 40px;
                margin-right: 12px;
            }
            #claw-busy-overlay span {
                color: #333;
                font-size: 14px;
                font-weight: 600;
                white-space: nowrap;
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
                <img src="${LOBSTER_GIF_URL}" alt="busy lobster">
                <span>龙虾君正在飞奔处理...</span>
            `;
            document.body.appendChild(div);
        }
        return div;
    }
};
