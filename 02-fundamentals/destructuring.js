
/**
 * undefined = variable without a real value
 */

//----------------------------------------------------------------------------



const deadpool = {

    name: 'Wade',
    lastname: 'Winston',
    power: 'Inmortal',
    getName() {
        
        return `${this.name} ${this.lastname} ${this.power}`
    }

};

//console.log(deadpool.getName());

//----------------------------------------------------------------------------

//const name     = deadpool.name;
//const lastname = deadpool.lastname;
//const power    = deadpool.power;

//console.log(name , lastname , power);


//----------------------------------------------------------------------------


//const { name , lastname, power } = deadpool;
//console.log(name , lastname , power);

//----------------------------------------------------------------------------


function printDCCharacter( character ){

    const { name , lastname, power } = character;
    console.log(name , lastname , power);

}

//printDCCharacter( deadpool );

//----------------------------------------------------------------------------


const heroes = ['Deadpool', 'Batman', 'Hulk'];

const [ h1, h2 , h3] = heroes ;

console.log( h1, h2 , h3 );