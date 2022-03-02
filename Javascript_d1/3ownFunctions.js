// a) Implement a function: myFilter(array, callback)that takes an array as the first argument, 
// and a callback as the second and returns a new (filtered) array according to the code provided in the callback 

function myFilter(array, callback){
    // det nye array jeg returnere
    const filteredArray = []
    // loop der kontrollere alle index
    for (let i = 0; i < array.length; i++){
        // kontrollere om værdien lever op til den medsendte funktion "callback"
        const result = callback(i)
        if(result)
        // tilføjer til array hvis det er true
        filteredArray.push(array[i])
    }
    return filteredArray
}

const testArray = [1,2,3,4,5,6,7,8,9]

const filter = myFilter(testArray,number => number > 4 );
console.log(filter)

//b Implement a function: myMap(array, callback)that, provided an array and a callback,
// provides the same functionality as calling the existing map method on an array.

function myMap(array,callback){
    const newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(callback(i))
    }
    return newArray
}

const myMapArray = myMap(testArray, number => "this is my number " + number)
console.log(myMapArray)
