(async () => {
    const userInput = prompt(`Enter [version] book chapter verse

e.g.:

- jo 3 16
- 1co 15 3-4
- rm 3 10,23
- nvi jo 3 16`);

    if (!userInput) return;

    const tokens = userInput.trim().split(/\s+/);
    
    let version = "acf", book, chapter, verse;

    if (tokens.length === 3) {
        [book, chapter, verse] = tokens;
    } else if (tokens.length === 4) {
        [version, book, chapter, verse] = tokens;
    } else {
        alert("Please enter [optional version] book, chapter, and verse separated by spaces.");
        return;
    }

    version = version.toLowerCase();
    book = book.toLowerCase();

    const url = `https://www.bibliaonline.com.br/${version}/${book}/${chapter}/${verse}+`;
    window.location.href = url;
})();
