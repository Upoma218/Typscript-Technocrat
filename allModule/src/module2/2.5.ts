{
    // Function with generics
    /* ---------------------------------------------- */

    const createArray = (param: string): string[] => {
        return [param];
    };

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    };

    const res1 = createArray('Bangladesh');

    const resGeneric = createArrayWithGeneric<string>('Bangladesh');

    type User = {
        id: number,
        name: string
    }

    const resObject = createArrayWithGeneric<User>({ id: 344, name: "Upoma" });


    // Function with generics tuple
    /* ---------------------------------------------- */


    const createArrayTuple = (param1: string, param2: number): [string, number] => {
        return [param1, param2];
    };

    const createArrayWithGenericTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    };

    const res3 = createArrayTuple('Bangladesh', 578788);

    type Person = {
        name: string,
        age: number
    }

    const resGeneric1 = createArrayWithGenericTuple<string, Person>('Bangladesh', { name: 'Imu', age: 35 });


// -----------------------------------------------------


const addCourseToStudent = <T>(student: T) : T=> {
    const course = "Next Level Web Development Course";
    return {...student, course}
}

const student1 = addCourseToStudent({
    name: "Manha",
    email: 'manha@gmail.com',
    devType: 'VLJDKN'
});
const student2 = addCourseToStudent({
    name: "Tanha",
    email: 'tanha@gmail.com',
    hasWatch: "Apple watch",
});


    // 
}