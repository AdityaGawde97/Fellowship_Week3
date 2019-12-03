module.exports = {

    readLine(callback){
        const read = require('readline-sync');
        return read; 
    },

    /**
     * @description : read input from file 
     * @param {passing the file name} fileName 
     * @returns retrived data
     * */
    readFromFile(fileName){
        let fs = require('fs');
        let fileData = fs.readFileSync( fileName, 'utf8' );
        return fileData;
    },

    /**
     * 
     * @param {passing the file name} fileName 
     * @param {passing the content to write in file} content   
     */
    writeIntoFile(fileName,content){
        let fs = require('fs');
        fs.writeFileSync( fileName, content, 'utf8' );
    }
}