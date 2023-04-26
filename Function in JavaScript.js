function sum() {
    let total = 0;
    for (let i = 0; i<arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));




let createCounter = () => {
    let count = 0;
    return () => {
      count++;
      return count;
    };
  };
  let counter = createCounter();
  console.log(counter());
  console.log(counter());

  function addition(a,b=5)
{
    return a+b;
}
console.log(addition(20,10));
console.log(addition(20));






function outerFunction() {
    let outerVariable = 'I am a variable in the outer function';
  
    function innerFunction() {
      let innerVariable = 'I am a variable in the inner function';
      console.log(outerVariable);
      console.log(innerVariable);
    }
  
  innerFunction();
  }
  outerFunction();