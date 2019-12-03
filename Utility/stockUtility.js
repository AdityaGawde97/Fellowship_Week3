const utility = require('../Utility/oopsUtility')

class Stock{
    constructor(){

        let content = utility.readFromFile('../JSON/stockData.json')
        this.data = JSON.parse(content);
        this.stockLength = this.data.stock.length;
    }
}

class stockPortfolio extends Stock{
   
    /**
     * @description : displaying stock data from json
     */
    displayStock(){
        console.log('\nStock Name : \n');
        console.table(this.data.stock);

    }

    /**
     * @description : buying stock
     */
    buyStock(){
        console.log('\nBuy Stock : \n');
        for (let i in this.data.stock) {
                console.table(`${Number(i)+1}) ` + this.data.stock[i].stockName);
        }  

        let choice = utility.readLine().questionInt('\nEnter your Choice : ');
        if(choice > this.stockLength) throw '\nInvalid Choice\n';
        //purches requried shares & calculate the total stock price 
        let numberOfShares = utility.readLine().question("\nEnter number of shares you want to buy : ");

        if( numberOfShares > this.stockLength.stockValue) throw 'enter valid number'
        let totalPrice = this.claculateStockPrice(choice-1, numberOfShares);
        console.log("\nTotal Stock Price : " + totalPrice);   
    } 
    /**
     * @description : calculation total stock
     * @param {*} choice 
     * @param {*} numberOfShares 
     */
    claculateStockPrice(choice,numberOfShares){
        let value = this.data.stock[choice].stockPrice * numberOfShares;
        return value;
    }
}
module.exports={

    stockPortfolio,

    Utility()
    {
        return utility;
    }
}