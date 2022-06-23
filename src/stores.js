import Vue from 'vue'

class ScreenStore {
  constructor () {
    this.state = {
      text: '0'
    }
  }

  update (value) {
    this.state.text = this.state.text !== '0' ? this.state.text + value : value + ''
  }

  reset () {
    this.state.text = '0'
  }

  delete () {
    const length = this.state.text.length
    if (length - 1 > 0) this.state.text = this.state.text.substring(0, length - 1)
    else this.state.text = '0'
  }

  replace (value) {
    this.state.text = value
  }
}

export default Vue.observable({
  screenStore: new ScreenStore()
})
