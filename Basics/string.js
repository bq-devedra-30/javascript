const name = "devpatel"
const repoCount = 48
 
console.log(`Hello my name is ${name} and the repo count is ${repoCount}`);

//const gameName = new String ('devendrapatidar')
const gameName = new String ('devendra-patidar')


console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));
console.log(gameName.length);
console.log(gameName.toUpperCase()); 



const newString = gameName.substring(0, 8)
console.log(newString);

const anotherstring =gameName.slice(-8, 4 ) 
console.log(anotherstring);


const newStringOne = "   devpati    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://dev.com/dev%20patel"
console.log(url.replace('%20', '_'));

console.log(url.includes('dev'));

console.log(gameName.split('-'));