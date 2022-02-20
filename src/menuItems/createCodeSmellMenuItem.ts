import { CodeSmellStructure } from '../models/codeSmellStructure'
import OnClickData = chrome.contextMenus.OnClickData; // eslint-disable-line
import Tab = chrome.tabs.Tab; // eslint-disable-line
import { injectCodeSmellReference } from '../eventHandlers/injectCodeSmellReference'

export function createCodeSmellMenuItem (parentMenu: number, codeSmell: CodeSmellStructure) {
  chrome.contextMenus.create({
    title: codeSmell.code + ' - ' + codeSmell.name,
    parentId: parentMenu,
    contexts: ['editable'],
    onclick: (info: OnClickData, tab: Tab) => injectCodeSmellReference(info, tab, codeSmell)
  })
}
