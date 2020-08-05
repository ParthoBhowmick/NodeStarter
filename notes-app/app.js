
// node core module 

const getNotes = require('./notes')
const chalk = require('chalk')
const name = require('./util.js').variable
const add = require('./util.js').func


const { default: validator } = require('validator')

console.log(name)
console.log(add(4,3))

console.log('from notes.js func  ' + getNotes())

console.log(validator.isEmail('ppmail.com'))
console.log(validator.isURL('pp@mail.com'))

console.log(chalk.green.bold('Success!'));

// access command line args after command like node app.js some_value
console.log(process.argv[2])

// const fs = require('fs')

// fs.writeFileSync('notes.txt','This file was created by Node.js')

// // appending content to file
// fs.appendFileSync('notes.txt',' This is the added content by append func')

// by npm init -> create single config file that contains dependencies of whole project!! 
