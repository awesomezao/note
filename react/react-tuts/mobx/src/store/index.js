import { observable, computed, action } from 'mobx'

class Counter {
  name = 'Counter App'
  @observable count = 100
  @computed get doubleCount() {
    return this.count * 2
  }
  @action.bound increment() {
    this.count += 1
  }
  @action.bound decrement() {
    this.count -= 1
  }
}

const counterStore = new Counter()

export default counterStore