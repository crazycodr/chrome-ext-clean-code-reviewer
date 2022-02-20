import { codeSmells } from './data/codeSmells'
import { createMainMenu } from './menuItems/createMainMenu'
import { generateCategoriesFromCodeSmells } from './generators/generateCategoriesFromCodeSmells'
import { generateSubMenuItemsFromCategories } from './generators/generateSubMenuItemsFromCategories'
import { generateCodeSmellMenuItemsFromCodeSmells } from './generators/generateCodeSmellMenuItemsFromCodeSmells'

const mainMenu: number = createMainMenu()

const categories: string[] = generateCategoriesFromCodeSmells(codeSmells)

const subMenuItems: Map<string, number> = generateSubMenuItemsFromCategories(mainMenu, categories)

generateCodeSmellMenuItemsFromCodeSmells(subMenuItems, codeSmells)
