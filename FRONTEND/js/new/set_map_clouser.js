// changing the type 
// we can shange a number to string usinf string() method 
// let data = 65;
// let new_data = String(data)
// console.log(typeof new_data)


// let data = "09";
// let new_data = Number(data)
// console.log(typeof new_data)

// destructuring and spread
// destructuring menans assigning individual variables to the contents of the array

// let arratone = [1,2,6,8,8]

// let [a,s,d,f,g] = arratone
// here if we remove the squarebackets it will give undefined 
// let a,s,d,f,g = arratone  
// and if we try to acesss the value of 'a' or any variable it will give undefined 

// console.log(g)
// console.log(f)
// output is :
// 8
// 8
// ****************


// let fullstack = [["html","css","js","react"],["nodejs","sql","mongobd","expressjs"]]

// let [frontend , backend] = fullstack
// console.log(frontend)
// output is :
// [ 'html', 'css', 'js', 'react' ]
// ***************

// while destructuring if we want to skip some of the values then there is this way
// let arratone = [1,2,6,8,8]

// let [a, ,b, ,c]=arratone
// here we are skipping 2,8 
// console.log(b)
// the output is 
// 6
// ************

// if we want to store some values of the array in some varibles and remaining all values
//  of the arrat in a single variable then we use this technique  

// let poi = [5,"k",5,6,2,3,13,3,3,3]
// let [e,o,...rest] = poi
// console.log(rest)
// output is :
// [
//     5, 6, 2, 3,
//    13, 3, 3, 3
//  ]
// ******************


// spread and rest  

// spread operator 
// spread operator is used to destructure the array and pass the values of the 
// array individually

// function sum (x,y){
//     return x+y;
// }

// let val = [5,3]
// console.log(sum(...val))
// output is 
// 8
// *********
// here the array is destructred  and passing the individual values of array \


// rest operator 
// here the group of values are formes in the form of array 
// function sum (...args){
//     let sum= 0 ;
//     for (let i of args){
//         sum= sum + i
//     }
//     return sum
// }

// console.log(sum(1,5,6,4)) //here these values are converted in to array from brfore passing
// output is :
// 16
// *************


// new 
// new is a keyword
// let on={
//     name:"prasad"
// }

// let off =new Object()

// off.name =  "krishna"
// console.log(off)

// output is :
// { name: 'krishna' }
// ****************

// let person = function(firstnamr,coursecount){

//     this.firstname = firstnamr
//     this.coursecount = coursecount
// }

// let prasad = new person("siva",5)
// let krishan = new person("sai ", 52)
// console.log(krishan)
// output is :
// person { firstname: 'sai ', coursecount: 52 }
// ******************


// set and map 
// set 
// set is an object which allows us to store unique values of any datatype
// a set can be declared by using "Set()"
// set also have different methods to add and delete data

// let a = [1,2,3,4,2,3,5,6];

// let num = new Set(a)
// console.log(num)

// for(let i of num){
//     console.log(i)
// }
// output is :
// Set(6) { 1, 2, 3, 4, 5, 6 }
// 1
// 2
// 3
// 4
// 5
// 6
// **************************


// Map
// map is a javascript object that store values in form of keys and values here the keys can be 
// of any data type
// map is ordered and iterable (we can use "for of" loop )
// let dat = new Map()
// here the setter is used to set the value
// dat.set(4,"oui")
// dat.set("dfka" , 45)
// dat.set(false ,"dfjl") 
// console.log(dat)

// output is :
// Map(3) { 4 => 'oui', 'dfka' => 45, false => 'dfjl' }
// ****************


// let city = [["ap","amaravati"],["talan","hyd"],["tamil","madras"]]
// let cities = new Map(city)
// console.log(cities)
// output is :
// Map(3) { 'ap' => 'amaravati', 'talan' => 'hyd', 'tamil' => 'madras' }
// ******************

// clousure 


// scope
// scope is where to look for things 
// javascript is single therded synchrnous language 
// in javascript everyting happens inside execution context 