{
    // interface

    // type alias
    type User1 = {
        name: string;
        age: number
    }

    // interface
    interface User2 {
        name: string;
        age: number
    }

    type UserWithRole1 = User1 & { role: string };
    type UserWithRole2 = User2 & { role: string };
    interface UserWithRole3 extends User2 { role: string };
    interface UserWithRole4 extends User1 { role: string };

    // that means we can extend type with interface and we can extend inerface with type


    const user1: UserWithRole1 = {
        name: 'Upoma',
        age: 29,
        role: '1',
    }
    const user2: UserWithRole2 = {
        name: 'Nelima',
        age: 27,
        role: '2',
    }
    const user3: UserWithRole3 = {
        name: 'Rifat',
        age: 23,
        role: '3',
    }
    const user4: UserWithRole4 = {
        name: 'Rafin',
        age: 17,
        role: '4',
    }

// In JS  --> object is object, array is object, function is also object

//  for array

type Roll1 = number[];
interface Roll2 {
    [index : number] : number;
}

const rollNumber1 : Roll1 = [1,2,3];
const rollNumber2 : Roll2 = [1,2,3];
                          // 0 1 2 --> index no are also number type

//  for function
// type alias
type Add1 = (num1: number, num2: number) => number;
const add1:Add1 = (num1, num2) => num1+num2;

// interface
interface Add2 {
    (num1: number, num2: number) : number;//here number is return type
}

//
}