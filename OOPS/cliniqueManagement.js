/**
 * @description : Clinique Management Programme. This programme is used to manage a list of Doctors associated with the 
 * Clinique. This also manages the list of patients who use the clinique. It manages Doctors by Name, Id, 
 * Specialization and Availability (AM,  PM or both). It manages Patients by Name, ID, Mobile Number and 
 * Age. The Program allows users to search Doctor by name, id, Specialization or Availability. Also the 
 * programs allows users to search patient by name, mobile number or id. The programs allows patients to 
 * take appointment with the doctor. A doctor at  any availability time can see only 5 patients. If 
 * exceeded the user can take appointment for patient at different date or availability time. Print the 
 * Doctor Patient Report. Also show which Specialization is popular in the Clinique as well as which Doctor 
 * is popular.
 * 
 * @author : Aditya Gawde
 * 
 * @since : 27/11/19
 */
const utility = require('../Utility/cliniqueUtility');
const cliniqueObj = new utility.cliniqueManagement();

class myClinique{
    cliniqueManagement() {

        console.log("\n***** Welcome to BridgeLabz Clinique *****\n");
        do{
            console.log("\n\t1) Search Doctor\n\t2) Search patient\n\t3) Add doctor\n\t4) Take appointment\n\t5) Check Appointment\n\t6) Exit");
            var choice = utility.Utility().readLine().questionInt("\nEnter your choice : ");
            switch (choice) {
                case 1 :
                    cliniqueObj.searchDoctor();                
                    break;

                case 2 :
                    cliniqueObj.searchPatient();                
                    break;

                case 3 :
                    cliniqueObj.addDoctor();                
                    break;   

                case 4 :
                    cliniqueObj.takeAppointment();                
                    break; 

                case 5 :
                    cliniqueObj.checkAppoinment();
                    break;

                case 6 :
                    console.log('\nExiting.........');
                    return;

                default:
                    console.log('\nInvalid Choice');
                    break;
            }
        }while (choice != 6);
    }
}

const open = new myClinique();
open.cliniqueManagement();