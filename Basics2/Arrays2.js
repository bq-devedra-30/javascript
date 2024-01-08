// const marvelHeros = ["thor", "Ironman", "spiderman"]
// const dcHeros = ["superman", "flash", "batman"]

// //marvelHeros.push(dcHeros)

// const allHeros = marvelHeros.concat(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[2]);
// console.log(allHeros);

// ////spread

// const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros);


/////flat 

const anotherArray = [1, 2, 3, 4, [1, 2, 4 [6, 7, 8], 9, 8, 5]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

/////from Array 

const array1 = Array.from("devendra")
console.log(array1);

console.log(Array.from({name: "devpatel"}));  ///need to determin the thing which we want to convert in arrays.....

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));