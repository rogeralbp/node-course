
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


//Using the function as a Promise

getEmployeeById(1)
        .then( employee => console.log( employee ) )// if everything is fine this will be executed
        .catch( error => console.log( error ) );//otherwise this will be executed


getSalaryEmployeeById(1)
        .then( employee => console.log( employee ) )// if everything is fine this will be executed
        .catch( error => console.log( error ) );//otherwise this will be executed

//--------------------------------------------------------------------------------------------------------------