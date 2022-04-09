

/**
 * Traditional way of declare functions
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns result sum
 */
function sum( a , b ){

    return a + b;
};

console.log( 'Traditional Function = ' + sum(6 , 6) );

//-------------------------------------------------------------------------

/**
 * Arrow Function
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns result sum
 */
const sumAF = (a , b) => {

    return a + b;
}

console.log( 'Arrow Function = ' + sumAF(10 , 10) );