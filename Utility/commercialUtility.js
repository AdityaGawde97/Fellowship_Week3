const utility = require('../Utility/oopsUtility');

class StockAccount{
    constructor(){
        // reading company json file
        let content1 = utility.readFromFile('../JSON/companyData.json');
        // reading customer json file
        let content2 = utility.readFromFile('../JSON/customerData.json');
        // reading report json file
        let content3 = utility.readFromFile('../JSON/report.json')
        this.companyData = JSON.parse(content1); 
        this.customerData = JSON.parse(content2);
        this.report = JSON.parse(content3);
    }
    /**
     * @description : printing company data
     */
    printCompanyData(){
        console.log('\nCpmpany`s Commercial Data  ');
        console.table(this.companyData.Company);
    }

    /**
     * @description : printing customer data
     */
    printCustomerData(){
        console.log('\nCustomer Data ');
        console.table(this.customerData.Customer)
        
    }

    /**
     * @description : writing or saving company data
     */
    saveCompanyJson(){
        utility.writeIntoFile('../JSON/companyData.json', JSON.stringify(this.companyData))
    }

    /**
     * @description : writing or saving customer data
     */
    saveCustomerJson(){
        utility.writeIntoFile('../JSON/customerData.json', JSON.stringify(this.customerData))
    }

    /**
     * @description : printing buy stock report
     * 
     * @param {*} userName 
     * @param {*} CompanyName 
     * @param {*} numberOfShares 
     * @param {*} totalPrice 
     */
    buyReport(userName,CompanyName,numberOfShares,totalPrice){
        var today = new Date();
        var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        this.report.buyReport.push({
            UserName : userName,
            CompanyName : CompanyName,
            NumberOfSharesBuy : numberOfShares,
            TotalPrice : totalPrice,
            TransactionDate : date
        });
        utility.writeIntoFile('../JSON/report.json', JSON.stringify(this.report))
    }

    /**
     * @description : printing sell stock report
     * 
     * @param {*} userName 
     * @param {*} CompanyName 
     * @param {*} numberOfShares 
     * @param {*} totalPrice 
     */
    sellReport(userName,CompanyName,numberOfShares,totalPrice){
        var today = new Date();
        var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        this.report.sellReport.push({
            UserName : userName,
            CompanyName : CompanyName,
            NumberOfSharesSell : numberOfShares,
            TotalPrice : totalPrice,
            TransactionDate : date
        });
        utility.writeIntoFile('../JSON/report.json', JSON.stringify(this.report))
    }

}

class buyShares extends StockAccount{

    /**
     * @description : buying shares from company
     */
    buy(){

        console.log('\nBuy Shares : \n');
        var index = 0;
        var status = true;
        var userName = utility.readLine().question('Enter your Name : ');
        for (let i in this.customerData.Customer) {
            if( this.customerData.Customer[i].UserName == userName ){
                status = false;
                index = parseInt(i);
            }     
        }
        if (status) {
            console.log('\nPlease Register Your self');
            return;
        }

        console.log('\nAvaiable Companies : ');
        for (let i in this.companyData.Company) {
                console.table(`${Number(i)+1}) ` + this.companyData.Company[i].CompanyName);
        }  
        let answer = utility.readLine().question('\nDo you want to see detail information About Companies Shares then Press Y : ');
        if(answer == 'Y' || answer == 'y'){
            this.printCompanyData();
            console.log('\nAvaiable Companies : ');
            for (let i in this.companyData.Company) {
                    console.table(`${Number(i)+1}) ` + this.companyData.Company[i].CompanyName);
            } 
        }

        let choice = utility.readLine().questionInt('\nEnter your Choice : ');
        if(choice > this.companyData.Company.length) throw '\nInvalid Choice\n';
        answer = utility.readLine().question('\nDo you want to see your details then Press Y : ');
        if(answer == 'Y' || answer == 'y'){
            console.table(this.customerData.Customer[index]);
        }

        let numberOfShares = utility.readLine().questionInt("\nEnter number of shares you want to buy : ");

        if( numberOfShares > this.companyData.Company[choice-1].NumberOfShares) throw 'Company Doesnt have that much shares'
        
        let totalPrice = this.claculateStockPrice(choice-1, numberOfShares);

        console.log("\nTotal Shares Price : " + totalPrice);  
        
        answer = utility.readLine().question('\nDo you Want to buy then Press Y : ');
        if(answer == 'Y' || answer == 'y'){
            this.companyData.Company[choice-1].NumberOfShares -= numberOfShares;
            this.companyData.Company[choice-1].Amount += totalPrice;
            this.customerData.Customer[index].Shares += numberOfShares;
            this.customerData.Customer[index].Amount -= totalPrice;
            console.log(`\nTotal number of Shares of Customer : ${this.customerData.Customer[index].Shares}`);
            console.log(`Total Amount of Customer : ${this.customerData.Customer[index].Amount}\n`);
            console.log('\nYour Transaction has Sucessfully Done.');
            this.buyReport(userName,this.companyData.Company[choice-1].CompanyName,numberOfShares,totalPrice);
            this.saveCustomerJson();
            this.saveCompanyJson();
        }else{
            console.log('\nYour Transaction has cncelled.......');
        }

        this.printCompanyData();
        this.printCustomerData();
    } 

