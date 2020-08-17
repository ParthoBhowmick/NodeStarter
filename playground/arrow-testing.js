const event = {
    name : 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    // printGuestList: function() {
    //     console.log('Guest list for ' + this.name)
    // }


    // this occur problem while we want to access this from arrow function
    printGuestListByArrow: () => {
        console.log('Guest list for ' + this.name)
    },


    // this occcur ok 
    printGuestList() {

    
        console.log('Guest list for ' + this.name)

        // this will occur error because nested function can't distinguish this
        this.guestList.forEach(function(guest) {
            console.log(guest + ' is attending ' + this.name)
        })

        // es6 arrow can because here arrow bind the parent func
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })

    }

}

event.printGuestList()