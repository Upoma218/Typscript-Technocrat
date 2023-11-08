{
// Utility Type
/* ---------------------- */

// pick type
// ----------------------------------------

type Person = {
    name: string;
    age: number;
    email? : string;
    contactNo: string;
}

type Name = Pick<Person, "name">;

type NameAge = Pick<Person, "name"| "age">;

//  omit type (bad diye deya)
// ----------------------------------------

type ContactInfo = Omit<Person, "name"| "age">;


//  required type (bad diye deya)
// ----------------------------------------

type PersonRequired = Required<Person>;


//  partial type (bad diye deya)
// ----------------------------------------

type PersonPartial = Partial<Person>;


// ReadOnly type
// -----------------------------------

type PersonReadOnly = Readonly<Person>

const person1 : PersonReadOnly= {
    name: "Upoma",
    age: 3545,
    email : "u@gmail.com",
    contactNo: "864745656"
}
// person1.name = "Upo"; (it wil show an error, because readonly porperty is not changable)

// Record type
// -----------------------------------

// array er key guloke number bola hoy ar object er key guloke string bola hoy

type MyObj = Record<string, unknown>;

const emptyObject : MyObj = {
    name: "Upoma",
    age: 36
}

//........ ekhane left side er guloke "key" bola hoy. ar object er khetre key gulo sobsomoy string hoy. tai type MyObj a Record type maddhome bole deya hoyeche j "key" string hobe. but key er value ki hobe seta age theke jana na thakay unknown deya hoyeche jate kore j kno type er value assign korleo error na ase......//

// 
}