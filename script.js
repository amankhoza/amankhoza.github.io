const playPauseButton = document.getElementById('playPauseButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Add icon images to buttons (using real public URLs)
playPauseButton.innerHTML = '<img src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/play_arrow/default/24px.svg" alt="Play/Pause">';
prevButton.innerHTML = '<img src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/skip_previous/default/24px.svg" alt="Previous">';
nextButton.innerHTML = '<img src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/skip_next/default/24px.svg" alt="Next">';


// Add event listeners for button clicks (replace with actual music control logic)
playPauseButton.addEventListener('click', () => {
    // Toggle play/pause state, update icon, control music playback
});

prevButton.addEventListener('click', () => {
    // Go to previous song
});

nextButton.addEventListener('click', () => {
    // Go to next song
});
