{
    // OOP- class
    /* -------- */

    class Animal {
        // public name: string;
        // public species: string;
        public sound: string;


        // parameter properties
        /* ----------------------------- */
        // ( that means, ami jodi constrauctor er moddhe type er age "public" likhe dei tahole ar class er moddhe alada kore type likha lagbena. this,name o likha lagbena)

        constructor(public name: string, public species: string, sound: string) {
            // this.name = name;
            // this.species = species;
            this.sound = sound;
        }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animal('German Shepherd', 'dog', "Ghew Ghew");
    const cat = new Animal('Mini', 'act', "Meaw Meaw");

    cat.makeSound();
    dog.makeSound();

    // 
}