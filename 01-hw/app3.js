
// Callback = function used as parameter for other function

console.log('Start App');


setTimeout( () => {

    console.log('First TimeOUT');

} , 3000 );

setTimeout( () => {

    console.log('Second TimeOUT');

} , 0 );

setTimeout( () => {

    console.log('Third TimeOUT');

} , 0 );


console.log('End App');


/**
 * Order of outputs
 * 
 * Start App
   End App      

   Second TimeOUT
   Third TimeOUT 
   
   First TimeOUT
 * 
 */