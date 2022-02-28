import { buildCodeSmellText } from './renderers/buildCodeSmellText'
import DomWatcher from './eventHandlers/detectChangedDomNodes'

// eslint-disable-next-line no-unused-vars
const domWatcher = new DomWatcher()

chrome.runtime.onMessage.addListener(function (msg) {
  if (msg.action === 'inject-clean-code-smell') {
    // @ts-ignore
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
      const el = document.activeElement
      // @ts-ignore
      let currentValue = el.value.trim()
      if (currentValue !== '') {
        currentValue += '\n\n'
      }
      currentValue += buildCodeSmellText(msg.codeSmell)
      // @ts-ignore
      el.value = currentValue
      const e = new Event('change')
      // @ts-ignore
      el.dispatchEvent(e)
    }
  }
})
