//Object destructuring
const student = {
    name: "Abiha",
    semester: 5
};

const { name, semester } = student;

console.log(name);
console.log(semester);

//Spread operator
const numbers = [1, 2, 3];
const copy = [...numbers];

console.log(copy);

//Optional chaining
const user = {
    profile: {
        city: "Rawalpindi"
    }
};

console.log(user.profile?.city);    
console.log(user.address?.street); //undefined