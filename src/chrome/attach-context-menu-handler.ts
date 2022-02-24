import OnClickData = chrome.contextMenus.OnClickData; // eslint-disable-line
import Tab = chrome.tabs.Tab; // eslint-disable-line
import { CodeSmellStructure } from '../models/codeSmellStructure'
import { getCodeSmell } from '../data/codeSmells'
import {injectCodeSmellReference} from "../eventHandlers/injectCodeSmellReference"; // eslint-disable-line

export function attachContextMenuHandler () {
  chrome.contextMenus.onClicked.addListener(
    (info: OnClickData, tab?: Tab | undefined) => {
      if (tab === undefined) {
        return
      }
      const codeSmell: CodeSmellStructure = getCodeSmell(<string>info.menuItemId)
      injectCodeSmellReference(codeSmell, info, tab)
    }
  )
}
