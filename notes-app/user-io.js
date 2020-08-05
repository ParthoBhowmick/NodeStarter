const getNotes = require('./notes')
const yargs = require('yargs')
const chalk = require('chalk')
const { argv } = require('process')

yargs.command ({

    command : "ADD",
    describe : "add a new note",
    builder : {

        title: {
            describe: 'This is title',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: 'This is description',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function(argv) {
        console.log(chalk.inverse.blue("Adding New Note"))
        console.log(argv.title)
        console.log(argv.body)
    }

})

console.log(yargs.argv)