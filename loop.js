for (let i = 0; i <= 10; i++) {
    console.log(i);  
}

let array = []
for (let j = 0; j <= 100; j++) {
      array.push(j)
}
console.log(array);

let users = {
    name : "srithar",
    age : 22,
    city : "thiruvannamalai"
}

let arr = Object.keys(users)
console.log(arr);
let arrays = Object.values(users)
console.log(arrays);

for (let s = 0; s < arr.length; s++) {
    console.log(arr[s] + ":  "+arrays[s]);
    
}

// Break ...


for (let f = 0; f <= 10; f++) {
    console.log(f);
    if(j==5){
        break;
    }
    
}