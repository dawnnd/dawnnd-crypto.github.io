(function () {
  const update = () => {
    const now = new Date();
    const time = document.getElementById('cover-clock-text');
    const date = document.getElementById('cover-date-text');
    if (time) time.textContent = new Intl.DateTimeFormat('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(now);
    if (date) date.textContent = new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }).format(now);
  };
  update();
  window.setInterval(update, 1000);
})();
