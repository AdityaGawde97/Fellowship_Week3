/**
 * Inventory Management Program
 * @description  -> Extend the above program to Create InventoryManager to manage the Inventory. The Inventory 
 *         Manager will use InventoryFactory to create Inventory Object from JSON. The InventoryManager will call 
 *         each Inventory Object in its list to calculate the Inventory Price and then call the Inventory Object to 
 *         return the JSON String. The main program will be with InventoryManager
 * @input -> read in JSON File
 * @logic -> Get JSON Object in Java or NSDictionary in iOS. Create Inventory Object from JSON. Calculate 
 *          the value for every Inventory. 
 * @output -> Create the JSON from Inventory Object and output the JSON String.
 * 
 * @author : Aditya Gawde
 * 
 * @since : 25/11/19
 */
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
