const utility = require('./oopsUtility');

class StockAccount{
    constructor(){
        let content1 = utility.readFromFile('../JSON/companyData.json');
        let content2 = utility.readFromFile('../JSON/customerData.json');
        this.companyData = JSON.parse(content1);
        this.customerData = JSON.parse(content2);
    }

    printCompanyData(){
        console.log('\n\tCpmpany`s Commercial Data  ');
        
        console.table(this.companyData.Company);
    }

    printCustomerData(){
        console.log('\n\tCustomer Data ');
        console.table(this.customerData.Customer)
        
    }

    saveCompanyJson(){
        utility.writeIntoFile('../JSON/companyData.json', JSON.stringify(this.companyData))
    }

    saveCustomerJson(){
        utility.writeIntoFile('../JSON/customerData.json', JSON.stringify(this.customerData))
    }

}


module.exports = {
    StockAccount
};

