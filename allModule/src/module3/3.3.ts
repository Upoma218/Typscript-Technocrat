{
//  type guards
/* ------------------- */

// typeof --> type guard


type Alphaneumeric = number | string;

const add = (param1 : Alphaneumeric, param2 : Alphaneumeric) : Alphaneumeric=> {
    if(typeof param1 === "number" && typeof param2 === "number"){
        return param1 + param2;
    } else {
        return param1.toString() + param2.toString()
    }
}

const result1 = add(2, 3);
const result2 = add('2', '3');
console.log(result1, result2);


// in gaurd
/* -------------------- */

type NormalUser = {
    name: string
}

type AdminUser = {
    name: string;
    role: "Admin"
}

const getUser = (user: NormalUser | AdminUser) => {
    if("role" in user){
        console.log(`My name is ${user.name} and my role is ${user.role}`)
    }
    else{
        console.log(`My name is ${user.name} `)
    }
}

const normalUser : NormalUser = {
    name: "Upoma"
}
const adminUser : AdminUser = {
    name: "Upoma",
    role: "Admin"
}

getUser(normalUser);
getUser(adminUser);

// 
}