# 🌐 Hosting Note Viewer on GitHub Pages

Follow these steps to host your **Note Viewer App** as a live site on GitHub Pages.

---

## 1. Unignore the `notes/` folder

Edit your `.gitignore` file and remove or comment out the `notes/` line:

```diff
- notes/
+ # notes/
```

This allows Git to include your notes in the repository, which is necessary for GitHub Pages to display them.

---

## 2. Add your Markdown files

Place your `.md` notes inside the `notes/` folder. You can organize them using subfolders if needed.

---

## 3. Update the generator to create `index.html`

Open `src/generate_app.js` and find this line:

```js
const outputFile = path.join(__dirname, 'app.html');
```

Replace it with:

```js
const outputFile = path.join(__dirname, '..', 'index.html');
```

This ensures that your generated HTML is saved at the root as `index.html`, which GitHub Pages requires.

---

## 4. Generate the site and push to GitHub

Run the generator and push your changes:

```bash
node src/generate_app.js
git add .
git commit -m "Generate index.html for GitHub Pages"
git push origin main
```

---

## 5. Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click on the **Settings** tab.
3. Scroll down to the **"Pages"** section.
4. Under **"Source"**, select:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click **Save**.

Your site will be published at:

```
https://yourusername.github.io/note-viewer/
```

*(Replace `yourusername` with your actual GitHub username.)*

---

## 🔁 Updating Your Notes

When you add, remove, or reorganize your notes:

1. Run `node src/generate_app.js` again  
2. Commit and push the changes

This will update the sidebar and note structure on your live site.

---
