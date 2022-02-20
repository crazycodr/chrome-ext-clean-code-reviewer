import { CodeSmellStructure } from '../models/codeSmellStructure'
import { createCodeSmellMenuItem } from '../menuItems/createCodeSmellMenuItem'

export function generateCodeSmellMenuItemsFromCodeSmells (subMenuItems: Map<string, number>, codeSmells: CodeSmellStructure[]) {
  codeSmells.forEach(codeSmell => {
    if (!subMenuItems.has(codeSmell.category)) {
      return
    }
    // @ts-ignore
    createCodeSmellMenuItem(subMenuItems.get(codeSmell.category), codeSmell)
  })
}
