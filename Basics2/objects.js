//object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "devendra" ,
    "full name": "devendra patidar",
    [mySym]: "myKey1",
    age: 21 ,
    location: "indore",
    email: "devpati2002@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "tuesday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);


JsUser.email = "devpatel4627@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "devendra.patidar@gmail.com"
console.log(JsUser);




JsUser.greeting = function(){
    console.log("Hello form js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello from js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



