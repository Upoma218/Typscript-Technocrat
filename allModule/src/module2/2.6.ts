{
// constrains  (we can keep some type additionaly fixed with generic function by extends type)
// -------------------------------

const addCourseToStudent = <T extends {id: number; name: string; email: string}>(student: T) : T=> {
    const course = "Next Level Web Development Course";
    return {...student, course}
}

const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
}>({
    id: 2323,
    name: "Manha",
    email: 'manha@gmail.com',
    devType: 'VLJDKN'
});
const student2 = addCourseToStudent({
    id:12342537,
    name: "Tanha",
    email: 'tanha@gmail.com',
    hasWatch: "Apple watch",
});
const student3 = addCourseToStudent({
    id:3433,
    name: "Anha",
    email: 'anha@gmail.com',
    hasPhone: "Samsung",
});


// 
}