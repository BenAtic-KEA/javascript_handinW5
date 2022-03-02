//Observe: no return type, no type on parameters
function add(n1, n2){
    return n1 +n2;
 }

 const sub = function(n1,n2){
    return n1 - n2
  } 

  
  const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
  };
  
/*
console.log( add(1,2) )     // What will this print?
  printer 3

console.log( add )          // What will it print and what does add represent?
  printer hele funktionen som en string, da det er en reference og ikke et metodekald

console.log( add(1,2,3) ) ; // What will it print
  printer 3, ignorer det 3. input

console.log( add(1) );	  // What will it print
  printer NaN "not a number", mangler et input

console.log( cb(3,3,add) ); // What will it print
  printer "Result from the two numbers: 3 + 3 = 6"

console.log( cb(4,3,sub) ); // What will it print
  printer "Result from the two numbers: 4 + 3 = 1"

console.log(cb(3,3,add())); // What will it print (and what was the problem)
  printer da den skal bruge referencen og ikke metodekaldet.

console.log(cb(3,"hh",add));// What will it print
  printer "Result from the two numbers: 4+hh = 4hh"
*/

const mul = function(number1,number2){
    return number1 * number2
}

 console.log(cb(2,3,mul))

 console.log(cb(3,2,(number1, number2)=> number1 / number2))