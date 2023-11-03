{
// Type alias
/* ------------------------- */


//   for object
/* ----------------------------- */

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1 : Student = {
    name: "Upoma",
    age: 25,
    gender: 'female',
    contactNo: '038364877',
    address: 'Dhaka'
  }
  const student2 : Student = {
    name: "Tonima",
    age: 24,
    gender: 'female',
    contactNo: '725632874892',
    address: 'Barishal'
  }
  const student3 : Student = {
    name: "Sayma",
    age: 29,
    gender: 'female',
    contactNo: '294783493',
    address: 'feni'
  }
// for varaible
/* ---------------------------------- */

type UserName = string;
type IsAdmin = boolean;
type Age = number;

const userName : UserName = 'Upoma';
const isAdmin : IsAdmin = true;
const age: Age = 25;

// for function
/* -------------------------------------------- */

type Add = (num1: number, num2: number) => number;

const add : Add = (num1, num2) => num1 + num2;
// 
}