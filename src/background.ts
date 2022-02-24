import { getCodeSmells } from './data/codeSmells'
import { createMainMenu } from './menuItems/createMainMenu'
import { generateCategoriesFromCodeSmells } from './generators/generateCategoriesFromCodeSmells'
import NestedCategoryBasedSubMenuItemGenerator from './generators/generateSubMenuItemsFromCategories'
import { MenuItemIdRepository } from './menuItems/menuItemRepository'
import { generateCodeSmellMenuItemsFromCodeSmells } from './generators/generateCodeSmellMenuItemsFromCodeSmells'
import { attachContextMenuHandler } from './chrome/attach-context-menu-handler'

const mainMenu: number = createMainMenu()
attachContextMenuHandler()

const categories: string[] = generateCategoriesFromCodeSmells(getCodeSmells())

const menuItemIdRepository: MenuItemIdRepository = new MenuItemIdRepository()
const subMenuItemGenerator = new NestedCategoryBasedSubMenuItemGenerator(menuItemIdRepository)
subMenuItemGenerator.generateSubMenuItemsFromCategories(mainMenu, categories)

generateCodeSmellMenuItemsFromCodeSmells(menuItemIdRepository, getCodeSmells())
