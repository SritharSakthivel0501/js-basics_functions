// console mothod...

// console.log("srithar");
// console.log(123454);
// console.log(["1","2","3","4"]);

// console.table({name:'srithar',age: '22'})

// console.error("error");

// console.warn("error");

// var , let const...

// var a = 20
// var b = 20

// console.log(a+b);

// if(true){
//     var msg =  "welcome"
// }
// console.log(msg);

// let a = 20
// let b = 20

// console.log(a+b);

// if(true){
//     let msg =  "welcome"
//     console.log(msg);

// }

// var a = 20
// var b = 20

// console.log(a+b);

// if(true){
//     const msg =  "welcome"
//     console.log(msg);
// }

// console.log(a, typeof a);


// variable redeclaration...

// let a = 40
// console.log(a);

// const  man = {name: "srithar",age:"22"}
// console.table(man.name)
// man.name = "srikutty"
// console.log(man)
// console.table(man)

// data types in JS ...

// number = 1 2 3 4  5 6
// boolian  = true , false
// null
// undefined
// sembuls


// array
// object
// Date


// let a = 20;
// // let a = "sri"
// // let a = 2.44
// a=new Date()
// a = [1,2,3,4,5,6,7,8,9]
// a = String(a)
// console.log(a, typeof a);

// a = [1,2,3,4,5,6,7,8,9]
// console.log(a , typeof a);
// a = a.toString()
// a = false;
// console.log(a, typeof a);


// type coercion .......
// let a = "50"
// let b =  20
// a = Number(a)
// console.log(a+b);

// Arithmetic Operation ...

// let a = 50
// let b = 20
// c = a+b
// console.log(c);


// let a = 50
// let b = 20
// c = a-b
// console.log(c);

// let a = 50
// let b = 20
// c = a/b
// console.log(c);

// let a = 50
// let b = 20
// c = a*b
// console.log(c);

// Assignment Operators...

// let a = 20
// a=a+5
// console.log(a);

// let a = 20
// a+=5
// console.log(a);

// Math Functions...

// let c;
// c = Math.PI
// c= Math.E
// c=Math.random(4.3)
// c=Math.floor(5.4)
// c=Math.sqrt(50)
// c= Math.abs(-36)
// console.log(c);

// Comparison Operators...

// let a = 40
// let b =40
// console.log(a ==b );

// let c = 40
// let d ="40"
// console.log(c===d);
// console.log(c!==d);

// Relational Operators..

// let a = 20
// let b = 10

// console.log("greater :",a>b);
// console.log("greater :",a<b);
// console.log("greater :",a<=b);
// console.log("greater :",a>=b);


// Logical Operators...

// let mark = 35
// console.log(mark>=35 && mark<=100);

// let a = 10
// console.log(a == 10 || a == 20);

// strict equality or Identity Operator....

// let a = 100
// console.log(a);
// let b = "100"
// console.log(a == b);
// console.log(a === b);

// Ternary Operator...

// let age = 10

// let result = age>18?"eligible":"not eligible"

// console.log(result);

// function parsan(name) {
//     let result = name?name:"no name"
//     console.log(result);
// }
// parsan("srithar")

// let man = {name:"srithar",age:"23"}

// function parsan(man) {
//     let result = man.name?man.name:"no name"
//     return result
// }
// console.log(parsan(man));


// let avg = 87

// let grede = avg>90? "A gread":avg>80? "B gread":"C gread"

// console.log(grede);


// Incrememt or Decrement Operator...

// let a = 1
// a++
// console.log(a);

// let b = 10
// b--
// console.log(b);

// // postfix Incrememt a++
// // prefix Incrememt ++a

// let x = 5
// const y = x++
// console.log(x ,y );


// let i = 5
// let j = ++i

// console.log(j , i);

// IF Statement ...

// let age = prompt("enter your age")

// if(age != null && age>=18){
//     console.log("your eligible for vote");
// }
// else{
//     console.log("your not eligible for vote");
// }

