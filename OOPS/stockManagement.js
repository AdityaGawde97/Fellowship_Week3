const utility = require('../Utility/stockUtility')

const stock = new utility.stockPortfolio();

class StockReport {

    stockManagement(){
        do{
            console.log('\n\tBridgeLabz Stock Management');
            

            console.log('\n1) Display available stock.\n2) Buy Stock\n3) Exit\n');
            
            var choice =utility.Utility().readLine().questionInt("\nEnter your choice : ");
            switch (choice) {
                case 1 : 
                    stock.displayStock();
                    break;
                case 2 : 
                    stock.buyStock();
                    break;

                case 3 : 
                    console.log('\nExiting.......');
                    break;

                default:
                    console.log('Invalid Choice');
                    break;
}
        }while(choice != 3)    
    }
}  
const report = new StockReport()
report.stockManagement();