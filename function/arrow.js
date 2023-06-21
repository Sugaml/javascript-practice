// Arrow function introduced in ES6, shorter syntax and one-line function

const greet=()=>console.log("Welcome to js")

greet()

//Arrow function with a single arguments
const myFunction=parameter1=>{
    console.log(parameter1)
}
myFunction(10)

//Arrow Function with two argument
const mySum=(param1,param2)=>{
    console.log(param1+param2)
}

mySum(2,7)

//Consise arrow function with argument
const addFunction=(a,b) =>a+b;
console.log(addFunction(2,34))