(function() {
  // 1. Get configuration from the script tag
  const scriptTag = document.currentScript || document.querySelector('script[src*="rep-embed.js"]');
  const botId = scriptTag?.getAttribute('data-bot') || 'bot_default';
  const theme = scriptTag?.getAttribute('data-theme') || 'light';

  // 2. Inject CSS
  const style = document.createElement('style');
  style.innerHTML = `
    #rep-widget-bubble {
      position: fixed; bottom: 24px; right: 24px; width: 64px; height: 64px;
      background-color: #000; color: #fff; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 999999; transition: transform 0.2s;
    }
    #rep-widget-bubble:hover { transform: scale(1.05); }
    #rep-widget-overlay {
      display: none; position: fixed; top: 0; left: 0;
      width: 100vw; height: 100dvh; background: #fff;
      z-index: 1000000; flex-direction: column;
    }
    #rep-widget-overlay.active { display: flex; }
    #rep-widget-header {
      display: flex; justify-content: flex-end; padding: 12px 16px;
      background: #fff; border-bottom: 1px solid #eee;
    }
    #rep-widget-close {
      background: none; border: none; font-size: 24px;
      cursor: pointer; color: #333;
    }
    #rep-widget-iframe-container { flex-grow: 1; width: 100%; height: 100%; }
  `;
  document.head.appendChild(style);

  // 3. Create the Floating Bubble
  const bubble = document.createElement('div');
  bubble.id = 'rep-widget-bubble';
  bubble.innerHTML = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`;
  document.body.appendChild(bubble);

  // 4. Create the Full-Screen Overlay
  const overlay = document.createElement('div');
  overlay.id = 'rep-widget-overlay';
  overlay.innerHTML = `
    <div id="rep-widget-header">
      <button id="rep-widget-close">✕</button>
    </div>
    <div id="rep-widget-iframe-container">
      <iframe src="https://rep-agent.ai.studio/?bot=${botId}&embed=true&theme=${theme}" width="100%" height="100%" style="border: none;" allow="microphone"></iframe>
    </div>
  `;
  document.body.appendChild(overlay);

  // 5. Add Event Listeners
  bubble.addEventListener('click', () => overlay.classList.add('active'));
  document.getElementById('rep-widget-close').addEventListener('click', () => overlay.classList.remove('active'));
})();
