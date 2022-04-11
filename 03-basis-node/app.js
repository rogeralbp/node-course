


const { options } = require('yargs');
const { createFile } = require('./helpers/multiplication');

const  argv  = require('yargs')

                .option('b' , {
                    alias: 'base number',
                    type: 'number',
                    demandOption: true
                })

                .check( (argv , options) => {
                
                    if( isNaN(argv.b) ){
                        throw 'Base Number must to be a NUMBER'
                    }
                
                    return true;
                
                } )                        
                .argv;

console.clear();

console.log( argv );

console.log( argv.b );


createFile( argv.b )
    .then( fileName => console.log( fileName, 'CREATED' ) )
    .catch( error => console.log( error ) );