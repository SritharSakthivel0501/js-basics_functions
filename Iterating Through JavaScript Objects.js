const list = {
    name: "srithar",
    age: 22,
    city: "thiruvannamalai"
};

for (let keys in list) {
    console.log(`${keys}: ${list[keys]}`);
}

const names = {
    name: "srithar",
    age: 22,
    city: "thiruvannamalai"
};

const values = Object.values(names);
values.forEach(value => {
    console.log(value);
})


const person = {
    name: "srithar",
    age: 22,
    city: "thiruvannamalai"
};

const a = Object.entries(person);
for (let i = 0; i<a.length; i++) {
    console.log(a[i][0] + ": " + a[i][1]);
}