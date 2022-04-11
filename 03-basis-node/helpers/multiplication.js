
/**
 * Using fileSystem from https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilefile-data-options-callback
 */

const fs = require('fs');

const createFile = async( baseNumber = 5 , list = false ) => {

    try {

        let output = '';

        for( let i = 1; i <=10 ; i++ ){

            output += ` ${baseNumber} X ${i}  = ${ baseNumber * i }\n`;
        }

        if( list ){

            console.log('============================================');
            console.log(`     Multiplication table of = ${baseNumber}`);
            console.log('============================================');

            console.log( output );
            console.log('============================================');

        }

        fs.writeFileSync(`multiplication-table-${baseNumber}.txt` , output ); 

        return `multiplication-table-${baseNumber}.txt`;

    } catch (error) {
        
        throw error;
    }

}

module.exports = {
    
    createFile
}