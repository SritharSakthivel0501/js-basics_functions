let array = [1, 2, 3];
let array1 = [array];
console.log(array1); 

let array2 = array.slice();
console.log(array2);

let array3 = [].concat(array);
console.log(array3);


let array4 = Array.from(array);
console.log(array4);


let array5 = JSON.parse(JSON.stringify(array));
console.log(array5);