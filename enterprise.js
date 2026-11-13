// Common image enlargement is handled by portfolio.js.
(() => {
  const videos = document.querySelectorAll('#enterprise video');
  videos.forEach(video => video.addEventListener('play', () => {
    videos.forEach(other => { if (other !== video) other.pause(); });
  }));
  document.querySelectorAll('#enterprise details').forEach(details => {
    details.addEventListener('toggle', () => {
      if (!details.open) details.querySelectorAll('video').forEach(video => video.pause());
    });
  });
})();
