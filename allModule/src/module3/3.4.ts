{
    // instanceof guard
    /* ----------------------------------- */
class Animal {
    name: string;
    species : string;

    constructor ( name: string, species: string){
        this.name = name;
        this.species = species
    }


    makeSound(){
        console.log("I am making sound");
    }
}

class Dog extends Animal {
    constructor(name: string, species: string){
        super(name, species);
    }

    makeBark(){
        console.log("I am barking");
    }
}

class Cat extends Animal {
    constructor(name: string, species: string){
        super(name, species);
    }

    makeMeawing(){
        console.log("I am meawing");
    }
}

// If we want to use this 'instanceof' in a smart way, we can use function
/* -------------------------------------------------- */
const isDog = (animal : Animal) : animal is Dog => {
    return animal instanceof Dog;
}

const isCat = (animal : Animal) : animal is Cat => {
    return animal instanceof Cat;
}

const getAnimal = (animal : Animal) => {
 if(isDog(animal)){
    animal.makeBark()
 } else if(isCat(animal)){
    animal.makeMeawing()
 } else{
    animal.makeSound
 }
}

const dog = new Dog ("Dog Vai", "Dog");
const cat = new Cat ("Cat Vai", "Cat");

getAnimal(cat);
getAnimal(dog);
    // 
}