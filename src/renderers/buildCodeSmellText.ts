import { CodeSmellStructure } from '../models/codeSmellStructure'

export function buildCodeSmellText (codeSmell: CodeSmellStructure) {
  let text = ''
  text += '> **' + codeSmell.code + ' - ' + codeSmell.name + '** (' + codeSmell.category + ')\n'
  text += '> \n'
  text += '> ' + codeSmell.text + '\n'
  if (codeSmell.reference.trim() !== '' && codeSmell.page !== 0) {
    text += '> \n'
    text += '> *(See page ' + codeSmell.page + ' of ' + codeSmell.reference + ' for more info)*'
  }
  return text.trim()
}
