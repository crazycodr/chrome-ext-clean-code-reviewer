import OnClickData = chrome.contextMenus.OnClickData;
import Tab = chrome.tabs.Tab;
import {CodeSmellStructure} from "./codeSmellStructure";
import {codeSmells} from "./codeSmells";

const mainMenu = chrome.contextMenus.create({
    title: "Clean Code",
    contexts: ["editable"]
});

function getSubMenuItem(name: string): number {
    // @ts-ignore
    return chrome.contextMenus.create({
        title: name,
        parentId: mainMenu,
        contexts: ["editable"],
    });
}

function createCodeSmellItem(parentMenu: number, codeSmell: CodeSmellStructure) {
    chrome.contextMenus.create({
        title: codeSmell.code + ' - ' + codeSmell.name,
        parentId: parentMenu,
        contexts: ["editable"],
        onclick: (info, tab) => injectCodeSmellReference(info, tab, codeSmell),
    });
}

function injectCodeSmellReference(info: OnClickData, tab: Tab, codeSmell: CodeSmellStructure) {
    if (!tab.id) {
        return;
    }
    chrome.tabs.sendMessage(tab.id, {
        action: "inject-clean-code-smell",
        codeSmell: codeSmell,
    });
}

const categories: string[] = [];
codeSmells.forEach(codeSmell => {
    if (categories.indexOf(codeSmell.category) === -1) {
        categories.push(codeSmell.category);
    }
});
categories.sort();

const subMenuItems: Map<string, number> = new Map<string, number>();
categories.forEach(category => {
    subMenuItems.set(category, getSubMenuItem(category));
});

codeSmells.forEach(codeSmell => {
    if (!subMenuItems.has(codeSmell.category)) {
        return;
    }
    // @ts-ignore
    createCodeSmellItem(subMenuItems.get(codeSmell.category), codeSmell);
});
