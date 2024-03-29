
//--------------------------------------------------------------------------------------------------------------
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

//--------------------------------------------------------------------------------------------------------------

const getEmployeeById = ( id , callback ) => {

   return new Promise( ( resolve , reject ) => {

    const employee = employees.find( e => e.id === id )?.name;

         ( employee ) //if ternario
            ? resolve( employee ) // if TRUE
            : reject( `Employee with id=${id} NOT exists` ); //if FALSE
        
   } );

}

const getSalaryEmployeeById = ( id , callback ) => {

 
    return new Promise( ( resolve , reject ) => {
 
    const salary = salaries.find( e => e.id === id )?.salary;

          ( salary ) //if ternario
             ? resolve( salary ) // if TRUE
             : reject( `Employee with id=${id} DO NOT have salary` ); //if FALSE
         
    } );
 
 }


//Indian Rabbit

let indianRabbit = 1;


//Using the function as a Promise

// getEmployeeById(indianRabbit)
//         .then( employee => console.log( employee ) )// if everything is fine this will be executed
//         .catch( error => console.log( error ) );//otherwise this will be executed


// getSalaryEmployeeById(indianRabbit)
//         .then( employee => console.log( employee ) )// if everything is fine this will be executed
//         .catch( error => console.log( error ) );//otherwise this will be executed

//--------------------------------------------------------------------------------------------------------------

//Sumarized way to build promises over promises

let employeeName;

getEmployeeById(indianRabbit)
        .then( employee => {
            employeeName = employee;
            return getSalaryEmployeeById(indianRabbit);
        } )
        .then( salary => console.log( 'Employee: ', employeeName, 'has a salary of: ', salary ) )
        .catch( error => console.log( error ) );
