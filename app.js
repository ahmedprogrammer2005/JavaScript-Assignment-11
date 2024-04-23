// Answer 1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}
console.log(evenNumbers);



// Answer 2
let simple = "Hello";
let reversed = '';
for (let i = 0; i < simple.length; i++) {
    reversed = simple[i] + reversed;
}
console.log(reversed);





// Answer 3
let inputNumber = prompt('Enter your number');
let forPrime = true;
for (let i = 2; i < inputNumber; i++) {
    if (inputNumber % i === 0) {
        forPrime = false;
        break;
    }
}
console.log(forPrime);





// Answer 4
let numbers1 = [10, 20, 30, 40, 50];
let maxElement = numbers1[0];
for (let i = 1; i < numbers1.length; i++) {
    if (numbers1[i] > maxElement) {
        maxElement = numbers1[i];
    }
}
console.log(maxElement);






// // Answer 5





// // Answer 6









// Answer 7
let inputStr1 = prompt('Enter your paragraph');
let count = 0;
for (let i = 0; i < inputStr1.length; i++) {
    if ('aeiouAEIOU'.includes(inputStr1[i])) {
        count++;
    }
}
console.log(count);





// Answer 8
let inputNumber1 = 5;
let factorial = 1;

for (let i = 2; i <= inputNumber1; i++) {
    factorial *= i;
}

console.log(factorial);



// Answer 9
let num2 = "1234567";
let sum = 0;
for (let i = 0; i < num2.length; i++) {
    sum += Number(num2.charAt(i));
}
console.log(sum);





// // Answer 10
let num3 = [1, 2, 3, 4, 5];
let reversedNumbers = [];

for (let i = num3.length; i--;) {
    reversedNumbers.push(num3[i]);
}

console.log(reversedNumbers);

