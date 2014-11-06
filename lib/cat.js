export class Cat {

  constructor(name='Simon') {
    this.name = name
  }

  meow() {
    'MROW'
  }

  destroyTheHouse() {
    window['Object'] = undefined
  }

  eat() {
    'nom nom nom'
  }

  sleep(callback) {
    setTimeout(callback, 1000)
  }
}