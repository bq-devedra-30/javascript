function sayMyName () {
    console.log("d");
    console.log("e");
    console.log("v");
    console.log("p");
    console.log("a");
    console.log("t");
    console.log("e");
    console.log("l");
}

//sayMyName ()

function addTwoNumbers(number1, number2) {
    //let result = number1 + number2
    //return result
    //console.log(number1 + number2);
    return number1 + number2

}
const result = addTwoNumbers(3, 4)
//console.log("Result:", result);


function loginUserName(username){
    if(username === undefined){
    console.log("please enter a username");
    return
    }
    return `${username} just logged in`

}

console.log(loginUserName());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 600));


//////////////////// function with the objject//////////
const user = {
    username: "devpatel",
    price: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleobject(user)


///////////////////function with array///////////

const myNewArray = [200, 300, 400, 500]

function returnNewArrayValue(getArray){
    return getArray[2]

}

console.log(returnNewArrayValue(myNewArray));

