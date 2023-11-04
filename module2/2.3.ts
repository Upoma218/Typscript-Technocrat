{
    //generic type (dynamic and re-usable)
    /* ---------------------------------------- */

    type GenericArray<T> = Array<T>;

    // const rollNumber : number[] = [3, 6, 8];
    const rollNumber: GenericArray<number> = [3, 6, 8];

    // const mentors : string[] = ['Mr. X', 'Mr. y', 'Mr. z'];
    const mentors: GenericArray<string> = ['Mr. X', 'Mr. y', 'Mr. z'];

    // const boolArray : boolean[] = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];

    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: 'Upoma',
            age: 10,
        },
        {
            name: 'Maruf',
            age: 42
        },
    ];


    // generic tuple
    /* ------------------------- */

    type GenericTuple<X, Y> = [X, Y];

    const person: GenericTuple<string, string> = ['Mr. X', 'Mr. Y'];

    // type User = {
    //     name: string; 
    //     email: string
    // }

    // or
    // ---- 

    interface User {
        name: string,
        email: string
    }

    const userWithId: GenericTuple<number, User> = [
        34353,
        {
            name: 'Mr. Y',
            email: 'a@gmail.com',
        }
    ];

    //    
}