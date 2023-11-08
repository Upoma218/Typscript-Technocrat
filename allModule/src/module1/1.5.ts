// // Reference type ---->
// const user: {
//     firstName: string;

//     middleName?: string;//type--> Optional type(value can be assign or not)

//     lastName: string;

//     company: "Programming Hero";//type---> literal type ---> value is fixed and it is act as a type like - string , number, or others type

//     readonly position: string;//readonly property is non editable. if we want to modify the value, we can't do it if the type assigned as "readonly"

//     isMarried: boolean;

// } = {
//     firstName: "Anarkoli",
//     lastName: "Upoma",
//     company: "Programming Hero",
//     position: "Web Developer",
//     isMarried: true,
// }

// // now if I want to access or modify any property, just write....
// user.firstName = "Upoma"; //variablename.propertyname

// // but if the the value is fixed like "company" or the property is readonly, we can't modify the value .