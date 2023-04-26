let number = [1,2,3,4,5,6,7,8]

let marks=number.map((value)=>{
    return Math.sqrt(value)
})
// console.log(mark);
console.table(marks);

let mark=number.map((value)=>{
    return Math.sqrt(value).toFixed(3)
})
// console.log(mark);
console.table(mark);