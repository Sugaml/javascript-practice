// Constructor Function 
// Used as blueprints for creating objects with similar properties and methods.
// They are invoked using the new keyword to create instances of objects.

function Person(name,place){
    this.name=name;
    this.place=place
}

const user1=new Person("Sugam","Kathmandu")
console.log(`Hello everone its me ${user1.name}, and I am from ${user1.place} `)