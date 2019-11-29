const utility = require('../Utility/dataProcessingUtility')

var comp = new company.Company();
var user=new  user.User();

class CommercialDataProcessing{
    commercialManagement(){

        do {
            console.log("\n1) Company Login \n2) User Login \n3) Exit\n");
            var choice1 = utility.Utility().readLine().questionInt("\nEnter your choice : ");
            switch (choice1) {
                case 1 :
                    comp.company();
                    break;

                case 2 :
                    user.user();
                    break;

                case 3 : 
                    console.log('\nExiting..........');
                    return;

                default:
                    console.log("\nEnter valid choice!");
            }
        } while (choice != 3);
    } 
    
    companyLogin(){
        company.addList();
        do {
            console.log("\n1) Add company\n2) Remove company\n3) Print list\n4) Exit");
            var choice2 = utility.Utility().readLine().question("\nEnter your choice : ");
            switch (choice2) {
                case 1 :
                    company.addCompany();
                    company.writeToFile();
                    break;

                case 2 :
                    company.removeCompany();
                    company.writeToFile();
                    break;

                case 3 :
                    company.printList();
                    break;

                case 4 :
                    return;  

                default:
                    console.log("\nEnter valid choice");
            }
        } while (choice2 != 4);
    }

    userLogin(){
        user.addList();
    do {
        console.log("\n1) Register USer \n2) Remove User\n3) Print User list\n4) Buy or Sell the Stock \n5) Exit");
        var choice3 = utility.Utility().readLine().questionInt("\nEnter your choice : ");
        switch (choice3) {

            case 1 :
                user.addUser();
                user.writeToFile();
                break;

            case 2 :
                user.removeUser();
                user.writeToFile();
                break;

            case 3 :
                user.printList();
                break;

            case 4 :
                buySell.BuySellStock();
                break;    

            case 5 :
                return; 

            default:
                console.log("Enter valid choice");
        }
    } while (choice3 != 5);
}
    
}
var start=new CommercialDataProcessing();
start.manage();

