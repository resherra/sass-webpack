import isEmail from 'validator/lib/isEmail'
import doubleMe from '../app/doubleMe'


// test

console.log(isEmail(`john@gmail.com`))
console.log(doubleMe(100))

// testing hot modules replacement

document.querySelector(`h1`).style.color = `lightblue`


// enabling hot modules replacement

if (module.hot) {
    module.hot.accept()

}