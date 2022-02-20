import {CodeSmellStructure} from "../models/codeSmellStructure";

export function generateCategoriesFromCodeSmells(codeSmells: CodeSmellStructure[]) {
    const categories: string[] = [];
    codeSmells.forEach(codeSmell => {
        if (categories.indexOf(codeSmell.category) === -1) {
            categories.push(codeSmell.category);
        }
    });
    categories.sort();
    return categories;
}