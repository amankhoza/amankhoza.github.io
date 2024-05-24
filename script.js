// Container (Circular Screen)
const container = document.createElement('div');
container.style.width = '450px';
container.style.height = '450px';
container.style.borderRadius = '50%';
container.style.backgroundColor = '#212121'; // Material dark background
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
document.body.appendChild(container);

// Play/Pause Button
const playPauseBtn = document.createElement('button');
const playIcon = document.createElement('img');
const pauseIcon = document.createElement('img');

// Public Icon URLs (Replace with your preferred icons)
playIcon.src = 'https://fonts.gstatic.com/s/i/materialicons/play_arrow/v14/24px.svg'; 
pauseIcon.src = 'https://fonts.gstatic.com/s/i/materialicons/pause/v14/24px.svg';

playIcon.alt = 'Play';
pauseIcon.alt = 'Pause';
playPauseBtn.appendChild(playIcon); // Start with play icon

// Button styling
playPauseBtn.style.width = '80px';
playPauseBtn.style.height = '80px';
playPauseBtn.style.borderRadius = '50%';
playPauseBtn.style.backgroundColor = '#4CAF50'; // Material green
playPauseBtn.style.border = 'none';
playPauseBtn.style.outline = 'none';
playPauseBtn.style.cursor = 'pointer';

// Event Listener for Play/Pause
let isPlaying = false; // Track play/pause state
playPauseBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playPauseBtn.innerHTML = ''; // Clear existing icon
    playPauseBtn.appendChild(isPlaying ? pauseIcon : playIcon);

    // Add your play/pause logic here
});

container.appendChild(playPauseBtn);

// Previous and Next Buttons
const iconSize = '30px'; // Adjust as needed

// Create buttons with similar styling to playPauseBtn
const prevBtn = createSongButton('https://fonts.gstatic.com/s/i/materialicons/skip_previous/v14/24px.svg', iconSize, 'Previous');
const nextBtn = createSongButton('https://fonts.gstatic.com/s/i/materialicons/skip_next/v14/24px.svg', iconSize, 'Next');

// Positioning
prevBtn.style.position = 'absolute';
prevBtn.style.left = '50px'; // Adjust as needed
nextBtn.style.position = 'absolute';
nextBtn.style.right = '50px'; // Adjust as needed

container.appendChild(prevBtn);
container.appendChild(nextBtn);

// Helper Function to Create Song Buttons
function createSongButton(iconUrl, size, altText) {
    const btn = document.createElement('button');
    const icon = document.createElement('img');
    icon.src = iconUrl;
    icon.alt = altText;
    icon.style.width = size;
    icon.style.height = size;
    btn.appendChild(icon);

    // ... (same styling as playPauseBtn, adjust as needed)

    // Add your song navigation logic here
    return btn;
}
