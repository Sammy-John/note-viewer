const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname,'..', 'notes');
const outputFile = path.join(__dirname, 'app.html');

function extractMetadata(content) {
    const metadata = { title: null, date: null };
    const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);

    if (match) {
        match[1].split("\n").forEach(line => {
            const [key, value] = line.split(": ");
            if (key && value) {
                metadata[key.trim().toLowerCase()] = value.trim();
            }
        });

        // Remove metadata block from content
        content = content.replace(match[0], '').trim();
    }

    return { metadata, content };
}

function getMarkdownFiles(dir) {
    let results = {};

    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Store the folder directly without using `contents`
            results[file] = getMarkdownFiles(fullPath);
        } else if (file.endsWith('.md')) {
            // Process Markdown file
            const rawContent = fs.readFileSync(fullPath, 'utf8');
            const { metadata, content } = extractMetadata(rawContent);
            const title = metadata.title || path.parse(file).name;
            const date = metadata.date || "2000-01-01"; // Default date if missing

            results[file] = { title, date, content };
        }
    });

    // Sort files inside folders by date (oldest first)
    return Object.fromEntries(
        Object.entries(results).sort(([, a], [, b]) => new Date(a.date || "2000-01-01") - new Date(b.date || "2000-01-01"))
    );
}

const sortedNotes = getMarkdownFiles(notesDir);

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Note Viewer</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdn.jsdelivr.net/npm/marked@4.0.12/lib/marked.umd.min.js"></script>
</head>
<body>
    <div id="sidebar">
        <h3>Notes</h3>
        <ul id="notes-list"></ul>
    </div>
    <div id="content">
        <h2>Note Viewer</h2>
        <div id="markdown-display"></div>
        <button id="copy-btn">Copy to Clipboard</button>
    </div>
    <script>
        const fileStructure = ${JSON.stringify(sortedNotes, null, 4)};
    </script>
    <script src="scripts.js"></script>
</body>
</html>`;

fs.writeFileSync(outputFile, htmlContent);
console.log(`Index file generated: ${outputFile}`);
