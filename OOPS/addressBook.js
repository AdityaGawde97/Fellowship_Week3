/**
 * @description : Simple Address Book
 * The software to be designed is a program that can be used to maintain an address book. An address book
 * holds a collection of entries, each recording a person's first and last names, address, city, state, 
 * zip, andphone number.
 * It must be possible to add a new person to an address book, to edit existing information about a person
 * (except the person's name), and to delete a person. It must be possible to sort the entries in the address
 * book alphabetically by last name (with ties broken by first name if necessary), or by ZIP code (with ties
 * broken by name if necessary). It must be possible to print out all the entries in the address book in
 * "mailing label" format.
 * 
 * @author : Aditya Gawde
 * 
 * @since : 29/11/2019
 */
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