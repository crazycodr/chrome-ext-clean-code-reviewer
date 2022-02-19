import {CodeSmellStructure} from "./codeSmellStructure";

chrome.runtime.onMessage.addListener(function(msg) {
    if (msg.action === 'inject-clean-code-smell') {
        // @ts-ignore
        switch (document.activeElement.tagName)
        {
            case "INPUT":
            case "TEXTAREA":
                let el = document.activeElement;
                // @ts-ignore
                let currentValue = el.value.trim();
                if (currentValue !== '') {
                    currentValue += "\n\n";
                }
                currentValue += buildCodeSmellText(msg.codeSmell);
                // @ts-ignore
                el.value = currentValue;
                const e = new Event("change");
                // @ts-ignore
                el.dispatchEvent(e);
                break;
        }
    }
});

function buildCodeSmellText(codeSmell: CodeSmellStructure)
{
    let text = "";
    text += "> **" + codeSmell.code + " - " + codeSmell.name + "** (" + codeSmell.category + ")\n";
    text += "> \n";
    text += "> " + codeSmell.text + "\n";
    text += "> \n";
    text += "> *(See page " + codeSmell.page + " for more info)*";
    return text;
}