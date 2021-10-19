import { observable } from 'mobx'

const yearStore = observable({
  year: new Date().getFullYear(),

  increase() {
    this.year++
  },
  decrease() {
    this.year--
  },
  reset() {
    this.year = new Date().getFullYear()
  }
})

export default yearStore;