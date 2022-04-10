//Indian Rabbit

let indianRabbit = 1;

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
            : reject( `Employee with ID = ${id} NOT exists` ); //if FALSE
        
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

//--------------------------------------------------------------------------------------------------------------

//Async: make a function to return it a promise 
//Await: order os wait until that the current promise return the corresponding result

const getInfoUser = async() => {

    try {

        const employee = await getEmployeeById( indianRabbit );
        const salary = await getSalaryEmployeeById( indianRabbit );

        return `Salary of ${employee} is $${salary}`;
        
    } catch (error) {
        
        throw error;
    }


}

//--------------------------------------------------------------------------------------------------------------

getInfoUser()
    .then(  msg => console.log(msg) )
    .catch( error => console.log(error) );