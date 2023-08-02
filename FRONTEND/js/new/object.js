// a javasccript object can be declared using {} 
let user_data = {
    firsname : "raavi",
    lastname: "prasad",
    age : 89,
    googlelogin:true,
    
}
// object contains key : value pairs which are seperated by commas (,)
// we can also declare methods inside of an object 
// we can access the data in the onject using 
// console.log(user_data)
// console.log(user_data.firsname)
// console.table(user_data)
// the output is :
// { firsname: 'raavi', lastname: 'prasad', age: 89, googlelogin: true }
// raavi
// ┌─────────────┬──────────┐
// │   (index)   │  Values  │
// ├─────────────┼──────────┤
// │  firsname   │ 'raavi'  │
// │  lastname   │ 'prasad' │
// │     age     │    89    │
// │ googlelogin │   true   │
// └─────────────┴──────────┘
// **************************************

// we can use different methods to access the values of the keys 
// console.log(user_data.firsname)
// console.log(user_data["firsname"]) // this method is not used much



// we can also write methods inside of objects 
let newobj = {
    firstname : "prasad",
    lastname : "siva",
    gender : "male",
    age : 56,
    isloggedin : true,
    courselist  : [],
    buycourse  : function(coursename){
        this.courselist.push(coursename)
    },
    // here the keyword "this" will have reference to the present object
    coursecount  : function(){
        return `the course count is ${this.courselist.length}`
    }
}

// newobj.buycourse("react")
// newobj.buycourse("node js")
// console.log(newobj.courselist)
// output is :
// [ 'react', 'node js' ]
// ***********
// console.log( newobj.coursecount())
// output is : 
// [ 'react', 'node js' ]
// the course count is 2
// ****************************

// to get keys os object
// console.log(Object.keys(newobj))
// to get values of object 
// console.log(Object.values(newobj))

// to check weather the key is avilable or not 
// console.log(newobj.hasOwnProperty("firstname"))

// output is  : 
// [
//     'firstname',
//     'lastname',
//     'gender',
//     'age',
//     'isloggedin',
//     'courselist',
//     'buycourse',
//     'coursecount'
//   ]
//   [
//     'prasad',
//     'siva',
//     'male',
//     56,
//     true,
//     [],
//     [Function: buycourse],
//     [Function: coursecount]
//   ]
//   true
//   ************************* 

// we cannot use arrow function in objects 

// loops in objects 
// in object we use ''for in'' loop to loop through object 
let obj2 = {
    name :"prasad",
    age: "78",
    gender :"male "
}
// for (let x in obj2){
//     console.log(obj2[x])
//     console.log(x)
//     console.log(`key is ${x} and the value is ${obj2[x]}`)
// } 

// output is : 
// key is name and the value is prasad
// key is age and the value is 78
// key is gender and the value is male 
// ********************************
// for (let x in obj2){
    
//     console.log(x)
//     // it returns keys
   
// } 
// output is : 
// name
// age
// gender
// ************************ 
// for (let x in obj2){
//     console.log(obj2[x])
//     // it returns values
    
// } 
// output is :
// prasad
// 78
// male 
// *****************************


// higher order functions
// when a function call another function it is callback funcion
// when some thing takes function as input in a function then it comes under the catogeory of higher order functions
// a higher orer function is function which accepts functions as Parameters 

// let even = (n) => {
//     return n% 2== 0 
// }
// when we are passing a function in to another function () is not required 
//  let values = [2,5,4,8].every(even)
// console.log(values)
// output is : false


// function square(x){
//     return x **2 
// } 
// function cude (square , x){
//     console.log(square(x) * x)
// }
// cude(square,2)
// output is 8


// setTimeout (part of higher order function)
// let fun = () => {
//     console.log("prasad")
// }

// Syntax :
// setTimeout(() => {
    
// }, timeout);


// setTimeout(fun,3000);
// in output we will get prasad after 3000ms 

// setTimeout(() => {
//     console.log("prasad")
// }, 5000);

// setInterval ( it also comes under higher order functions)  
// setTimeout allows us to run a function once after the interval of time.
//  setInterval allows us to run a function repeatedly, starting after the interval of time

// setInterval(() => {
//     console.log("hello")
// }, 3000);
// output comes repeteadely afte 3000ms interval 

// let data =[454,456,564,4564]
// data.forEach(e => {
//     console.log(e)
    
// });
// output is :
// 454
// 456
// 564
// 4564
// ****************** 
// foreach does the function opertions on the array on which it is applied
// foreach does not return anything 
// it returns undefined 
// it is used for only iteration 
// Syntax: 
// array.forEach(element => {
    
// });

// ********* ?????????????
// know the difference bwn "every" and "foreach" 



// map
// map iteretes over the array or object and it returns array of elements
// it returns array

// let numbers = [4,5,3,2,1]
// let res= numbers.map((x) => {return x*x})
// console.log(res)
// output is : 
// [ 16, 25, 9, 4, 1 ]
// ************************** 


// filter 
// filter is used to filter out the specific data in the array based on the callback function 
let counter= ["india","america","usa","canada" , "ssilanka"]
// let res = counter.filter((x)=> x.includes("n"))
// console.log(res)
// output is : 
// [ 'india', 'canada', 'ssilanka' ]

// to filter based on length 
// let res  = counter.filter((x)=> x.length===3)
// console.log(res)
// output is :
// [ 'usa' ]
// ******************



// reduce 
// reduce is used to combine all the elements of the array in to single value 
// syntax : Array.reduce((accumulator,currentvaluw) =>{},accumulatorinitialvalue) 
// if we do not give the value to the accumulatorinitialvalue it will be set to first value of the array 
let price = [2,5,6,8,7]

const con = price.reduce((x,y)=>  x+y ,0 )
console.log(con)
// output is :
// 28
 