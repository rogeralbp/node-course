

const { createFile } = require('./helpers/multiplication');
const  argv  = require('./config/yargs');


console.clear();


createFile( argv.b , argv.l )
    .then( fileName => console.log( fileName, 'CREATED' ) )
    .catch( error => console.log( error ) );