    claculateStockPrice(choice,numberOfShares){
        let value = this.companyData.Company[choice].Price * numberOfShares;
        return value;
    }
}

class sellShares extends StockAccount{

    /**
     * @description : selling shares to the company
     */
    sell(){

        console.log('\nSell Shares : \n');
        let status = true;
        var index = 0;
        var userName = utility.readLine().question('Enter your Name : ');
        for (let i in this.customerData.Customer) {
            if( this.customerData.Customer[i].UserName == userName ){
                index = parseInt(i);
                status = false;
            }     
        }
        if (status) {
            console.log('\nPlease Register Your self');
            return;
        }
        console.log('\nAvaiable Companies : ');
        for (let i in this.companyData.Company) {
                console.table(`${Number(i)+1}) ` + this.companyData.Company[i].CompanyName);
        }  

        let choice = utility.readLine().questionInt('\nEnter your Choice : ');
        if(choice > this.companyData.Company.length) throw '\nInvalid Choice\n';
        var answer = utility.readLine().question('\nDo you want to see your details then Press Y : ');
        if(answer == 'Y' || answer == 'y'){
            console.table(this.customerData.Customer[index]);
        }

        let numberOfShares = utility.readLine().questionInt("\nEnter number of shares you want to Sell : ");

        if( numberOfShares > this.customerData.Customer[index].NumberOfShares) throw 'You Doesnt have that much shares'
        
        let totalPrice = this.claculateStockPrice(choice-1, numberOfShares);

        console.log("\nTotal Shares Price : " + totalPrice);  
        
        answer = utility.readLine().question('\nDo you Want to sell then Press Y : ');
        if(answer == 'Y' || answer == 'y'){
            this.companyData.Company[choice-1].NumberOfShares += numberOfShares;
            this.companyData.Company[choice-1].Amount -= totalPrice;
            this.customerData.Customer[index].Shares -= numberOfShares;
            this.customerData.Customer[index].Amount += totalPrice;
            console.log(`\nTotal number of Shares of Customer : ${this.customerData.Customer[index].Shares}`);
            console.log(`Total Amount of Customer : ${this.customerData.Customer[index].Amount}\n`);
            console.log('\nYour Transaction has Sucessfully Done.');
            this.buyReport(userName,this.companyData.Company[choice-1].CompanyName,numberOfShares,totalPrice);
            this.saveCustomerJson();
            this.saveCompanyJson();
        }else{
            console.log('\nYour Transaction has cncelled.......');
        }

        this.printCompanyData();
        this.printCustomerData();
    } 

    /**
     * @description : calculating shares
     * @param {choosen company} choice 
     * @param {number of shares to purchase} numberOfShares 
     */
    claculateStockPrice(choice,numberOfShares){
        let value = this.companyData.Company[choice].Price * numberOfShares;
        return value;
    }


}

class userLogin extends StockAccount {

    /**
     * @description : adding user information to the json
     */
    registerUser(){
        console.log('\nRegister Customer : ');
        
        var userName = utility.readLine().question('\nEnter the User Name : ');
        var shares = utility.readLine().questionInt('Enter the Available shares : ');
        var amount = utility.readLine().questionInt('\Enter the Amount : ');
    
        this.customerData.Customer.push({
        UserName : userName,
        Shares  : shares,
        Amount : amount
        });
        this.printCustomerData();
        console.log('\nAdding User to Account..............\n');

        this.saveCustomerJson();

    }

