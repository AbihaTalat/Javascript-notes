const animal = {
    eat(){
        console.log("Animal is eating");
    }
};

const dog = Object.create(animal);

dog.bark = function (){
    console.log("Woof!");
}

dog.bark();
dog.eat();

console.log(dog.__proto__ === animal);