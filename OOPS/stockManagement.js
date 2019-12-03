/**
 * Stock Account Management
 *@description -> Write a program to read in Stock Names, Number of Share, Share Price. Print a Stock Report with 
 *         total value of each Stock and the total value of Stock.
 * @input -> N number of Stocks, for Each Stock Read In the Share Name, Number of Share, and Share Price
 * @logic -> Calculate the value of each stock and the total value
 * @output -> Print the Stock Report.
 * @hint -> Create Stock and Stock Portfolio Class holding the list of Stocks read from the input file. 
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
        try{
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
                        console.log('\nExiting.......\n');
                        break;

                    default:
                        console.log('I\nnvalid Choice');
                        break;
    }
            }while(choice != 3)  
        }
        catch(error){
            console.log(error);
            
        }  
    }
}  

const report = new StockReport()
report.stockManagement();
