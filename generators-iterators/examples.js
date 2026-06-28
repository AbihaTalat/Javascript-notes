//Iterator example
const numbers = [10, 20, 30];

const iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());   
console.log(iterator.next());

//Generator example
function* countNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = countNumbers();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next()); //undefined