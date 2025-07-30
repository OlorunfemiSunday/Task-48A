## 📤 File Upload API

### Routes:
- `POST /api/profile/upload-image` – Upload image (`.jpg`, `.jpeg`, `.png`)
- `POST /api/profile/upload-video` – Upload video (`.mp4`, `.mov`)

### Security Measures:
- ✅ Only specific file types are allowed
- ✅ Upload size is limited to 20MB
- ✅ Files are renamed using a safe, unique pattern
- ✅ Scripts or executables are blocked
- ✅ Uploaded files are stored in `/uploads`, which is ignored in Git

### How to Test (Postman):
1. Set method to `POST` and URL to the route above.
2. Go to Body > form-data.
3. Use key: `image` or `video` and set Type: File.
4. Upload a valid file – get success.
5. Try uploading `.exe` or `.pdf` – get an error.
