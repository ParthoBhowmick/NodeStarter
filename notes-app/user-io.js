const getNotes = require('./notes')
const yargs = require('yargs')

const { argv, title } = require('process')
const notes = require('./notes')

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
        console.log('called')
        notes.addNote(argv.title,argv.body)
    }


})

console.log(yargs.argv)