// let number = 1

// if(number<0){
//     console.log("is negative number");
// }
// else if(number>0){
//     console.log("is positive number");
// }
// else{
//     console.log("given number of zero number");
// }


// let avg = 97

// if(avg >= 90 && avg <= 100){
//     console.log("A grede");
// }
// else if(avg >= 80 && avg <= 89){
//     console.log("B grede");
// }
// else if(avg >= 70 && avg <= 79){
//     console.log("C grede");
// }
// else{
//     console.log("D grede");
// }

// let tamil = 98, english = 89, maths = 100
// let total = tamil + english + maths
// let avg = total / 3

// // console.log(avg);
// // console.log(total);

// if(tamil>=35 && english >= 35 && maths >= 35){
//     console.log("result:  pass");
//      if(avg >= 90 && avg <= 100){
//             console.log("A grede");
//         }
//         else if(avg >= 80 && avg <= 89){
//             console.log("B grede");
//         }
//         else if(avg >= 70 && avg <= 79){
//             console.log("C grede");
//         }
//         else{
//             console.log("D grede");
//         }
// }
// else{
//     console.log("result: fail ");
// }

// switch statement ...

// let number = 2

// switch (number) {
//     case 1:
//         console.log("one");
//         break;
//         case 2:
//         console.log("two");
//         break;
//         case 3:
//         console.log("three");
//         break;

//     default:
//         console.log("invalid input");
//         break;
// }


// Combining cases ...


// let letter = "s"

// switch (letter) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//     case "A":
//     case "E":
//     case "I":
//     case "O":
//     case "U":
//         console.log(letter +" "+ "this is vowel");
//         break;

//     default:
//         console.log(letter +" "+ "this is not vowel");
//         break;
// }


// while loop ...

// let i = 1

// while (i<=10) {
//     console.log(i);
//     i++
// }

// for loop ...

// for (let i = 0; i <= 10; i++) {
//     console.log(i);  
// }

// let array = []
// for (let j = 0; j <= 100; j++) {
//       array.push(j)
// }
// console.log(array);


// for (let i = 0; i <= 10; i++) {
//     console.log(i);  
// }

// let array = []
// for (let j = 0; j <= 100; j++) {
//       array.push(j)
// }
// console.log(array);

// let users = {
//     name : "srithar",
//     age : 22,
//     city : "thiruvannamalai"
// }

// let arr = Object.keys(users)
// console.log(arr);
// let arrays = Object.values(users)
// console.log(arrays);

// for (let s = 0; s < arr.length; s++) {
//     console.log(arr[s] + ":  "+arrays[s]);
    
// }

// // Break ...


// for (let f = 0; f <= 10; f++) {
//     console.log(f);
//     if(j==5){
//         break;
//     }
    
// }


// String Methods in JavaScript ...

// let name = "srithar";
// let fname = "sakthivel"

// //concadinacans
// let c = name+ " "+fname;

// //concat
// c= name.concat('',fname)

// //append

// let name2 = "srithar";
// let fname2 = "sakthivel"

// console.log("append : "+ name2);

// let name = "srithar".length;
// console.log(name);

// c=name.toUpperCase()
// console.log(c);

// c = name.toLowerCase()
// console.log(c);

// c = name.indexOf("r")
// console.log(c);

// c = name.lastIndexOf("r")
// console.log(c);

// c = name.charAt(1)
// console.log(c);

// c = name.substr(0,3)
// console.log(c);

// let tsk = "1233455677"

// c = texts.substring(2,5)
// console.log(c);

// k=stk.slice(2,4);
// console.log(k);


// let a = "my name is srithar"
// app=a.split(" ")
// console.log(app);


// c=a.replace("srithar","sri")
// console.log(c);


// let arr = ["cat","dog","rat"]
// console.log(pets.includes('cat'))


// let j = ' sri '
// j=j.trim()
// console.log("Brfore Trim "+j.length);


