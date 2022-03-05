let personObj = function(){
    let person ={
    name: "",
    age: null,
}
return {
    setName: function(newName) {person.name = newName },
    setAge: function(newAge){person.age = newAge},
    getInfo: function(){return person.name + ", " + person.age}
    } 
}

let erik = personObj()
erik.setName("Erik")
console.log(erik.getInfo())
erik.setAge(2)
console.log(erik.getInfo());
