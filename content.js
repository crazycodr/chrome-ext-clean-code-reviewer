chrome.extension.onMessage.addListener(function(msg) {
    if (msg.action === 'inject-clean-code-smell') {
        switch (document.activeElement.tagName)
        {
            case "INPUT":
            case "TEXTAREA":
                let el = document.activeElement;
                let currentValue = el.value.trim();
                if (currentValue !== '') {
                    currentValue += "\n\n";
                }
                currentValue += buildCodeSmellText(msg.codeSmell);
                el.value = currentValue;
                const e = new Event("change");
                el.dispatchEvent(e);
                break;
        }
    }
});

function buildCodeSmellText(codeSmell)
{
    let text = "";
    text += "> **" + codeSmell.code + " - " + codeSmell.name + "** (" + codeSmell.class + ")\n";
    text += "> \n";
    text += "> " + codeSmell.text + "\n";
    text += "> \n";
    text += "> *(See page " + codeSmell.page + " for more info)*";
    return text;
}