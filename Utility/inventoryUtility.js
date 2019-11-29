const utility = require('../Utility/oopsUtility');

class Inventory{
    constructor(){

        // reading data from json file and parsing it
        let data = utility.readFromFile('../JSON/inventoryData.json')
        this.Inventory = JSON.parse(data);
        //console.log(this.Inventory);
    }

    /**
     * @description : displaying json data
     */
    // displayData(){

    //     console.log('\n*********************** Inventory Data ************************\n');
    //     console.log('\n\tAvailable\tName\t\t Weight\tPrice');
    //     console.log('\t---------------------------------------------');
    //     console.log('\t Rice  ');
    //     for (let i = 0; i < this.Inventory.Rice.length; i++) {
    //         console.log(`\t\t\t${this.Inventory.Rice[i].name}\t ${this.Inventory.Rice[i].weight}\t${this.Inventory.Rice[i].price}`);         
    //     }
    //     console.log('\t---------------------------------------------');
    //     console.log('\t Pulses ');
    //     for (let i = 0; i < this.Inventory.Pulses.length; i++) {
    //         console.log(`\t\t\t${this.Inventory.Pulses[i].name}\t ${this.Inventory.Pulses[i].weight}\t${this.Inventory.Pulses[i].price}`);         
    //     }
    //     console.log('\t---------------------------------------------');
    //     console.log('\t Wheat ');
    //     for (let i = 0; i < this.Inventory.Wheat.length; i++) {
    //         console.log(`\t\t\t${this.Inventory.Wheat[i].name}\t ${this.Inventory.Wheat[i].weight}\t${this.Inventory.Wheat[i].price}`);         
    //     }
    //     console.log('\t---------------------------------------------\n');
    // }
    displayData(){

        console.log('\n*********************** Inventory Data ************************\n');

        console.log('\nRice : ');
        console.table(this.Inventory.Rice)         

        console.log('\nPulses : ');
        console.table(this.Inventory.Pulses) 

        console.log('\nWheat : ');
        console.table(this.Inventory.Wheat) 

    }
}
    class inventoryUser extends Inventory{
        userManagement(){
            let choice;
            this.displayData();
            do{
                console.log('\nAvailable Inventory : \n\n\t1) Rice\n\t2) Pulses\n\t3) Wheat\n');
                choice = utility.readLine().questionInt('Enter your Choice : ')
                switch( choice ){
                    case 1 :
                        this.stockSwitchCases(this.Inventory.Rice,'Rice');
                        break;
                    case 2 : 
                        this.stockSwitchCases(this.Inventory.Pulses,'Pulse');
                        break;
                    case 3 :
                        this.stockSwitchCases(this.Inventory.Wheat,'Wheat');
                        break;
                    default : 
                        console.log('Invalid Choice');
                        break;
                }   
                var cont = utility.readLine().question('\nDo you want to bye more things ? ( y : yes , n : no): ');
                // if(cont != 'y' || cont != 'Y' || cont != 'N' || cont != 'n')
                //     throw 'Invalid input'
            }while(cont == 'Y' || cont == 'y' )
        }

    stockSwitchCases(stock,string){
        do{
            console.log(`\nWhich kind of ${string} you want :\n`);
            for (let i = 0; i < stock.length; i++) {
                console.log(`\t${i+1}) ${stock[i].name}`);
                
            }
            let type = utility.readLine().questionInt('\nEnter your choice : ');
            if( type <= stock.length && type!=0){

                switch (type) {
                    case type:
                        this.typesSwitchCases(type, stock);
                        break;
                }

            }
            else
                console.log('Invalid Choice');
            var cont = utility.readLine().question('\nDo you want to continue bying ? ( y : yes , n : no): ');
            // if(cont != 'y' || cont != 'Y' || cont != 'N' || cont != 'n')
            //     throw 'Invalid input'
        }while(cont == 'Y' || cont == 'y' )
                
    }

    typesSwitchCases(type, stock){
        try{
            let buyInKg = utility.readLine().questionInt(`\nHow many Kg you Want to buy ${stock[type-1].name} : `)
            if( buyInKg > stock[type-1].weight ) 
                throw 'Insuficint Inventory';
            console.log(`\nItem : ${stock[type-1].name}  Total KG : ${buyInKg} kg., Total Price : ${(stock[type-1].price) * buyInKg} rs.\n`);
            stock[type-1].weight = stock[type-1].weight - buyInKg;
            utility.writeIntoFile('../JSON/inventoryData.json', JSON.stringify(this.Inventory))
        }
        catch(error){
            console.log(error);
            
        }
        
        
    }
}

class inventoryManager extends Inventory {

    dataManagement(){
        this.displayData();
        let choice
        do{
        console.log('\nAvailable Inventory : \n\n\t1) Rice\n\t2) Pulses\n\t3) Wheat\n\t4) Exit\n');
        choice = utility.readLine().questionInt('\nEnter your Choice : ')
        switch( choice ){
            case 1 :
                this.operations(this.Inventory.Rice,'Rice');
                break;
            case 2 : 
                this.operations(this.Inventory.Pulses,'Pulse');
                break;
            case 3 :
                this.operations(this.Inventory.Wheat,'Wheat');
                break;

            case 4 : 
                break;

            default : 
                console.log('Invalid Choice');
                break;
        }   
        }while(choice!=4)

    }

    operations(stock, string){
        let choice;
        do {
            console.log(`\n${string} : `);
            console.log('\nOperation : \n\t1) Add Items\n\t2) Remove Item\n\t3) Display Data\n\t4) Exit\n');
            choice = utility.readLine().questionInt('\nEnter your choice : ');
            switch (choice) {
                case 1 :
                    this.addItem(stock);
                    break;

                case 2 :
                    this.removeItem(stock, string);
                    break;

                case 3 : 
                    this.displayData();
                    break;

                case 4 : 
                    break;

                default:
                    console.log('\nEnter the valid choice.');
                    break;
            }
        }while(choice!=4);
        
    }

    addItem(stock){
        let _name = utility.readLine().question('\nEnter the name of item : ');
        let _weight = utility.readLine().questionInt('\nEnter the weight of item : ');
        let _price = utility.readLine().questionInt('\nEnter the price of item : ');
        
        // if(_name.length > 12){
        //     for(let i=0; i<_name.length-12; i++){
        //         _name = _name + ' ';
        //     }
        // }

        stock.push({
            name:_name,
            weight:_weight,
            price:_price
            });

        //this.displayData();

        utility.writeIntoFile('../JSON/inventoryData.json', JSON.stringify(this.Inventory))
    }

    removeItem(stock, string){
        let status = true;
        let item=utility.readLine().question(`\nEnter the ${string} Name : `);
        for(let i=0; i<stock.length; i++){
            if (stock[i].name == item) {
                status = false;
                let index = stock.indexOf(stock[i]);
                stock.splice(index, 1);
                console.log(`${item} ${string} remove from Inventory Details`);
            }
        }
        if(status)
        console.log("\nEnter valid name.\n");

        //this.displayData();

        utility.writeIntoFile('../JSON/inventoryData.json', JSON.stringify(this.Inventory))
    }
}


module.exports = {
    inventoryUser,

    inventoryManager,

    Utility(){
        return utility;
    }
}