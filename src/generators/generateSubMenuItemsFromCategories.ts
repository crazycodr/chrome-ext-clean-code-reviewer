import { createSubMenuItem } from '../menuItems/createSubMenuItem'
import { split } from 'lodash'

export default class NestedCategoryBasedSubMenuItemGenerator {
  private subMenuItems: Map<string, number> = new Map<string, number>();

  private createMenuItemIfNeeded (nestedPart: string, parentId: number): number {
    if (!this.subMenuItems.has(nestedPart)) {
      parentId = createSubMenuItem(parentId, nestedPart)
      this.subMenuItems.set(nestedPart, parentId)
    } else {
      parentId = <number> this.subMenuItems.get(nestedPart)
    }
    return parentId
  }

  private splitCategoryIntoPartsAndCreateIfNeeded (category: string, mainMenu: number) {
    const nestedParts: string[] = split(category, '/')
    let parentId: number = mainMenu
    for (const nestedPart of nestedParts) {
      parentId = this.createMenuItemIfNeeded(nestedPart, parentId)
    }
  }

  public generateSubMenuItemsFromCategories (mainMenu: number, categories: string[]) {
    for (const category of categories) {
      this.splitCategoryIntoPartsAndCreateIfNeeded(category, mainMenu)
    }
    return this.subMenuItems
  }
}
