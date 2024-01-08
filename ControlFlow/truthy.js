const userEmail = "dev@gmail.com"


if (userEmail){
    console.log("got user email");
} else {
    console.log("don't have user email");
}

//falsy value => false , 0, -0, BigInt 0N, "", null, undefined, NAN(not a number)

//truthy valiues => "0", "false", " ", [], {}, function(){}


if (userEmail.length === 0) {
    console.log("array is empty");
}

const emptyobj = {}

if (Object.keys(emptyobj).length === 0){
    console.log("object is empty");
}

////Nullish coalescing operator (??): null undefined

let val1;
//val1 = 5 ?? 10 
//val1 = null ?? 10
//val1 = undefined ?? 15 
val1 = null ?? 10 ?? 20 // it will pick first exsisting value

console.log(val1);

////////Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80 ") : console.log("more than 80");

