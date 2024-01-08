const user = {
    username: "hitesh",
    price: 999,

    welcomeMassage: function() {
        console.log(`${this.username} , welcome to the website...`)
    }
}
user.welcomeMassage()
user.username = "sam"
user.welcomeMassage()


/////////////
// function chai() {
//     let username = "devendra"
//     console.log(this.username);///here this is not working...
// }

// chai()


/////////////////////////

const chai = () => {
    let username = "devendra"
    console.log(this);
}

chai()

//////////aarayy function 
/// () => {}
const addtwo = (num1, num2) => {
    return num1 + num2 /// if we use "{}" then we have to write the return key word 
}
console.log(addtwo(3, 4))


const addThree = (num1, num2, num3) => num1 + num2 + num3/// if we are not using "{}" then we did not need  to write the return key word
console.log(addThree(3, 4, 5))

const obejctdefine = (value1, value2) => ({username: "devendrapati"})
console.log(obejctdefine(3, 4));