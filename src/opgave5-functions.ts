//Skriv tre funktioner:

/* 1: Skriv en funktion der kan udregne procenten af et tal. Det skal være muligt at sende 
to parametre med ind i denne funktion. Det første parameter er tallet der skal udregnes 
procent på og det andet parameter er hvor stor en procent man gerne vil have tilbage. 
Din funktion skal returnere resultatet tilbage. */
function getPercentage(tal:number, procent:number){
    let result = procent % tal    
    console.log('resultatet er: ', result);
    return result;
}
getPercentage(100, 50)


/* 2: Skriv en funktion der kan hente et specifikt element i et array. Det vil sige at du 
skal kunne sende et array med ind i funktionen, samt et index tal som er tilsvarende 
det index i arrayet du vil have tilbage. Din funktion skal returnere det element i 
arrayet som det finder. Hvis ikke der findes et element på det pågældende index skal 
funktionen ikke returnere noget, men give en fejl i konsollen.  */

let PersonONE = { 
    firstName: 'Mickey', 
    lastName: 'Mouse', 
    age: 93, 
    eyecolor: 'black', 
    hairColor: 'black', 
    height: 68 
};
interface PersonInterface{
    firstName: string, 
    lastName: string,  
    age: number, 
    eyecolor: string,  
    hairColor: string,  
    height:  number,
}
function getElement(person: PersonInterface){
    let result = 'This is '+ person.firstName + ' ' + person.lastName;
    console.log(result);
    return result
}
getElement(PersonONE)


/* 3: Skriv en funktion der kan søge igennem et array for at finde et element der indeholder 
en specifik tekststreng. Det vil sige at din funktion skal tage imod to parametre. 
Det første er et array og det andet er en specifik tekststreng. Hvis indholdet i tekststrengen 
findes skal den returnere det tilsvarende element i arrayet.*/

let ojbArray = ["computer skærm", "stationær computer", "mus", "hdmi", "højtaler"]
let searchWord = 'computer'

function søgElement(ojbArray:string[], searchWord:string ){
    let result = ojbArray.filter((element) => element.includes(searchWord))
    console.log(result);
    return result
    
}
søgElement(ojbArray,searchWord)
