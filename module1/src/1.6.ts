// /* Learnig function*/
// /* ------------------------ */

// // Normal function
// // Arrow function

// function add(num1: number, num2: number) : number{
//     return num1 + num2
// };

// add(3, 4);

// const addition = (number1: number, number2: number) => number1 + number2;

// // object --> function---> method [when we write any function inside of an  object, it is called "method"]

// const poorMan = {
//     name:"Upoma",
//     balance: 0,
//     addBalance(balance: number) : number{
//         return this.balance + balance; //if we want to access any property from inside of a function, we have to use 'this', but in JS, this is is only work in in a function, it does not work in arrow function!
//     },
//     addBalance2(balance: number) : string{
//         return `My balance is : ${this.balance + balance}`;//by using `` sign, the return value became a string!
//     }
// }



// // callback funtion
// const arr :number[] = [2,3,4];
// const newArray : number[] = arr.map((element : number) : number => element * element);