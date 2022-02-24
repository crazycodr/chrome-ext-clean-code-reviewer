export function createMainMenu (): number {
  return <number>chrome.contextMenus.create({
    title: 'Code commenter',
    id: 'code-commenter',
    contexts: ['editable']
  })
}
