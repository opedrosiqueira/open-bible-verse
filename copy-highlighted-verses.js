(async () => {
    try {
        const url = new URL(window.location.href);
        const parts = url.pathname.split('/').filter(Boolean); // remove empty parts

        // Expecting: ['', 'acf', 'jo', '3', '16-19+']
        const book = parts[1] || "";
        const chapter = parts[2] || "";

        if (!book || !chapter) {
            alert("Could not detect book and chapter from URL!");
            return;
        }

        // Find the main container
        const fragment = document.querySelector(".FragmentView_text__g6Uq2");
        if (!fragment) {
            alert("Fragment not found!");
            return;
        }

        // Select all <p> inside it
        const paragraphs = fragment.querySelectorAll("p");

        // Collect only those <p> which have a <span class="t hl-10">
        const highlightedVerses = [];
        paragraphs.forEach(p => {
            const highlight = p.querySelector("span.t.hl-10");
            if (highlight) {
                highlightedVerses.push(p.innerText.trim());
            }
        });

        if (highlightedVerses.length === 0) {
            alert("No highlighted verses found!");
            return;
        }

        // Capitalize first letter of book
        const formattedBook = book.charAt(0).toUpperCase() + book.slice(1);

        // Build the final text
        let finalText = `> ${formattedBook} ${chapter}:${highlightedVerses[0]}`;
        for (let i = 1; i < highlightedVerses.length; i++) {
            finalText += `\n> ${highlightedVerses[i]}`;
        }

        // Copy to clipboard
        await navigator.clipboard.writeText(finalText);

        alert("Highlighted verses copied to clipboard!");
    } catch (error) {
        console.error(error);
        alert("Something went wrong!");
    }
})();
