const utility = require('../Utility/addressBookUtility')
const personObj = new utility.person();

class addressBook {

    addressBookManagement(){
        try{
            do{
                console.log('\n\t1) Display Address Book\n\t2) Add Person\n\t3) Remove Person\n\t4) Edit Person\n\t5) Sort By First Name\n\t6) Sort By Last Name\n\t7) Sort By Zip Code\n\t8) Exit');
                var choice = utility.Utility().readLine().questionInt('\nEnter your choice : ')
                switch (choice) {
                    case 1 :
                        personObj.displayDeatails();
                        break

                    case 2 :
                        personObj.addPerson();
                        break;
                    
                    case 3 :
                        personObj.removePerson();
                        break;

                    case 4 :
                        personObj.editPerson();
                        break;

                    case 5 :
                        personObj.sortByFirstName();
                        break;

                    case 6 :
                        personObj.sortByLastName();
                        break;


                    case 7 :
                        personObj.sortByZipCode();
                        break;

                    case 8 :
                        console.log('\nExiting.........\n');
                        break;
        
                    default:
                        console.log('\nInvalid Choice\n');
                        break;
                    }
            }while(choice!=8)
        }
        catch(error){
            console.log(error);
        }

    }

}
var Person = new addressBook();
Person.addressBookManagement();