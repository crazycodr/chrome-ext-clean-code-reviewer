import {CodeSmellStructure} from "../models/codeSmellStructure";
import OnClickData = chrome.contextMenus.OnClickData;
import Tab = chrome.tabs.Tab;
import {injectCodeSmellReference} from "../eventHandlers/injectCodeSmellReference";

export function createCodeSmellMenuItem(parentMenu: number, codeSmell: CodeSmellStructure) {
    chrome.contextMenus.create({
        title: codeSmell.code + ' - ' + codeSmell.name,
        parentId: parentMenu,
        contexts: ["editable"],
        onclick: (info: OnClickData, tab: Tab) => injectCodeSmellReference(info, tab, codeSmell),
    });
}