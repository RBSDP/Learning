let data = ["prasd", "siva", 5, 3, 9]



const user = {
    name: "prasad",

    getcoursecount : function() {
        return(`this person name is ${this.name}`)
    }
}  

// inheritence or prototypal inheretience
// inheritence is accessing the properties or methods of one object in to other 

const User = {
    name : "top name",
    email : "example@gmail.com"
}

const Teacher = {
    makevedious : true
}

const Teachingsupport = {
    isavilable :false
}

const TSassitant = {
    makeassignment:"js assignment",
    fulltime : true,
    // there is non popular way of inheriting properties
    // i.e __proto__:Teachingsupport
}

//  if we want all the properties of "User" object into "Teacher" object one way of doing this is


// Teacher.__proto__ = User 
// Teacher.prototype = User
// The above disscussed two ways are not used much so dont use 

// The new way of doing this is given below
Object.setPrototypeOf(Teacher,User)

// if we want Teachingsupport to access the values of both "Teacher" and "User" 
Object.setPrototypeOf(Teachingsupport,Teacher)

// now lets us consider we want a method "turelength()" which should return true length og the srting
// we want that method for all the strings to get
// normally string.length gives length but if we give spaces it will also count the spaces
// but out newly defined "truelength()" removes all the spaces and returns the length

String.prototype.truelength = function(){
    return `length is ${this.trim().length}`
}

console.log("prs   ".truelength())