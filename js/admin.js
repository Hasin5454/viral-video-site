document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('isAdmin')) {
        window.location.href = 'login.html';
        return;
    }
    
    // Load credentials
    loadCredentials();
    
    // Setup upload form
    document.getElementById('upload-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const file = document.getElementById('video-upload').files[0];
        
        if (!file) return;
        
        // Check file size (200MB limit)
        if (file.size > 200 * 1024 * 1024) {
            alert('Video must be less than 200MB');
            return;
        }
        
        // Create video object
        const videos = JSON.parse(localStorage.getItem('videos')) || [];
        videos.push({
            title: file.name,
            url: URL.createObjectURL(file),
            uploadedAt: new Date().toISOString()
        });
        
        localStorage.setItem('videos', JSON.stringify(videos));
        alert('Video uploaded successfully!');
    });
});

function loadCredentials() {
    const credentialsList = document.getElementById('credentials-list');
    const credentials = JSON.parse(localStorage.getItem('credentials')) || [];
    
    credentials.forEach(cred => {
        const credItem = document.createElement('div');
        credItem.className = 'credential-item';
        credItem.innerHTML = `
            <div class="credential-id">${cred.id}</div>
            <div class="credential-pass">${cred.password}</div>
            <div class="credential-date">${new Date(cred.date).toLocaleString()}</div>
        `;
        credentialsList.appendChild(credItem);
    });
}
