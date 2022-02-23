import { getCodeSmells } from './data/codeSmells'
import { createMainMenu } from './menuItems/createMainMenu'
import { generateCategoriesFromCodeSmells } from './generators/generateCategoriesFromCodeSmells'
import NestedCategoryBasedSubMenuItemGenerator from './generators/generateSubMenuItemsFromCategories'
import { generateCodeSmellMenuItemsFromCodeSmells } from './generators/generateCodeSmellMenuItemsFromCodeSmells'
import { MenuItemIdRepository } from './menuItems/menuItemRepository'

const mainMenu: number = createMainMenu()

const categories: string[] = generateCategoriesFromCodeSmells(getCodeSmells())

const menuItemIdRepository: MenuItemIdRepository = new MenuItemIdRepository()
const subMenuItemGenerator = new NestedCategoryBasedSubMenuItemGenerator(menuItemIdRepository)
subMenuItemGenerator.generateSubMenuItemsFromCategories(mainMenu, categories)

generateCodeSmellMenuItemsFromCodeSmells(menuItemIdRepository, getCodeSmells())
