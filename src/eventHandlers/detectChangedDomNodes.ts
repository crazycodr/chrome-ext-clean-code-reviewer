export default class DomWatcher {
  constructor () {
    const observer = new MutationObserver(function (mutationList) {
      mutationList.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (addedNode: Node) {
          if (addedNode.nodeType === Node.ELEMENT_NODE) {
            const addedElementNode: Element = <Element>addedNode
            if (addedElementNode.classList.contains('notes_holder')) {
              console.log('GitLab comment editor node added to DOM', addedElementNode)
            }
          }
        })
        mutation.removedNodes.forEach(function (removedNode: Node) {
          if (removedNode.nodeType === Node.ELEMENT_NODE) {
            const removedElementNode: Element = <Element>removedNode
            if (removedElementNode.classList.contains('notes_holder')) {
              console.log('GitLab comment editor node removed from DOM', removedElementNode)
            }
          }
        })
      })
    })

    observer.observe(<Node>document.querySelector('body'), { subtree: true, childList: true })
  }
}
