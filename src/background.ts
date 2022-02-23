import { getCodeSmells } from './data/codeSmells'
import { createMainMenu } from './menuItems/createMainMenu'
import { generateCategoriesFromCodeSmells } from './generators/generateCategoriesFromCodeSmells'
import NestedCategoryBasedSubMenuItemGenerator from './generators/generateSubMenuItemsFromCategories'
import { generateCodeSmellMenuItemsFromCodeSmells } from './generators/generateCodeSmellMenuItemsFromCodeSmells'

const mainMenu: number = createMainMenu()

const categories: string[] = generateCategoriesFromCodeSmells(getCodeSmells())

const subMenuItemGenerator = new NestedCategoryBasedSubMenuItemGenerator()
const subMenuItems: Map<string, number> = subMenuItemGenerator.generateSubMenuItemsFromCategories(mainMenu, categories)

generateCodeSmellMenuItemsFromCodeSmells(subMenuItems, getCodeSmells())
