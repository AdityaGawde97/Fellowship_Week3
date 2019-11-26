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

}