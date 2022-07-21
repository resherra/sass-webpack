import "../scss/style.scss"
import isEmail from 'validator/lib/isEmail'
import doubleMe from '../app/doubleMe'


// test

console.log(isEmail(`john@gmail.com`))
console.log(doubleMe(100))

// enabling hot modules replacement

if (module.hot) {
    module.hot.accept()
}