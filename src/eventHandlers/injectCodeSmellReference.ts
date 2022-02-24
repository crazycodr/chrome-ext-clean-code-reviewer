import { CodeSmellStructure } from '../models/codeSmellStructure'
import OnClickData = chrome.contextMenus. OnClickData; // eslint-disable-line
import Tab = chrome.tabs.Tab; // eslint-disable-line

export function injectCodeSmellReference (codeSmell: CodeSmellStructure, info: OnClickData, tab?: Tab | undefined) {
  if (tab === undefined) {
    return
  }
  chrome.tabs.sendMessage(<number>tab.id, {
    action: 'inject-clean-code-smell',
    codeSmell: codeSmell
  })
}
