const names = require('./first-module')
const sayHi = require('./sayHi')

sayHi(`${names.name}'s secret is ${names.secret}`)
