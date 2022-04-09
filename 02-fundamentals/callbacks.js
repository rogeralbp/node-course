
// Callback = function used as parameter for other function

//setTimeout( function salute() { console.log('Hello World'); } , 1000 );

const getUserById = ( id , callback) => {

    const user = {
        id,
        name: 'Roger'
    }

    setTimeout( () => {
        
        callback(user)
    
    } , 1500 );

}

getUserById( 10 , ( user ) => {

    console.log( user.id );
    console.log( user.name.toUpperCase() );

    
} );