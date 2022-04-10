
/**
 * Using fileSystem from https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilefile-data-options-callback
 */


const fs = require('fs');
const { resolve } = require('path');

const createFile = ( baseNumber = 5 ) => {

    return new Promise( (resolve , reject) => {

        console.clear();

        console.log('============================================');
        console.log(`     Multiplication table of = ${baseNumber}`);
        console.log('============================================');


        let output = '';

        for( let i = 1; i <=10 ; i++ ){

            output += ` ${baseNumber} X ${i}  = ${ baseNumber * i }\n`;
        }

        console.log( output );
        console.log('============================================');

        fs.writeFileSync(`multiplication-table-${baseNumber}.txt` , output ); 

        resolve(`multiplication-table-${baseNumber}.txt`);

    } )

   
}

module.exports = {
    
    createFile
}