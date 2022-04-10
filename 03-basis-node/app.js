/**
 * Using fileSystem from https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilefile-data-options-callback
 */

 //import * as fileSystem from 'fs/promises';
 const fs = require('fs');

/**
 * Print in console
 * 
 * 5 x 1 = 5
 * 5 x 2 = 10
 * .......
 * 5 x 10 = 50
 */
const baseNumber = 5;

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

fs.writeFile('multiplication-table-5.txt' , output , (err)  => {

    if (err) throw err;

    console.log('successfully multiplication file created');

});