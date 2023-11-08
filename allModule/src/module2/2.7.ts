
// generic constraint with keyof operator
/* ----------------------------------------*/

// (keof mane hocche prothome j type declare kora hobe, sei type er object er moddhe jei property gulo thakbe segulor moddho theke kno ekta property second type tate thakte hobe, baire theke kno property k key hisebe patahno jabena)

/* -------------------------------------------- */

type Vehicle = {
    bike: string;
    car: string;
    ship : string;
};

type Owner = "bike"| "car" | "ship";  //manually written

type Owner2 = keyof Vehicle;

function getPropertyValue<X, Y extends keyof X>(obj: X, key: Y){
    return obj[key];
}

const user11 = {
    name: "Upoma",
    age: 24,
    address: "Dhaka",
} 
const result = getPropertyValue(user11, 'name')




// const findName = user['name'];//result = Upoma
// or
// const findName = user.name; //result = Upoma

// console.log(findName)

//   
