import { CodeSmellStructure } from '../models/codeSmellStructure'
import { createCodeSmellMenuItem } from '../menuItems/createCodeSmellMenuItem'
import { MenuItemIdRepository } from '../menuItems/menuItemRepository'

export function generateCodeSmellMenuItemsFromCodeSmells (menuItemIdRepository: MenuItemIdRepository, codeSmells: CodeSmellStructure[]) {
  codeSmells.forEach(codeSmell => {
    createCodeSmellMenuItem(menuItemIdRepository.get(codeSmell.category), codeSmell)
  })
}
