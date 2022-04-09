

const employees = [
    
    {
        id: 1,
        name: 'Osvaldo'

    },
    {
        id: 2,
        name: 'Fabiola'
        
    },
    {
        id: 3,
        name: 'Marcela'
        
    },

];

const salaries = [
    
    {
        id: 1,
        salary: 5000

    },
    {
        id: 2,
        salary: 15000
        
    },

];


const getEmployeeById = ( id , callback ) => {

    const employee = employees.find( e => e.id === id );

    if ( employee ){

        callback( null , employee );
    
    }else{
        callback(`Employee with id=${id} NOT exists`);
    }

}


const getSalaryEmployeeById = ( id , callback ) => {

    const employee = salaries.find( e => e.id === id );

    if ( employee ){

        callback( null , employee.salary );
    
    }else{
        callback(`Employee with id=${id} DO NOT have salary`);
    }

}

//--------------------------------------------------------------------------------------------------------------

getEmployeeById( 1 , ( error , employee ) => {

        if( error ){

            console.log( 'ERROR!' );
            return console.log(error);

        }else{

            console.log( 'Employee EXISTS!' );
            console.log( employee );

        }
} );


getSalaryEmployeeById( 2 , ( error , employee ) => {

    if( error ){

        console.log( 'ERROR!' );
        return console.log(error);

    }else{

        console.log( 'Employee has SALARY!' );
        console.log( employee );

    }
} );
