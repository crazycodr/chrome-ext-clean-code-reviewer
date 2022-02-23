export function createMainMenu (): number {
  return <number>chrome.contextMenus.create({
    title: 'Code commenter',
    contexts: ['editable']
  })
}
