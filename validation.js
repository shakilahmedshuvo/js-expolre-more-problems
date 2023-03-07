function add(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Please enter a number";
    }
    return num1 + num2;
}

const result = add(12, 45);
console.log(result);

function multiply(num1, num2) {
    return num1 * num2;
}

const output = multiply(12, 45);
console.log(output);
// 
// // function getSum(a, b = 9) { return a + b; } console.log(getSum(2, 7));
// const y = x => x*x; 
// const z = y(5);
// console.log(z);

// const name = 'Hero';
// const greetings = `Welcome Home! ${name}`;

// console.log(greetings); // Welcome Home! Hero
// num1
// num1
// const division= num1, num2 => ;console.log(num1 /num2)
// const numbers=[10,20,30,40,50,60,70 ]
// Math.max(numbers);
// console.log(numbers)