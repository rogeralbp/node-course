

const  argv  = require('yargs')

                    .option('b' , {
                        alias: 'base number',
                        type: 'number',
                        demandOption: true ,
                        describe: 'Base Number for the Multiplication'
                    })

                    .option('l' , {
                        alias: 'list numbers',
                        type: 'boolean',
                        default: false ,
                        describe: 'Show the table result in console'
                    })

                    .check( (argv , options) => {

                        if( isNaN(argv.b) ){
                            throw 'Base Number must to be a NUMBER'
                        }

                        return true;
                    } )

                    .argv;


module.exports = argv;