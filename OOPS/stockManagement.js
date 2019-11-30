/**
 * Stock Account Management
 * Desc -> Write a program to read in Stock Names, Number of Share, Share Price. Print a Stock Report with 
 *         total value of each Stock and the total value of Stock.
 * I/P -> N number of Stocks, for Each Stock Read In the Share Name, Number of Share, and Share Price
 * Logic -> Calculate the value of each stock and the total value
 * O/P -> Print the Stock Report.
 * Hint -> Create Stock and Stock Portfolio Class holding the list of Stocks read from the input file. 
 *         Have functions in the Class to calculate the value of each stock and the value of total stocks
 * 
 * @author : Aditya Gawde
 * 
 * @since : 25/11/19
 */
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