// node core module 
const name = require('./util.js').variable
const add = require('./util.js').func

const getNotes = require('./notes')

console.log(name)
console.log(add(4,3))

console.log('from notes.js func  ' + getNotes())




// const fs = require('fs')

// fs.writeFileSync('notes.txt','This file was created by Node.js')

// // appending content to file
// fs.appendFileSync('notes.txt',' This is the added content by append func')

// by npm init -> create single config file that contains dependencies of whole project!! 
