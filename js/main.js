// Initialize the video gallery
document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (isLoggedIn && window.location.pathname.includes('login.html')) {
        window.location.href = 'index.html';
    }
    
    // Load videos
    loadVideos();
});

function loadVideos() {
    const videoGallery = document.getElementById('video-gallery');
    const videos = JSON.parse(localStorage.getItem('videos')) || [];
    
    if (videos.length === 0) {
        videoGallery.innerHTML = '<p class="no-videos">No videos available yet</p>';
        return;
    }
    
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <video controls>
                <source src="${video.url}" type="video/mp4">
            </video>
            <div class="video-info">
                <h3>${video.title}</h3>
            </div>
        `;
        videoGallery.appendChild(videoCard);
    });
}
