let a = 300
if (true){
    let a =10
    const b = 20
    console.log("INNER: ", a); 
}
console.log(a);



//////with example 
function one() {
    const username = "devpatel"

    function two() {
        const website = "youtube"
        console.log(username);

    }
    two()
}

one()


//////////////////

if (true) {
    const username = "devpatel"
    if (username === "devpatel") {
        const website = "youtube"
        console.log(username + website);
    }
}

/////////////////// intersting example///////////
addone(5)
function addone(num){
    return num + 1
}

addtwo(5)
const addtwo = function(num) {
    return num + 2
}
