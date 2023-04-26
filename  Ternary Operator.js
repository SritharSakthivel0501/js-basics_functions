
let age = 10

let result = age>18?"eligible":"not eligible"

console.log(result);



///////////


function parsan(name) {
    let result = name?name:"no name"
    console.log(result);
}
parsan("srithar")

let man = {name:"srithar",age:"23"}

function parsan(man) {
    let result = man.name?man.name:"no name"
    return result
}
console.log(parsan(man));





///////////////



let avg = 87

let grede = avg>90? "A gread":avg>80? "B gread":"C gread"

console.log(grede);