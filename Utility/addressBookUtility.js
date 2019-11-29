const utility = require('../Utility/oopsUtility');

class AddressBook{
    constructor(){
        let data = utility.readFromFile('../JSON/addressBookData.json')
        this.details = JSON.parse(data);
        //console.log(this.details);
    }
}

class person extends AddressBook {

    displayDeatails(){
        console.log('\n\t*********************************** Address Book ***********************************\n');
        //for (var i = 0; i < this.details.persons.length; i++) {
            console.table(this.details.persons);
        //}
        //console.log(this.details);
       
    }

    addPerson(){

        var firstName = utility.readLine().question('\nEnter the Fisrt Name : ');
        var lastName = utility.readLine().question('\nEnter the Last Name : ');
        var address = utility.readLine().question('\nEnter the Address : ');
        var city = utility.readLine().question('\nEnter the City : ');
        var state = utility.readLine().question('\nEnter the State : ');
        var zipCode = utility.readLine().questionInt('\nEnter the Zip_Code : ');
        var phoneNumber = utility.readLine().questionInt('\nEnter the Phone Number : ')
        for(let i=0; i<this.details.persons; i++){
        if(phoneNumber == this.details.persons[i].phoneNumber)
            var status = true;
        else
            var status = false;
    }
        if(!status){
            this.details.persons.push({
            firstName : firstName,
            lastName : lastName,
            address : address,
            city : city,
            state : state,
            zipCode : zipCode,
            phoneNumber : phoneNumber
            });
            console.log('\nAdding Person Into Address Book..............');
            utility.writeIntoFile('../JSON/addressBookData.json', JSON.stringify(this.details));
        }
        else{
            console.log('This person Already Existed............');
            
        }
    }

    removePerson(){
        let status = true;
        let first_name = utility.readLine().question(`\nEnter the First Name : `);
        let last_name = utility.readLine().question('\nEnter the Last Name : ');
        for(let i=0; i<this.details.persons.length; i++){
            if (this.details.persons[i].firstName == first_name && this.details.persons[i].lastName == last_name ) {
                status = false;
                let index = this.details.persons.indexOf(this.details.persons[i]);
                this.details.persons.splice(index, 1);
                console.log(`\nRemoving Person from Address Book.............\n`);
            }
        }
        if(status)
            console.log("\nyou have entered wrong name.\n");

        utility.writeIntoFile('../JSON/addressBookData.json', JSON.stringify(this.details))
    }

    editPerson() {

        var firstName = utility.readLine().question("\nEnter person's first name to edit info : ");
        var lastName = utility.readLine().question("\nEnter person's last name to edit info : ");
        var index;
        for (let i in this.details.persons) {
            if (this.details.persons[i].firstName == firstName && this.details.persons[i].lastName == lastName) {
                console.table(this.details.persons[i]);
                index = i;
                break;
            }
        }

        console.log("\n\t1) Edit address\n\t2) Edit City\n\t3) Edit State\n\t4) Edit ZipCode\n\t5) Phone Number");
        var choice = utility.readLine().questionInt("\nEnter your choice : ");
        switch (choice) {
            case 1 :
                var address = utility.readLine().question("\nEnter new Address : ");
                this.details.persons[index].address = address;
                break;
            case 2 :
                var city = utility.readLine().question("\nEnter new City : ");
                this.details.persons[index].city = city;
                break;
            case 3 :
                var state = utility.readLine().question("\nEnter new State : ");
                this.details.persons[index].state = state;
                break;

            case 4 :
                var zip = utility.readLine().questionInt("\nEnter new Zip Code : ");
                this.details.persons[index].zipCode = zip;
                break;

            case 5 :
                var phoneNumber = utility.readLine().questionInt("\nEnter new Phone Number : ");
                for(let i=0; i<this.details.persons; i++){
                    if(phoneNumber == this.details.persons[i].phoneNumber)
                        var status = true;
                    else
                        var status = false;
                }
                if(status)
                    this.details.persons[index].phoneNumber = phoneNumber;
                else
                    console.log('\nThis person Already Existed............\n');
                break;

            default:
                console.log("\nEnter valid choice\n");
        }
        utility.writeIntoFile('../JSON/addressBookData.json', JSON.stringify(this.details))
    }

    sortByFirstName() {

        for (let i = 0; i < this.details.persons.length; i++) {
            for (let j = 0; j < this.details.persons.length - 1; j++) {

                if (this.details.persons[j].firstName.localeCompare(this.details.persons[j + 1].firstName) == 1) {
                    let temp = this.details.persons[j];
                    this.details.persons[j] = this.details.persons[j + 1];
                    this.details.persons[j + 1] = temp;
                }
            }
        }
        this.displayDeatails();
        //console.log(this.details);
        //utility.writeIntoFile('../JSON/addressBookData.json', JSON.stringify(this.details))
    }

    sortByLastName() {

        for (let i = 0; i < this.details.persons.length; i++) {
            for (let j = 0; j < this.details.persons.length - 1; j++) {

 
                if (this.details.persons[j].lastName > this.details.persons[j + 1].lastName) {
                    let temp = this.details.persons[j];
                    this.details.persons[j] = this.details.persons[j + 1];
                    this.details.persons[j + 1] = temp;
                }
            }
        }
        this.displayDeatails();
        //console.log(this.details);
        //utility.writeIntoFile('../JSON/addressBookData.json', JSON.stringify(this.details))
        
    }

    sortByZipCode() {

        for (let i = 0; i < this.details.persons.length; i++) {
            for (let j = 0; j < this.details.persons.length - 1; j++) {

 
                if (this.details.persons[j].zipCode > this.details.persons[j + 1].zipCode) {
                    let temp = this.details.persons[j];
                    this.details.persons[j] = this.details.persons[j + 1];
                    this.details.persons[j + 1] = temp;
                }
            }
        }
        this.displayDeatails();
        //console.log(this.details);
        //utility.writeIntoFile('../JSON/addressBookData.json', JSON.stringify(this.details))
        
    }
}


module.exports = {
    person,

    Utility(){
        return utility;
    }
}