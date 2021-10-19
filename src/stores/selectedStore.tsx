import { observable } from 'mobx'

const selectedStore = observable({
  day: new Date().toLocaleDateString(),

  selected(selected: string) {
    this.day = selected
  }
})

export default selectedStore;