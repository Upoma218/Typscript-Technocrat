{
//ternary operator || optional chaining || nullish coalescing operator

const age  = 12;
if(age >= 18){
    console.log('Adult');
}
else {
    console.log('Not Adult')
}

// ternary operator
/* ---------------- */

const isAdult = age >=18 ? 'Adult':'Not Adult';
console.log(isAdult)
console.log({isAdult})


// nullish coalescing operator
// [only use for null and undefined in case of decision making]
/* --------------------------------------------------------------------------- */

const isAuthenticated = null;

const result1 = isAuthenticated ?? 'Guest';//nullish coalescing shudhu matro 'null' ebong 'undefind' er khetre kaj kore.

const result2 = isAuthenticated ? isAuthenticated : 'Guest';//ternary operator a falsy value kaj kore.

console.log({result1}, {result2})//ekhane kotar result konta seta bujhar jonno {} use kora hooiche, er maddhome object hisebe result dekha jabe.


// Optional chaining
/* -------------------------- */

type User = {
    name: string;
    address: {
        city: string,
        road: string,
        presentAddress: string,
        permanentAddress? : string
    }
}
const user: User = {
    name: 'Upoma',
    address: {
        city: 'Dhala',
        road: 'Shahbag',
        presentAddress: 'Dhaka',
    }
}

const permanentAddress = user?.address?.permanentAddress ?? 'There is no permanent address'; //jehetu ekhane ami permanent address deini, tai result undefind asbe ar nullish coalescing (??) operator jehetu null and undefined er upor kajj kore tai ekhane (??)nullish coalescing use kora hoyeche.
console.log({permanentAddress})

//
}