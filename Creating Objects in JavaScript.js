let list = {
    name: "srithar",
    age: 22,
    city: "thiruvannamalai"
};
console.log(list);

let name = new Object();
name.name = "sri";
name.age = 22;
name.city = "thiruvannamalai"
console.log(name);

let a = {
    hello: function() {
    console.log(`hii ${this.name}`);
        }
    };
    const person = Object.create(a)
    name.name = "sri";
    name.age = 22;
    name.city = "thiruvannamalai"
    console.log(name);
    let sub = new Object();
