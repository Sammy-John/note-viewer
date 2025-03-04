# Note Viewer App

## 📌 Overview
The **Note Viewer App** is a lightweight, self-hosted Markdown viewer that allows users to organize and browse `.md` files in a structured sidebar. Users can navigate folders, view notes in a dynamic content panel, and copy content to the clipboard for easy reference.

This app is ideal for:
- Developers managing **cheat sheets** and **reference notes**.
- Technical writers looking for a **structured way** to access documentation.
- Anyone who prefers an **offline note management system** without the complexity of a database.

## 🚀 Features
✔️ **Dynamic Sidebar Navigation** – Supports multiple folder levels.  
✔️ **Markdown Rendering** – Displays `.md` files with full formatting.  
✔️ **Folder Dropdowns** – Expand and collapse folders to minimize clutter.  
✔️ **Clipboard Copying** – Quickly copy note content with one click.  
✔️ **Metadata Sorting** – Notes are sorted **by date created (oldest first)**.  
✔️ **Self-Hosted** – No server required. Works **entirely in the browser**.  

## 📂 Project Structure
```
📦 Note-Viewer-App
 ┣ 📂 assets/              # Contains videos for GitHub Pages demo
 ┣ 📂 src/
 ┃ ┣ 📜 generate_index.js  # Script to generate the sidebar structure
 ┃ ┣ 📜 scripts.js         # Handles UI interactions
 ┃ ┣ 📜 styles.css         # App styling
 ┣ 📂 notes/               # (Ignored in GitHub) User-created notes go here
 ┣ 📜 index.html           # Main app page
 ┣ 📜 README.md            # Documentation
 ┣ 📜 .gitignore           # Ignores `notes/` to keep notes local
```

## 🛠️ Setup Instructions
1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/Note-Viewer-App.git
   cd Note-Viewer-App
   ```
2. **Create a `notes/` directory** (this is ignored in GitHub):
   ```sh
   mkdir notes
   ```
3. **Run the script to generate the index:**
   ```sh
   node src/generate_index.js
   ```
4. **Open `index.html` in your browser** (no server required).

## 🎥 Demonstration Videos
The functionality of the app is showcased [here](https://yourusername.github.io/Note-Viewer-App/videos.html).

## 📝 License
This project is licensed under the **MIT License** – see the [`LICENSE`](LICENSE) file for details.
