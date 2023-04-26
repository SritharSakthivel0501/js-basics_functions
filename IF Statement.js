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



// Nested If Statement...



let tamil = 98, english = 89, maths = 100
let total = tamil + english + maths
let avg = total / 3

// console.log(avg);
// console.log(total);

if(tamil>=35 && english >= 35 && maths >= 35){
    console.log("result:  pass");
     if(avg >= 90 && avg <= 100){
            console.log("A grede");
        }
        else if(avg >= 80 && avg <= 89){
            console.log("B grede");
        }
        else if(avg >= 70 && avg <= 79){
            console.log("C grede");
        }
        else{
            console.log("D grede");
        }
}
else{
    console.log("result: fail ");
}