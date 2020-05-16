import {DOMListener} from '@core/DOMListener'

export class ExelComponent extends DOMListener {
  constructor($root, options = {} ) {
    super( $root, options.listeners )
    this.name = options.name || ''
  }

  //Returns template of component
  toHTML() {
    return ''
  }

  init() {
    this.initDomListeners()
  }

  destroy() {
    this.removeDomListeners()
  }
}
