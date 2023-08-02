// let user = "nam"
// // we dont use swich case we aleays use if and else
// switch(user){
//     case "name":
//         console.log("it is user nem")
//         break;
//     case "age":
//         console.log("it is your age")
//         break ;
//     default :
//         console.log("its default")

// }
// console.log("it's over")


// arrays 
// let names = ["prasad","krishna","siva","muni",980]
// let man=[]
// console.log(names)
// console.log(Array.length)

// ???????????????? 
// the below is the output for above code 
// the question is why array.length is showing 1 
// ** * * output: ** ***
// siva@siva-Inspiron-3576:~/js$ node script.js 
// [ 'prasad', 'krishna', 'siva', 'muni', 980 ]
// 1
// ****  ***** 

// console.log(names[2])
// names[2]="prasad"
// console.log(names[2])
// console.log(names)

// the below way of declaring array is bad and not good
// let names= new Array("prasad","krishna","siva","madhu") // not good

// console.log(names)
// names.push("ouiyt")
// console.log(names)
// push method add the element to the end of the array
// ****** output **********
// [ 'prasad', 'krishna', 'siva', 'madhu' ]
// [ 'prasad', 'krishna', 'siva', 'madhu', 'ouiyt' ]
// ******************       ********************** 

// new_names=names.slice(0,2) //here the new_names array consists of  -----
// // -------  only the values present at 0 1 indexes 2nd index is excluded
// console.log(new_names)
// ******************  output ******************** 
// [ 'prasad', 'krishna' ]
// *******************                *************************

// let num = ["prasad","siva","krishna","bala","anil"];
// console.log(num);
// num.splice(1,3,"prasaddsadas","djkslhkhjdio","jhfdlajhfjakdhfjkh");
// // syntax : splice(startindex,deletecount,values(seperated by commas))
// console.log(num);


// let num =["prasd","krishna","kumar","siva"]
// let num1=[1,2,34,4,5];
// let num2=[2,3,34,45,54];
// console.log(num.concat(num1+num2));
// ************ output ******************* 
// [ 'prasd', 'krishna', 'kumar', 'siva', '1,2,34,4,52,3,34,45,54' ] 
// ***************      ****************


// let names = ["praad","car","siva","durga"]
// console.log(names.copyWithin(0,2,5))
// ******** output ******************
// [ 'siva', 'durga', 'siva', 'durga' ] 
// syntax array_name.copyWithin(target_index,start,end)



// let names = ["bala" ,"siva" ,"durga" ,"prasad"]
// console.log(names.includes(0,1))
// includes is used to check wheathwe the particulat value is present at that index
// syntax : array_name.includes(value,index)
// ************ output ************* 
// false
// ***************            **************


// let values = [1,1,2,5,5.5,5.0,645]
// console.log(values.indexOf(5))
// indexof is used to find the index of a particular element 
// *******************  output ****************** 
// 3
// *****************           *****************


// map 
// map applies the method to whole array 
// syntax : array_name.map(expression)
// let num = [4 , 6, 6, 5 , 4]
// console.log(num.map(Math.sqrt))
// it gives the squareroots of the total array 
// **************** output ******************
// [ 2, 2.449489742783178, 2.449489742783178, 2.23606797749979, 2 ] 
// *****************           ******************** 
// console.log(num.shift());
// console.log(num.shift());
// console.log(num)
// syntax:array_name.shift()
// it removes the first element of the array
// ********    output  *************** 
// 4
// 6
// [ 6, 5, 4 ]
// ****************            *****************  



// let names = ["prasad" ,"krishna","siva ","bala"]
// console.log(names)
// console.log(names.unshift("krishna"))
// unshift inserts the value at the first position
// console.log(names)
// syntax :array_name.unshift("value you wanted to insert")
// ************ output  ****************  
// [ 'krishna', 'prasad', 'krishna', 'siva ', 'bala' ]
// *****************       **********************  

// let lang = "javascript";
// "split" splits the array in to individual characters 
// let ne = lang.split("")
// console.log(ne)
// ****************  output   *******************
// [
//     'j', 'a', 'v', 'a', 
//     's', 'c', 'r', 'i',
//     'p', 't'
//   ]
// *******************       **************************  


// MATH in Javascript 

// let pie =Math.PI
// console.log(pie) //output is 3.141592653589793

// console.log(Math.round(pie)) //output is 3

// console.log(Math.floor(pie)) //output is 3
// console.log(Math.ceil(pie)) //output is 4


// console.log(names.toString()); 
// toString converts the array into single string
