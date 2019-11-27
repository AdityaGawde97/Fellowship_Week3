const utility = require('../Utility/inventoryUtility')
const inventUser = new utility.inventoryUser();
const inventManager = new utility.inventoryManager();

class Invent {

    inventoryLogin(){
        do{
            console.log('\nInventory Login\n\n\t1) Inventory User \n\t2) Inventory Manager\n\t3) Exit\n');
            var log = utility.Utility().readLine().questionInt('\nEnter your choice : ')

            switch (log) {
                case 1 :
                    inventUser.userManagement();
                    break;
                
                case 2 :
                    inventManager.dataManagement();
                    break;
                
                case 3 :
                    console.log('\nExiting..................................');
                    return;

                default:
                    break;
            }
        }while(log != 3);
        
        
        
    }

}
var i = new Invent();
i.inventoryLogin();
