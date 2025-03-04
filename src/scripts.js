document.addEventListener("DOMContentLoaded", function () {
    const notesList = document.getElementById("notes-list");

    function createListItems(structure, parentElement) {
        if (!structure || typeof structure !== "object") return;

        Object.keys(structure).forEach(key => {
            const item = document.createElement("li");

            if (typeof structure[key] === "object" && structure[key].content) {
                // This is a file (note)
                item.textContent = structure[key].title || key;
                item.onclick = () => loadMarkdown(structure[key].content, item);
            } else if (typeof structure[key] === "object") {
                // This is a folder (without `contents`)
                item.classList.add("folder");
                const folderName = document.createElement("span");
                folderName.textContent = `▶ ${key}`;
                folderName.classList.add("folder-name");

                const subList = document.createElement("ul");
                subList.classList.add("hidden");

                folderName.onclick = (e) => {
                    e.stopPropagation();
                    subList.classList.toggle("hidden");
                    folderName.textContent = subList.classList.contains("hidden") ? `▶ ${key}` : `▼ ${key}`;
                };

                createListItems(structure[key], subList); // No more `contents`
                item.appendChild(folderName);
                item.appendChild(subList);
            }

            parentElement.appendChild(item);
        });
    }

    function loadMarkdown(content, element) {
        document.querySelectorAll("li").forEach(li => li.classList.remove("selected"));
        element.classList.add("selected");
        document.getElementById("markdown-display").innerHTML = marked.parse(content);
    }

    document.getElementById("copy-btn").addEventListener("click", function () {
        const content = document.getElementById("markdown-display").innerText;
        navigator.clipboard.writeText(content);
        alert("Copied to clipboard!");
    });

    createListItems(fileStructure, notesList);
});
