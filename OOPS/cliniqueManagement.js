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