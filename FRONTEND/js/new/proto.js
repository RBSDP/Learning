let data = [5,3,5,8]

// the delow is functional way of declaring objects . it is also called as prototype
let username = function (name, count){
    this.name =name;
    this.count= count;
    this.getcoursecount = function(){
        console.log(`this course count is ${this.count}`)
    };
};
// if we want to add another methos in to username form outside of it we use 
username.prototype.getname = function () {
    console.log(`user name is ${this.name}`)
}
// so all the objects created get all the methods including getname()
let userone = new username("anurag",7)
userone.getcoursecount()

// everything is an object in javasript . no matter what you declare prototype is added to it 

// there is another topic known as prototypal inheritence
// what is does is that we can use functions or methods of one object in other object

let objonw = {
    fullname : "prasad",
    add:"repalee",
    getname : function(){
        console.log(`my name is ${this.fullname} and my address is ${this.add} `)
    }
} 

let objtwo = {
    fullname : "siva"

};
// so if you want to get getname method fron objone to objtwo we use 
objtwo.__proto__ = objonw
// now we get the access of the functions of objonw
objtwo.getname()
// output is :my name is siva and my address is repalee