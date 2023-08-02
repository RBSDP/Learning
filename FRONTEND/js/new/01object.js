// we declare objects in two ways 
// 1)literal declaration 
// 2)declaring using a constructor

//singleton -- when we declare objects using constructor then it forms singleton object
// Singleton is a design pattern that tells us that 
// we can create only one instance of a class and that instance can be accessed globally. 
//object literals
// we can also create object using 
// Object.create // this is constructor way of declaring objects in this silgleton if formed
const user = {
    name:"prasad",
    age:56,
    location : "repalle",
    email :"rbsdp@gmail.com",
    lastlogindays :["monday" ,"tuesday"]
}
// in js object keys are by default considered as strings 
// in objects we can define both keys and values but in arrays we can only define values 

// accessing values of object 
console.log(user.name)
// we can also access the objets values using square brackets
console.log(user["name"])
// so what is the difference between 1st way and square bracket way of accesing values ?
// if any key is declared using "symbol " datatype then we can access them only by using square bracket way 

// we can also change the values in the object 
user.name = "bala"
console.log(user.name)

// we can also add functions in js objects 
user.greetings = function(){
    return(`hello my name is ${this.name}`) //here "this" is used because it is pointing to the current object
} 
console.log(user.greetings())

// fact: console.log(console.log()) //it gives undefined as output 


// we can also create object using "new" keyword
const newobj = new Object() //this is singleton object
console.log(newobj)

// we can also create objects inside an object 
const newobj1 = {
compant : "prasad",
usernames:{
    fullname : {
        firstname : "raavi",
        lastname : "bala siva"
    }
}

}
console.log(newobj1.usernames.fullname.firstname)

// we can also add two onjects 
const object1 = {
    a :1,b:2,c:3
}
const object2 = {
    d:4,g:6,l:0
}
const obj3 = Object.assign(object1 ,object2)
console.log(obj3)
// output is :
// { a: 1, b: 2, c: 3, d: 4, g: 6, l: 0 } 
// 