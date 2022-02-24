import { CodeSmellStructure } from '../models/codeSmellStructure'

export function createCodeSmellMenuItem (parentMenu: number, codeSmell: CodeSmellStructure) {
  chrome.contextMenus.create({
    title: codeSmell.code + ' - ' + codeSmell.name,
    id: codeSmell.code,
    parentId: parentMenu,
    contexts: ['editable']
  })
}
