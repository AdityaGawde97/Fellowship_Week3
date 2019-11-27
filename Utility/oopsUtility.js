module.exports = {

    readLine(){
        const read = require('readline-sync');
        return read; 
    },

    readFromFile(fileName){
        let fs = require('fs');
        let fileData = fs.readFileSync( fileName, 'utf8' );
        return fileData;
    },

    writeIntoFile(fileName,content){
        let fs = require('fs');
        fs.writeFileSync( fileName, content, 'utf8' );
    },

    validateContact(phoneNumber){

        let pattern = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/g;
        if((pattern.test(phoneNumber)))
        {
            return true;
        }
        else
        {
            return false;
        }
    },

    validateFirstName(fisrtName){

        let pattern = /^[a-zA-Z ]{2,30}$/g;
        if((pattern.test(fisrtName)))
        {
            return true;
        }
        else
        {
            return false;
        }
    },
    validateLastName(lastName){

        let pattern = /^[a-zA-Z ]{2,30}$/g;
        if((pattern.test(lastName)))
        {
            return true;
        }
        else
        {
            return false;
        }
    },
    validateCity(city){

        let pattern = /^[a-zA-Z ]{2,30}$/g;
        if((pattern.test(city)))
        {
            return true;
        }
        else
        {
            return false;
        }
    },
    validateState(state){

        let pattern = /^[a-zA-Z ]{2,30}$/g;
        if((pattern.test(state)))
        {
            return true;
        }
        else
        {
            return false;
        }
    },

    validateAddress(address){

        let pattern = /^[a-zA-Z ]{2,30}$/g;
        if((pattern.test(address)))
        {
            return true;
        }
        else
        {
            return false;
        }
    },

    /**
     * 
     * @param {zip code} zip 
     */
    validateZip(zip){

        let pattern = /^[1-9][0-9]{6}$/g;
        if((pattern.test(zip)))
        {
            return true;
        }
        else
        {
            return false;
        }
    },


}