const fs = require('fs')

const task = {
    name : "wash your teeth",
    priority : 3
}

const taskJson = JSON.stringify(task)

fs.writeFileSync('tasks.json',taskJson)

const databuffer = fs.readFileSync('tasks.json')
const dataJSON = JSON.parse(databuffer.toString())
console.log(dataJSON)