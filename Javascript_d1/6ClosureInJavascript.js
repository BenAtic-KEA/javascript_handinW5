
//1 Implement and test the Closure Counter Example from the Slides
function closureCounter(){
    let counter = 0;

    function changeBy(val){
        counter += val
    }

    return{
        increment: function() {changeBy(1)},
        decrement: function(){changeBy(-1)},
        value: function (){return counter}
    }
}
let counter1 = closureCounter();

counter1.increment();
counter1.increment();
counter1.increment();
console.log(counter1.value())
counter1.decrement();
console.log(counter1.value())

//2  Implement a reusable function using the Module pattern that should encapsulate information
// about a person (name, and age) and return an object with the following methods:

function personOptions(name, age){
const person = {
    name : name,
    age : age}

function changeProperty(property, newProp){
    if(property === "name"){
        person.name = newProp
    }
    if(property === "age"){
        person.age = newProp
    }
    
}
return{
    setName : function(newName) {changeProperty("name",newName)},
    setAge : function(newAge) {changeProperty("age",newAge)},
    getInfo : function(newAge) {return `${person.name}: ${person.age}`}
}
}
const person1 = personOptions("Mark",28)

console.log(person1.getInfo())
person1.setName("Kim")
console.log(person1.getInfo())
person1.setAge(54)
console.log(person1.getInfo())





