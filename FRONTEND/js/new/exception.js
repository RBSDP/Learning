// error handeling or exceptional handeling
// in js errors are handeled using "try catch" 
// 'try' block gives the error 
// 'catch' block take care of the error
// there is another block knkwn as "finally"
// even though 'try' throws the error or not 'finally' block executes

// **************** 
// syntax : 
// try {
    
// } catch (error) {
    
// }
// ********************
// var name = "prasad" 
// try {
//     console.lop(name)
// } catch (error) {
//     console.log(error)
    
// }
// it will return error in the console
// here "error" object consists of different methods
// e.g : "error.name" it olny gives the tyoe of the error   

// Unlike other constructs such as if or for, the try, catch, and finally blocks must be blocks, instead of single statements.
// try {
    
// } catch (error) {
    
// }finally{
//     // there is another block called as finally block which executes wheather or not "try" statement throws error
// }


// hoisting 
// it means accessing something before it is declared 
// in javascript it firsts scans the total code and it decalres the value "undefined" to the variables which are declared using "var" keyword


console.log(a)
// it gives value as "undefined" as it is declared using "var"
var a=0
console.log(b)
// it gives referenceerror
// becaues if the variables are declared using "let" keyword we cannot access the variables before initilisation
let b=9