// let nu = "5"
//  nu = nu.padStart(3,0)
//  console.log(nu);

// nu = nu.padEnd(3,4)
// console.log(nu);


// let pera = "The purpose of programming is to"+ 

// "find a sequence of instructions that will automate the performance of"+ 

// "a task (which can be as complex as an operating system) on a computer,"+

// " often for solving a given problem."
// console.log(pera);


// let my_name = "srithar"
// let f_name = "sakthivel"
// let city = "thiruvannamalai"

// output = ""
// onabort = "<table border = '1'><tr><th>name</th><td>"+my_name +"</td></tr><tr><th>name</th><td>"+my_name +"</td></tr></table>"

// document.body.innerHTML = onabort;


// Array in JavaScript  ...

// let array = [1,2,3,4,5,6,7]
// // console.log(array);
// console.table(array)
// console.log(array[6]);


// let b = new Array(10,20,30,40,50)
// console.log(b);

// foreach ....Array ... 


// let number = [1,2,3,4,5,6,7,8,9,0]

// number.forEach((value)=>{
//     console.log(value);
// })

// number.forEach((value,index)=>{
//     console.log(value , index);
// })



// map...

// let number = [1,2,3,4,5,6,7,8]

// let marks=number.map((value)=>{
//     return Math.sqrt(value)
// })
// // console.log(mark);
// console.table(marks);

// let mark=number.map((value)=>{
//     return Math.sqrt(value).toFixed(3)
// })
// // console.log(mark);
// console.table(mark);

// slice  array ...

// let number = [1,2,3,4,5,6,7,8]
// console.log(number.slice());
// console.log("slice:"+number.slice());
// console.log("slice:"+number.slice(3));


// splice Method ...

// let a = [1,2,3,4,5,6,7,8,9,0]
// let b = a.splice(3)
// console.log(b);
// console.log(a);

// concat ...

// let a = [1,2,3,4,5,6]
// let b = [6,7,8,9,0,7]
// let c = [2,4,6,8,9,0]

// let d = a.concat(b)
// let e = a.concat(b,c)
// console.log(d);
// console.log(e);

// fill in JavaScript ...

// let a = [1,2,3,4,5,6,7,8,9]

// a.fill(20)
// a.fill(20,4,6)
// console.log(a);


// includes in JavaScript ...

// let a = ["pen","pencil","eraser","box"]
// let result = a.includes("pen")
// console.log(result);

// Join in JavaScript ...

// let a = ["pen","pencil","eraser","box"]
// console.log(a.join());
// console.log(a.join("|"));

// Reverse in JavaScript ...

// let a = [1,2,3,4,5,6,7,8,9]
// console.log(a);
// a.reverse()
// console.log(a);



// Push in JavaScript ...

// let a = [1,2,3,4,5,6,7,8,9]
// console.log(a);
// console.log(a.push(100));

// let name = ["sri"]
// name.push("parasu","deepak","vicky")
// console.log(name);


// Pop in JavaScript...

// let names = ("parasu","deepak","vicky")
// console.log(names);
// console.log(names.Pop());
// console.log(names);


// Shift in JavaScript ...

// let names = ("parasu","deepak","vicky")
// let result = names.shift() 
// console.log(names);
// console.log(result);

// unshift in JavaScript ...


// let names = ("parasu","deepak","vicky")
// console.log(names);
// let cout = names.unshift("sri")
// console.log(cout); 


// indexOf() in JavaScript ...

// let names = ("parasu","deepak","vicky")
// let a = names.indexOf("a",4)
// console.log(a);


// let names = ("parasu","deepak","vicky")
// let a = names.lastIndexOf("a",4)
// console.log(a);

// Every & Some in JavaScript ...

// let a = [1,2,3,4,5,6,7,8]

// let result = a.every((valie)=>{
//     return valie %2 ==0
// })
// console.log(result);


// Primitive and Reference Data Types ...

