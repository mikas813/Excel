import {capitalize} from '@core/utils';

export class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error( `No $root provided for DomListener` )
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners() {
    //Get array 'listeners' from component and add a listener
    // to component if it is'nt empty.
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      if (!this[method]) {
        const name = this.name || ''
        //This error is thrown if listener is'nt used!
        throw new Error(
          `Method ${method} is not implemented in ${name} Component`
        )
      }
      this[method] = this[method].bind(this)
      //The method "on" is equal to "addEventListener"
      this.$root.on(listener, this[method])
    })
  }

  removeDomListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      this.$root.off(listener.this[method])
    })
  }
}

//Function "getMethodName" ad "on" to event name taken from array listeners
function getMethodName(eventName) {
  //"Capitalize method is a pure function located in 'utils.js'
  // that turns first letter of event name to upper case"
  return 'on' + capitalize(eventName)
}


