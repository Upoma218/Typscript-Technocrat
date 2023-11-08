{
    // OOP - inheritance(we can access parent class properties in child class by inheritance)
    /* ------------------------------------------------ */


    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;

        };
    }

    class Student extends Parent{
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        };
    }

    const studnet1 = new Student("Upoma", 29, "Bangladesh");




    class Teacher extends Parent {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;

        }

        getSleep(numberOfHours: number) {
            console.log(`${this.name} will sleep for ${numberOfHours}`)
        }

        takeClass(numberOfClass: string) {
            console.log(`${this.name} will take class for ${numberOfClass}`)
        }

    }

    const teacher = new Teacher("Reshma", 30, "USA", "Assistant Teacher");

    // 
}