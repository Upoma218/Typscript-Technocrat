// Destructuring

// Object destructuring
const user = {
    id: 13913,
    name:
    {
        firstName: "Reshma",
        middleName: "Islam",
        lastName: "Upoma",
    },
    address: "Uttara",
    conatctNo: '0192455786847',
};

const {conatctNo, name: {middleName}} = user;


// Array destracturing
const myFriends = ['Tipu', 'Shipu', 'Nipu', 'Dipu'];
const [a,b,bestfriend,,...rest] = myFriends; // here 'a' is stand for 'Tipu', 'b' is stand for 'Shipu', 'bestfreind' is stand for 'Nipu'...that means , we can use anything for the elements or we can use nothing also just a comma, like- after the word 'bestfriend', I used 2 ',,'that means , here is a name between this two comma',,', and I also can put more element as much as I want, because of using the spread operator(...)
