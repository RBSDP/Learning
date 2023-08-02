// function
// functions are pieces of reusable codes

// it is declared using function keyword followed by the name of the function 
// function names (){
//     let names = ["siva" , "durga" ,"prasad" ,"bala"]
//     console.log(names) 
// }
// here we can observe that we can give same name to the function and variable
// names()
// *********   output **************  
// [ 'siva', 'durga', 'prasad', 'bala' ]
// *************       ******************* 


// passing parameters in functions
// function country_num(x,y){
//     let xy = x+y
//     console.log(xy)
// }

// country_num()
// *********   output **************  
// NaN
// *************       **************
// country_num(4,6)
// *********   output **************  
// 10 
// *************       **************

// return of values in function 
// function addi(x,y){
//         let xy = x+y
//         return xy
//     }


// let output  = addi(8)
// console.log(output)
// *****************   output ****************
// NaN 
// *******************         *********************** 
// let souto = addi(8,9)
// console.log(souto)
// *****************   output ****************
// 17
// *******************         *********************** 


// passing array in function
// function sumofarray(arr){
//     let sum = 0
//     for(let i of arr){
//         sum=sum+i
//     }
//     return sum
// }

// let data = [45,45,65,8486,645]
// let ans = sumofarray(data)
// console.log(ans) 
// *************  output *************
// 9286
// **************          ************




// arrow functions
// syntax 
// let var_name = () => {

// }


// let fun = (...arr) =>{      //(here '...arr' i.e three dots are used allow us to pass as many as parameters we want)
//     console.log(`${arr}`);
// }

// fun(5,56,4874,654)
// *************  output *************
// 5,56,4874,654
// **************          ************