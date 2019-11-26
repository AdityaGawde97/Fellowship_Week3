const utility = require('../Utility/inventoryUtility')
const inventUser = new utility.inventoryUser();
const inventManager = new utility.inventoryManager();

class Invent {

    inventoryLogin(){
        console.log('\nInventory Login\n\n\t1) Inventory User \n\t2) Inventory Manager');
        var log = utility.Utility().readLine().questionInt('\nEnter your choice : ')

        switch (log) {
            case 1 :
                inventUser.userManagement();
                break;
            
            case 2 :
                inventManager.dataManagement();
                break;
            default:
                break;
        }
        
    }

}
var i = new Invent();
i.inventoryLogin();
