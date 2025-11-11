// 1 arrays

// 1.1

let array1 = [1, 2, 3];
console.log(array1);
console.log(array1.length);

// 1.2

let array2 = ["Hello", "World"];
array2.push("!");
console.log(array2);
console.log(array2.length);

// 1.3

let array3 = ["Hello", "World", "imSanta"];
array3.pop();
console.log(array3);
console.log(array3.length);

// 1.4

let array4 = []
array4.push(0)
console.log(array4);
array4.push(1)
console.log(array4);
console.log(array4.length);

// array with for 2.1

const for1: number[] = [10, 20, 30, 40, 50];
for (let i = 0; i < for1.length; i++)
    console.log(for1[i]);


//  array with for 2.2

const for2: number[] = [10, 20, 30, 40, 50];
let sum: number = 0;
for (let i = 0; i < for2.length; i++)
    sum += for2[i];
console.log(sum);




// array with for 2.3
const numbers: number[] = [2, 4, 6];
const doubled: number[] = [];
for (let i = 0; i < numbers.length; i++)
    doubled.push(numbers[i] * 2);

console.log(doubled);

//array with for 2.4
const nums: number[] = [1, 2, 3];
for (let i = nums.length - 1; i >= 0; i--)
    console.log(nums[i]);

// interview code 3.1

const massive1: number[] = [10, 20, 30, 40, 50, 100, -100, 10000, 5000000, 1, 3, 4];
let maxNumber = 1;
for (let currentNumber of massive1)
    if (currentNumber > maxNumber) maxNumber = currentNumber;

console.log(maxNumber);

// interview code 3.2
const massive2: number[] = [10, 20, 30, 40, 50, 100, -100, 10000, 5000000, 1, 3, 4];
let minNumber = 1;
for (let currentNumber of massive2)
    if (currentNumber < minNumber) minNumber = currentNumber;
console.log(minNumber);


// interview code 3.3
const massive3: number[] = [10, 20, 30, 40, 50, 100, -100, 10000, 5000000, 1, 3, 4];
let evenCount = 0;
for (let num of numbers)
    if (num % 2 === 0) evenCount++;
console.log("let me info how much numbers", evenCount);

// interview code 3.4

const massive4: number[] = [10, -5, 0, 20, -30, 15, -1];
const positiveNumbers: number[] = []

for (let num of massive4)
    if (num > 0) positiveNumbers.push(num)

console.log(positiveNumbers)










