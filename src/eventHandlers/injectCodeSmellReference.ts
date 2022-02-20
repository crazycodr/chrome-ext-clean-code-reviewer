import {CodeSmellStructure} from "../models/codeSmellStructure";
import OnClickData = chrome.contextMenus.OnClickData;
import Tab = chrome.tabs.Tab;

export function injectCodeSmellReference(info: OnClickData, tab: Tab, codeSmell: CodeSmellStructure) {
    if (!tab.id) {
        return;
    }
    chrome.tabs.sendMessage(tab.id, {
        action: "inject-clean-code-smell",
        codeSmell: codeSmell,
    });
}