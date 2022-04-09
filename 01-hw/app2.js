/**
 * 
 * Arrow Function == Normal Function
 * 
 * EG: 
 * 
 *  const saludar = ()  => {
 *          
 *      return 'Hola';'
 * 
 *  }
 * 
 *  function saludar() {  console.log('Hola');  }
 * 
 */


const salute = ( name ) => {

    return ` Hello dear/lady ${name}`;

}

console.log( salute('Roger') );