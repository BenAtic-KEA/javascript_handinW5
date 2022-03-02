/**
 * Getting comfortable with filter, map and forEach:
 */

//1 first exercise filter:
const names = ["Lars","Jan","Peter","Bo","Frederik"]

const shortnames = names.filter(name => name.length <= 3).forEach(name => console.log(name));

//2 second exercise uppercase:

const uppercasedNames = names.map(name => name.toUpperCase())

//3 third exercise map & join

const htmlList = names.map(name => `<li>${name}</li>`).join("")
let ulStringList = "<ul>" + htmlList + "</ul>"
console.log(ulStringList)

//4 fourth exercise

const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

  const newerCars = cars.filter(car => car.year > 1999)
  console.log(newerCars)

  const allVolvos = cars.filter(car=> car.make == "Volvo")
  console.log(allVolvos)
  
  const cheapCars = cars.filter(car=> car.price < 5000)
  console.log(cheapCars)

  //4a Extra exercise

  function addCarToDB(car){
      const sqlString = `INSERT INTO cars (id,year,make,model,price) VALUES (${car.id},${car.year},${car.make},${car.model},${car.price});`
      return sqlString
  }
  const addedCar = cars.map(car => addCarToDB(car)).forEach(car => console.log(car))