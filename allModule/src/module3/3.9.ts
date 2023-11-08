{
    // Abstraction (kno bisoy shomporke idea ache but mul bisoy jana nei, etai abstraction)
    /* ----------------------------------------------- */

    // abstraction dui vabe kora jay: 1. instance 1, abstract class

    // idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // real implementation
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log(`I am starting the engine`);
        };

        stopEngine(): void {
            console.log(`I am stopping the engine`)
        };

        move(): void {
            console.log(`I am moving the engine`)
        }
        test(): void {
            console.log(`I am testing the engine`)
        }

    }

    const toyotaCar = new Car1();
    toyotaCar.startEngine();
    toyotaCar.stopEngine();
    toyotaCar.move();
    toyotaCar.test();



    // abstract class (abstract class follow kora jay, but seta theke instance create kora jay na. instance create korte gele child class create kore nite hoy)

    // idea
    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
        test(): void {
            console.log(`I am testing the engine`)
        }

    }

    class ToyoytaCar extends Car2 {
        startEngine(): void {
            console.log(`I am starting the engine`);
        };

        stopEngine(): void {
            console.log(`I am stopping the engine`)
        };

        move(): void {
            console.log(`I am moving the engine`)
        }
        test(): void {
            console.log(`I am testing the engine`)
        }
    }

    // 
}