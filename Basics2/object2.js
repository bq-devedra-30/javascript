//singleton
//object.create

//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123xyz"
tinderUser.name = "alpha"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email: "devpatel4627@gmail.com",
    fullName: {
        userFullName: {
            firstName: "dev",
            lastName: "patel"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {...obj1, ...obj2}
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj3);
console.log(obj4);


//////pick the value from the database 
 const users = [
    {
        id: 1,
        email: "d@gmail.com",
        name: "devpatel"
    },
    {
        id:2,
        email: "b@gmail.com",
        name: "bpatel"

    }
 ]

 console.log(users[1].email);


 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));
 console.log(tinderUser.hasOwnProperty('isLoggedIn'));



 const course = {
    coursensame: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor
const {courseInstructor: instructor} = course
console.log(instructor);