/**
 * Commercial data processing - StockAccount.java implements a data type that might be used by a financial 
 * institution to keep track of customer information. The StockAccount class implements following methods
 * The StockAccount class also maintains a list of CompanyShares object which has Stock Symbol and Number 
 * of Shares as well as DateTime of the transaction. When buy or sell is initiated StockAccount checks if 
 * CompanyShares are available and accordingly update or create an Object.
 * 
 * @author : Aditya Gawde
 * 
 * @since : 30/11/19
 */
const utility = require('../Utility/commercialUtility')

const user = new utility.userLogin();

const company = new utility.companyLogin();

class stockAccount{

    accountManagement(){
        do{
            console.log('\nStock Account : ');
            console.log('\n1) User Login\n2) Company Login\n3) Exit');
            var choice = utility.Utility().readLine().questionInt('\nEnter your choice : ');
            switch (choice) {
                case 1:
                    user.userActivity();
                    break;
                case 2:
                    company.companyActivity()
                    break;
                case 3:
                    return;
                default:
                    break;
            }
        }while(choice!=3);
    }
    
    
}

const shares = new stockAccount();
shares.accountManagement()
