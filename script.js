document.addEventListener("DOMContentLoaded", function() {
  const playPauseButton = document.getElementById("playPause");
  const playPauseImage = playPauseButton.querySelector("img");
  let isPlaying = false;

  playPauseButton.addEventListener("click", function() {
    isPlaying = !isPlaying;
    playPauseImage.src = isPlaying 
      ? "https://fonts.gstatic.com/s/i/materialicons/pause/v14/24px.svg" 
      : "https://fonts.gstatic.com/s/i/materialicons/play_arrow/v14/24px.svg";
    // Add your actual play/pause logic here
  });
});
