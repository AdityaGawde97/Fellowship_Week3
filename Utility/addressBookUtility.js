const utility = require('../Utility/oopsUtility');

class AddressBook{
    constructor(){
        let data = utility.readFromFile('../JSON/addressBookData.json')
        this.details = JSON.parse(data);        // storing JSON object 
        //console.log(this.details);
    }
}

class person extends AddressBook {

    /**
     * @description : Displaying Json data
     */
    displayDeatails(){
        console.log('\n\t*********************************** Address Book ***********************************\n');
        //for (var i = 0; i < this.details.persons.length; i++) {
            console.table(this.details.persons);
        //}
        //console.log(this.details);
       
    }

    /**
     * @description : adding person in address book
     */
    addPerson(){

        var firstName = utility.readLine().question('\nEnter the First Name : ');
        if (!isNaN(firstName)) {
            console.log('\nEnter Valid Input, Please Try Again');
            return;
        }
        var lastName = utility.readLine().question('\nEnter the Last Name : ');
        if (!isNaN(lastName)) {
            console.log('\nEnter Valid Input, Please Try Again');
            return;
        }
        var address = utility.readLine().question('\nEnter the Address : ');

        var city = utility.readLine().question('\nEnter the City : ');
        if (!isNaN(city)) {
            console.log('\nEnter Valid Input, Please Try Again');
            return;
        }
        var state = utility.readLine().question('\nEnter the State : ');
        if (!isNaN(state)) {
            console.log('\nEnter Valid Input, Please Try Again');
            return;
        }
        var zipCode = utility.readLine().question('\nEnter the Zip_Code : ');
        if (zipCode.length!=6) {
            console.log('\nZip Code must 6 digit.');
            return;  
        }
        zipCode=parseInt(zipCode);
        var phoneNumber = utility.readLine().question('\nEnter the Phone Number : ');
        if (phoneNumber.length!=10) {
            console.log('\nInvalid Mobile number'); 
            return; 
        }
        phoneNumber = parseInt(phoneNumber);
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

    /**
     * @description : Removing person address book
     */
    removePerson(){
        let status = true;
        let first_name = utility.readLine().question(`\nEnter the First Name : `);
        if (!isNaN(first_Name)) {
            console.log('\nEnter Valid Input, Please Try Again');
            return;
        }
        let last_name = utility.readLine().question('\nEnter the Last Name : ');
        if (!isNaN(last_name)) {
            console.log('\nEnter Valid Input, Please Try Again');
            return;
        }
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

    /**
     * @description : edit person details
     */
    editPerson() {

        var firstName = utility.readLine().question("\nEnter person's first name to edit info : ");
        if (!isNaN(firstName)) {
            console.log('\nEnter Valid Input, Please Try Again');
            return;
        }
        var lastName = utility.readLine().question("\nEnter person's last name to edit info : ");
        if (!isNaN(lastName)) {
            console.log('\nEnter Valid Input, Please Try Again');
            return;
        }
        var index;
        for (let i in this.details.persons) {
            if (this.details.persons[i].firstName == firstName && this.details.persons[i].lastName == lastName) {
                console.table(this.details.persons[i]);
                index = i;
                break;
            }
        }
        lable :
            do{
                console.log("\n\t1) Edit address\n\t2) Edit City\n\t3) Edit State\n\t4) Edit ZipCode\n\t5) Phone Number\n\t6) Exit");
                var choice = utility.readLine().questionInt("\nEnter your choice : ");
                switch (choice) {
                    case 1 :
                        var address = utility.readLine().question("\nEnter new Address : ");
                        this.details.persons[index].address = address;
                        break;
                    case 2 :
                        var city = utility.readLine().question("\nEnter new City : ");
                        if (!isNaN(city)) {
                            console.log('\nEnter Valid Input, Please Try Again');
                            continue lable; 
                        }
                        this.details.persons[index].city = city;
                        break;
                    case 3 :
                        var state = utility.readLine().question("\nEnter new State : ");
                        if (!isNaN(state)) {
                            console.log('\nEnter Valid Input, Please Try Again');
                            continue lable; 
                        }
                        this.details.persons[index].state = state;
                        break;

                    case 4 :
                        var zip = utility.readLine().question("\nEnter new Zip Code : ");
                        if (zip.length!=6) {
                            console.log('\nZip Code must 6 digit.');
                            continue lable; 
                        }
                        this.details.persons[index].zipCode = parseInt( zip );
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
                    
                    case 6: break;

                    default:
                        console.log("\nEnter valid choice\n");
                }
            }while(choice!=6)
        utility.writeIntoFile('../JSON/addressBookData.json', JSON.stringify(this.details))
    }

    /**
     * @description : sorting adddress book by first name
     */
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

    /**
     * @description : sorting address book last name
     */
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

    /**
     * @description : sorting addrss book by zip code
     */
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

    /**
     * @description : returning utility object
     */
    Utility(){
        return utility;
    }
}