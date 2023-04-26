
const list = {
    name: "srithar",
    age: 22,
    city: "thiruvannamalai"
};

console.log(list.name);
list.name = "sri";
console.log(list.name);

console.log(list["age"]); 
list["age"] = 23;
console.log(list["age"]);
