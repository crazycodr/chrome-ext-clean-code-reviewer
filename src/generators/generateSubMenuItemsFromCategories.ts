import {createSubMenuItem} from "../menuItems/createSubMenuItem";

export function generateSubMenuItemsFromCategories(mainMenu: number, categories: string[]) {
    const subMenuItems: Map<string, number> = new Map<string, number>();
    categories.forEach(category => {
        subMenuItems.set(category, createSubMenuItem(mainMenu, category));
    });
    return subMenuItems;
}