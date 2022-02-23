import { CodeSmellStructure } from '../models/codeSmellStructure'
import { createCodeSmellMenuItem } from '../menuItems/createCodeSmellMenuItem'
import { MenuItemIdRepository } from '../menuItems/menuItemRepository'
import { last, split } from 'lodash'

export function generateCodeSmellMenuItemsFromCodeSmells (menuItemIdRepository: MenuItemIdRepository, codeSmells: CodeSmellStructure[]) {
  codeSmells.forEach(codeSmell => {
    const nestedParts: string[] = split(codeSmell.category, '/')
    const lastPart: string = <string>last(nestedParts)
    if (!menuItemIdRepository.has(lastPart)) {
      console.log('Error with code smell, category path not found in menuItemIdRepository', {
        codeSmell
      })
    }
    createCodeSmellMenuItem(menuItemIdRepository.get(lastPart), codeSmell)
  })
}