// let name = "srithar";
// console.log(typeof name);
// let age = 22;
// console.log(typeof age);
// let a = false;
// console.log(typeof a);
// let b;     
// console.log(typeof b);             
// let c = Symbol();
// console.log(typeof c);

// let array=[10,20,30];
// let array2=array;
// console.log(array);
// console.log(array2);
// array.push(100);
// console.log(array);
// console.log(array2);

// Multiple ways to clone an array in JavaScript ...

// let array = [1, 2, 3];
// let array1 = [array];
// console.log(array1); 

// let array2 = array.slice();
// console.log(array2);

// let array3 = [].concat(array);
// console.log(array3);


// let array4 = Array.from(array);
// console.log(array4);


// let array5 = JSON.parse(JSON.stringify(array));
// console.log(array5);


// Const array in JavaScript ...

// const name=["srithar","deepak","parasu"];
// name.push("malli");
// console.log(name);

// Creating Objects in JavaScript ...


// let list = {
//     name: "srithar",
//     age: 22,
//     city: "thiruvannamalai"
// };
// console.log(list);

// let name = new Object();
// name.name = "sri";
// name.age = 22;
// name.city = "thiruvannamalai"
// console.log(name);

// let a = {
//     hello: function() {
//     console.log(`hii ${this.name}`);
//         }
//     };
//     const person = Object.create(a)
//     name.name = "sri";
//     name.age = 22;
//     name.city = "thiruvannamalai"
//     console.log(name);
//     let sub = new Object();


// Dot Notation and Bracket Notation in JavaScript ....

// const list = {
//     name: "srithar",
//     age: 22,
//     city: "thiruvannamalai"
// };

// console.log(list.name);
// list.name = "sri";
// console.log(list.name);

// console.log(list["age"]); 
// list["age"] = 23;
// console.log(list["age"]);


// Iterating Through JavaScript Objects ...

// const list = {
//     name: "srithar",
//     age: 22,
//     city: "thiruvannamalai"
// };

// for (let keys in list) {
//     console.log(`${keys}: ${list[keys]}`);
// }

// const names = {
//     name: "srithar",
//     age: 22,
//     city: "thiruvannamalai"
// };

// const values = Object.values(names);
// values.forEach(value => {
//     console.log(value);
// })


// const person = {
//     name: "srithar",
//     age: 22,
//     city: "thiruvannamalai"
// };

// const a = Object.entries(person);
// for (let i = 0; i<a.length; i++) {
//     console.log(a[i][0] + ": " + a[i][1]);
// }


// Objects inside Arrays in JavaScript ...

// const names = [
//     { name: 'srithar', age: 22, email: 'sri@gmail.com' },
//     { name: 'deepak', age: 22, email: 'deepu@gmail.com' },
//     { name: 'parasu', age: 22, email: 'paeasu@gmail.com' }
// ];
// console.log(names);
// for (const namelist of names) {
//     console.log(namelist.name);
// }

// Function in JavaScript...

// function sum() {
//     let total = 0;
//     for (let i = 0; i<arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }

// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3, 4, 5));

// let createCounter = () => {
//     let count = 0;
//     return () => {
//       count++;
//       return count;
//     };
//   };
//   let counter = createCounter();
//   console.log(counter());
//   console.log(counter());

//   function addition(a,b=5)
// {
//     return a+b;
// }
// console.log(addition(20,10));
// console.log(addition(20));


// function outerFunction() {
//     let outerVariable = 'I am a variable in the outer function';
  
//     function innerFunction() {
//       let innerVariable = 'I am a variable in the inner function';
//       console.log(outerVariable);
//       console.log(innerVariable);
//     }
  
//   innerFunction();
//   }
//   outerFunction();

// Block Scope & Function Scope in JavaScript ...

// function myFunction() {
//     if(true){
//       let name="srithar";
//       console.log(name);
//     }
//     console.log(name);
//   }
//   myFunction()

