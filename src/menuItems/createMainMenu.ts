export function createMainMenu (): number {
  return <number>chrome.contextMenus.create({
    title: 'Clean Code',
    contexts: ['editable']
  })
}
