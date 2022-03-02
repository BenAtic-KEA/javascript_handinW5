const person = { 
    name : "Mark",
    age : 28,
    school : "KEA"
}

for(const prop in person){
    console.log(`${prop}: ${person[prop]}`)
}

// fjerner skole
delete person.school

for(const prop in person){
    console.log(`${prop}: ${person[prop]}`)
}

person.school = "KEA_2.0"

for(const prop in person){
    console.log(`${prop}: ${person[prop]}`)
}