

const { createFile } = require('./helpers/multiplication');

console.clear();

const baseNumber = 16;


createFile( baseNumber )
    .then( fileName => console.log( fileName, 'CREATED' ) )
    .catch( error => console.log( error ) );