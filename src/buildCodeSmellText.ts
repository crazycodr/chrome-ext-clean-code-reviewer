import { CodeSmellStructure } from './models/codeSmellStructure'

export function buildCodeSmellText (codeSmell: CodeSmellStructure) {
  let text = ''
  text += '> **' + codeSmell.code + ' - ' + codeSmell.name + '** (' + codeSmell.category + ')\n'
  text += '> \n'
  text += '> ' + codeSmell.text + '\n'
  text += '> \n'
  text += '> *(See page ' + codeSmell.page + ' for more info)*'
  return text
}
