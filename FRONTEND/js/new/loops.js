// loops 
// for loop
// syntax: for (initilization ; condition ;increment ){ }
// for (let i=1 ; i<=5 ;i++){
//     console.log(i)
// }

// for (let i =1 ; i <= 4 ;i++ ){
//     console.log(`the square is ${i * i}`);
// }
// ****  output ********  
// the square is 1
// the square is 4
// the square is 9
// the square is 16
// ***********         *************  

// for loop on arrays 
// let array = ["prasad" , "siva" ,"krishna" , "durga"]
// let upp = []
// for (let i=0 ;i<array.length ;i++){
//     upp.push(array[i].toUpperCase())
// }
// console.log(upp)

// **********  output **********
// [ 'PRASAD', 'SIVA', 'KRISHNA', 'DURGA' ]
// *************       ***********
// while loop


// let p = 0     // intilization (it should be done outside not like for loop)
// while(p<=0){
//     console.log(p);
//     p++
// }

// ******   output ***********
// 0
// *********** **********


// do while loop
// unlike while loop the do while loop first executes and then cehecks for the condition
// let i =0
// do {
//     console.log(i) // here output  0 is printed 
//     i++ // here the  i  becomes 1 
// }while( i<=0)   // as i = 1 it dosnt satisft and breaks the loop

// for of loop 
// for of loop inerates over every data in the array
// let countries = ["india" ,"bangladesh" ,"sri lanka","america"]
// for (let i of countries){
//     console.log(`name of the country is ${i}`)
// }
// ************  output   ************ 
// name of the country is india
// name of the country is bangladesh
// name of the country is sri lanka
// name of the country is america
// **************          ****************   


// break and continue

// let names =["prasad" ,"siva","krishna","durga"]

// for (let i of names){
//     if (i == "siva"){
//         break;
//     }
//     console.log(i)
// }
// 'break' breaks out of the loop and the loop is stoped 
// ********  output  ********** 
// prasad 
// *************        ***********  

// for (let i of names){
//     if (i == "siva"){
//         continue;
//     }
//     console.log(i)
// }
// 'continue'  continues the loop skipping one (check the output to understand)

// ***********  output  *************
// prasad
// krishna
// durga
// ***********         ************* 