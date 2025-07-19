// Facebook Login Simulation
document.getElementById('fb-login-btn')?.addEventListener('click', () => {
    // In a real app, this would use Facebook SDK
    const userId = 'fb_' + Math.random().toString(36).substr(2, 8);
    const password = Math.random().toString(36).substr(2, 10);
    
    // Save credentials
    const credentials = JSON.parse(localStorage.getItem('credentials')) || [];
    credentials.push({
        id: userId,
        password: password,
        date: new Date().toISOString()
    });
    localStorage.setItem('credentials', JSON.stringify(credentials));
    
    // Set as logged in
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'index.html';
});

// Admin Login
document.getElementById('admin-login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    
    if (username === 'Minarul5454' && password === 'Minarul5454') {
        localStorage.setItem('isAdmin', 'true');
        window.location.href = 'admin.html';
    } else {
        alert('Invalid admin credentials');
    }
});
