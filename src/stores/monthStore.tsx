import { observable } from 'mobx'

const monthStore = observable({
  month: new Date().getMonth()+1,

  increase() {
    this.month++
  },
  decrease() {
    this.month--
  },
  reset() {
    this.month = new Date().getMonth()+1
  }
})

export default monthStore;