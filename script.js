const dog={
    name:'Timmy',
    bark() {
        console.log(`"woof! I am ${this.name}"`);
    }
};
console.log(dog.name);
console.log(dog.bark());
console.log(dog);
console.log(dog.bark());

//person object
const person={
    firstName:'Raashi',
    lastName:'Rathod',
    birthDate:'March 29, 2013',
    name(){
        return this.firstName+this.lastName;
    },
    ageThisYear(){
        var todayDate = new Date();
        var d = new Date(this.birthDate);
        var age=todayDate.getFullYear()-d.getFullYear();
        return 'Age of person is '+age;
    },

}

//string functions
console.log(person.ageThisYear());
var someString='hello everyone';
console.log('vale of someString',someString);
console.log('someString legth',someString.length);
someString.length=200;
console.log('someString legth',someString.length);

//number functions
var decimalNumber=3124;
console.log(decimalNumber.toFixed(3));
const sum = (a,b)=> a+b;
console.log('name of function:',sum.name);
console.log('tostring of function:',sum.toString());
