export function createSubMenuItem (mainMenu: number, name: string): number {
  return <number>chrome.contextMenus.create({
    title: name,
    id: name,
    parentId: mainMenu,
    contexts: ['editable']
  })
}
