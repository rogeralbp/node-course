
/**
 * Print in console
 * 
 * 5 x 1 = 5
 * 5 x 2 = 10
 * .......
 * 5 x 10 = 50
 */

console.clear();
console.log('============================================');

const baseNumber = 5;

for( let i = 1; i <=10 ; i++ ){

    console.log(` ${baseNumber} * ${i}  = ${ baseNumber * i }`);
}

console.log('============================================');