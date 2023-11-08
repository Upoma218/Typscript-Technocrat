{
//Union types
/* ------------------------------------------------------*/

type FrontendDEveloper = 'fakibazDeveloper'|'frontendDeveloper';//we can use this way
type FullstackDEveloper = 'frontendDeveloper'|'expertDev eloper';
type Developer = FrontendDEveloper|FullstackDEveloper;//or we can use this way is we want to combined more type

const newDeveloper: Developer = 'frontendDeveloper';


type User= {
    name: string,
    age: number,
    email? : string,
    address: string,
    gender: 'male'|'female',
    bloodGroup: 'O+'|'B+'|'AB+'
}

const user = {
    name: 'Upoma',
    age: 24,
    address: "Dhaka",
    gender: 'female',
    bloodgroup: 'O+'
}


// Intersection type
/* -------------------------------- */

type FrontendDeveloper = {
    skills : string[],
    designation1 : 'FrontendDeveloper',
};
type BackendDeveloper = {
    skills : string[],
    designation2 : 'BackendDeveloper',
}
type MERNstackDEveloper = FrontendDeveloper & BackendDeveloper;

const mernstackDeveloper : MERNstackDEveloper = {
    skills : ['HTML', 'CSS', 'EXPRESS'],
    designation1: 'FrontendDeveloper',
    designation2: 'BackendDeveloper'
}

//  
}