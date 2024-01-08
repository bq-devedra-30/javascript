////////////////if event
const isUserLoggedIn = true
const temprature = 42

if (2 === "2") {
    console.log("executed");
}

if (temprature === 42) {
    console.log("less than 50 ");
}else{
    console.log("grater than 50");
}

console.log("executed");

// <,  >,<=, >=, ==, ===,!=,!==


//////////////////////
const score = 200 
if (score > 100) {
    let power = "fly"
    console.log(`user power: ${power}`);
}

//console.log(`user power: ${power}`) ////we can not accesss the value of power here because it is global enverment and we decalare power value under the function....

////////////////////////

const balance = 1000
  //if (balance > 500)  console.log("test");

if (balance < 500 ){
    console.log("less than the 500");
} else if(balance < 750 ){
    console.log("less than 750");
} else if (balance < 900 ){
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

////////////////////////

const userLoggedIn = true
const debitCard = true
const isLoggedInFromGoogle = false
const isLoggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy the courses");
}

if (isLoggedInFromEmail || isLoggedInFromGoogle){
    console.log("user logged in");
}
///////////////////