    /**
     * @description : removing user data from json
     */
    deleteUser(){
        console.log('\nRemove : ');
        
        let status = true;
        let userName = utility.readLine().question(`\nEnter the User Name : `);
        for(let i=0; i<this.customerData.Customer.length; i++){
            if ( this.customerData.Customer[i].UserName == userName ) {
                status = false;
                let index = this.customerData.Customer.indexOf(this.customerData.Customer[i]);
                this.customerData.Customer.splice(index, 1);
                console.log(`\nRemoving User Account.............\n`);
            }
        }
        if(status)
            console.log("\nYou have entered wrong name.\n");

        this.saveCustomerJson();
    }

    userActivity(){
        
        console.log('\nUser Login : ');
        do{
            console.log('\n1) Add User\n2) Remove User\n3) Display Company Shares\n4) Buy Shares\n5) Sell Shares\n6) Print Report\n7) Exit');
            var choice = utility.readLine().questionInt('\nEnter your choice : ');
            switch ( choice ) {
                case 1:
                    this.registerUser();
                    break;
                case 2:
                    this.deleteUser();
                    break;
                case 3:
                    this.printCompanyData();
                    break;
                case 4:
                    let buy = new buyShares();
                    buy.buy();
                    break;
                case 5:
                    let sell = new sellShares();
                    sell.sell();
                    break;
                case 6:
                    var index = 0;
                    var status = true;
                    var userName = utility.readLine().question('\nEnter your Name : ');
                    for (let i in this.report.buyReport) {
                        if( this.report.buyReport[i].UserName == userName ){
                            status = false;
                            index = parseInt(i);
                        }     
                    }
                    if (status) {
                        console.log('\nNo Buy shares Transaction Available');
                    }
                    else{
                        console.log('\nBuy Report :');
                        
                        console.table(this.report.buyReport[index])
                    }
                    status = true;
                    for (let i in this.report.sellReport) {
                        if( this.report.sellReport[i].UserName == userName ){
                            status = false;
                            index = parseInt(i);
                        }     
                    }
                    if (status) {
                        console.log('\nNo Sell shares Transaction Available');
                    }
                    else{
                        console.log('\nSellReport :');
                        console.table(this.report.sellReport[index])
                    }
                    
                    break;
                case 7:
                    break
                default:
                    console.log('Invalid Choice....');
                    break;
            }
        }while (choice != 7) 
        
    }


    
}

class companyLogin extends StockAccount{

    /**
     * @description : adding company data to the json
     */
    registerCompany(){
        console.log('Register Company : ');
        
        var companyName = utility.readLine().question('\nEnter the Company Name : ');
        var shares = utility.readLine().questionInt('Enter the Available shares : ');
        var price = utility.readLine().questionInt('Enter the price of share : ');
        var symbol = utility.readLine().question('Enter the Symbol of Company : ')
        var amount = utility.readLine().questionInt('Enter the Amount : ');
    
        this.companyData.Company.push({
            CompanyName : companyName,
            NumberOfShares : shares,
            Price : price,
            Symbol : symbol,
            Amount : amount
        });
        console.log('\nAdding Company Account..............\n');
        this.saveCompanyJson();

    }

    /**
     * @description : removing company data from the json
     */
    deleteCompany(){
        let status = true;
        let companyName = utility.readLine().question(`\nEnter the User Name : `);
        for(let i=0; i<this.companyData.Company.length; i++){
            if ( this.companyData.Company[i].CompanyName == companyName ) {
                status = false;
                let index = this.companyData.Company.indexOf(this.companyData.Company[i]);
                this.companyData.Company.splice(index, 1);
                console.log(`\nRemoving Company Account.............\n`);
            }
        }
        if(status)
            console.log("\nYou have entered wrong name.\n");

        this.saveCompanyJson();
    }

    companyActivity(){
        console.log('\nCompany Login : ');
        do{
            console.log('\n1) Add Company\n2) Remove Company\n3) Exit');
            var choice = utility.readLine().questionInt('\nEnter your choice : ');
            switch ( choice ) {
                case 1:
                    this.registerCompany();
                    break;
                case 2:
                    this.deleteCompany();
                    break;
                case 3:
                    break;
                default:
                    console.log('Invalid Choice....');
                    break;
            }
        }while (choice != 3) 

    }



}

module.exports = {
    userLogin,
    companyLogin,

    Utility(){
        return utility;
    }
}