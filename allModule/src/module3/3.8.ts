{
// Polymorphism (jokhon kno ekta class er kno ekta method jodi sthan, kal, patro vede change hoye jay, tokhon setake polymorphism bole)
/* -------------------------------------------------------- */


class Person {
    getSleep(){
        console.log("I sleep 8 hours in a day");
    }
}

class Student extends Person {
    getSleep(){
        console.log("I sleep 7 hours in a day");
    }
}

class Developer extends Person {
    getSleep(){
        console.log("I sleep 6 hours in a day");
    }
}

const getSleepTime = (param: Person) => {
    return param.getSleep()
}

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();

getSleepTime(person1);
getSleepTime(person2);
getSleepTime(person3);


class Shape {
    getArea(): number{
        return 0;
    }
}

// get area of a circle
class Circle extends Shape {
    radius : number;

    constructor(radius: number){
        super()
        this.radius = radius;
    }

    getArea(): number{
        return Math.PI * this.radius * this.radius;
    }
}

// get area of a rectangle
class Rectangle extends Shape {
    height : number;
    width : number;

    constructor(height: number, width: number){
        super()
        this.height = height;
        this.width = width;
    }
    getArea(): number{
        return this.height * this.width;
    }
}

const getShapeArea = (param: Shape) => {
    console.log(param.getArea())
}

const area = new Shape();
const areaOfCircle = new Circle(10);
const areaOfRectangle = new Rectangle(10, 16);

getShapeArea(area);
getShapeArea(areaOfCircle);
getShapeArea(areaOfRectangle);

// console.log(area.getArea());
// console.log(areaOfCircle.getArea());
// console.log(areaOfRectangle.getArea());

// 
}