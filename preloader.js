window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    // Wait at least 2 seconds before starting the fade-out
    setTimeout(() => {
      preloader.classList.add('hidden'); // Start fade-out
      setTimeout(() => {
        preloader.style.display = 'none'; // Fully hide after transition
      }, 500); // Wait for fade-out transition to finish (match with CSS)
    }, 2000); // 2-second minimum visible duration
  }
});
