import { createSubMenuItem } from '../menuItems/createSubMenuItem'
import { split } from 'lodash'
import { MenuItemIdRepository } from '../menuItems/menuItemRepository'

export default class NestedCategoryBasedSubMenuItemGenerator {
    private menuItemIdRepository: MenuItemIdRepository;

    constructor (menuItemIdRepository: MenuItemIdRepository) {
      this.menuItemIdRepository = menuItemIdRepository
    }

    private createNestedPartIfNeeded (nestedPart: string, parentId: number): number {
      let createdMenuItemId
      if (!this.menuItemIdRepository.has(nestedPart)) {
        createdMenuItemId = createSubMenuItem(parentId, nestedPart)
        this.menuItemIdRepository.create(nestedPart, createdMenuItemId)
      } else {
        createdMenuItemId = <number> this.menuItemIdRepository.get(nestedPart)
      }
      return createdMenuItemId
    }

    private splitCategoryIntoPartsAndCreateIfNeeded (category: string, mainMenu: number) {
      const nestedParts: string[] = split(category, '/')
      let parentId: number = mainMenu
      for (const nestedPart of nestedParts) {
        parentId = this.createNestedPartIfNeeded(nestedPart, parentId)
      }
    }

    public generateSubMenuItemsFromCategories (mainMenu: number, categories: string[]) {
      for (const category of categories) {
        this.splitCategoryIntoPartsAndCreateIfNeeded(category, mainMenu)
      }
    }
}
