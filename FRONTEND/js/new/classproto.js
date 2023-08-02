// // classes are template for creating objects
// // classes are in facy special functions

// // naming convention of class first letter should be captial
// class User {
//     constructor(firstname = "javascript", lastname = "developer", email, password){
//         // we can also give the default values to the constructor parameters. if the user does not pass any value 
//         // then the default values are taken
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.email = email
//         this.password = password
//     }
//     getfullname(){ 
//         const fullname = this.firstname + '' + this.lastname
//         return fullname
//     }

// }
// // once the memory is allocated to the new object the first one that is called is constructor 
// let user1=  new User("Anurag","Tiwari", "prasad@yanoo","123456987")
// // console.log(user1.getfullname())
// // AnuragTiwari

// // each time a new object is created the memeory alllocation is different

// let user2 = new User("raavi", "siva", "siva@gmail.com",987564546)
// console.log(user2)

// let user3 = new User("email@giaml.com",4654654) 
// console.log(user3)


// getter and setter
class User {
    constructor(firstname , lastname , email, password){
        // we can also give the default values to the constructor parameters. if the user does not pass any value 
        // then the default values are taken
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email
        this.password = password
        this.score = 0
    }
    getfullname(){ 
        const fullname = this.firstname + '' + this.lastname
        return fullname
    }
    get getfirstname(){
        return this.firstname
    }
    get getlastname(){
        return this.lastname
    }
    set setscore(score){
        this.score = score
    }

    get getscore(){
        return this.score
    }
}

// getters are used to get the value 
// setters are used to set the value
// getters are defined using "get" keyword
// setters are defined using "set" keyword
// setters are used to set the values to the variavles in the class constructor
// while calling getters "()" are not required

let user1 = new User("javascript","developer")
console.log(user1.getfirstname)
console.log(user1.getlastname)
user1.setscore = 7;
console.log(user1.getscore)


// inheritence in javascript\
// if one class is able to methods of other class it is called as inheritence

class UserOne {
    constructor(firstname , lastname , email, password){
        // we can also give the default values to the constructor parameters. if the user does not pass any value 
        // then the default values are taken
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email
        this.password = password
        this.score = 0
    }
    getfullname(){ 
        const fullname = this.firstname + '' + this.lastname
        return fullname
    }
}

class Usertwo extends UserOne {
    // this is home work
}
