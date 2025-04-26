chrome.commands.onCommand.addListener(async (command) => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (command === "open_bible_input") {

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['content.js']
        });
    } else if (command === "copy_highlighted") {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['copy-highlighted-verses.js']
        });
    }

});
