{
// Conditional type
/* --------------------------------------- */

// jokhon kno ekta type er man onno ekta type er maner upor depend kore tokhon setake conditional type bole.
/*...........................................*/


type a1 = null;
type b1 = undefined;

type x = a1 extends null ? true : false; // conditipnal type

type y = a1 extends null ? true : b1 extends undefined ? undefined : any; // nested conditional type

type Sheikh = {
    bike: string;
    car : string;
    ship : string;
    plane : string
}

// keyof SHeikh = "bike" | "car" | "ship" | "plane"

// cheking --> car ache kina / bike ache kina / ship ache kina / trctor ache kina?

type CheckVehicle <T> = T extends keyof Sheikh ? true : false;

type HasPlane = CheckVehicle<'plane'>; //true
type HasBike = CheckVehicle<'bike'>; //true
type HasShip = CheckVehicle<'ship'>; //true
type HasTractor = CheckVehicle<'tractor'>; //false

//
}