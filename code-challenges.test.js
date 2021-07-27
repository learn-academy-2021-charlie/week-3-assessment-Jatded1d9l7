// // ASSESSMENT 3: Coding practical questions with Jest
// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process
// // Add appropriate dependencies to the repository:
// // $ yarn add jest
// // Use test driven development to complete the following questions
// // Run the file with the following command:
// // $ yarn jest
// // Reminder: The test will call your function

//____________________________________________________________________

// 1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.
//
//
// a) Create a test with expect statements for each of the variables provided.
//
// b) Create the function that makes the test pass.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Example input 15

// Test Driven Development TDD_______________________________________
describe("functionReturnArray", () => {
  test("returns a string the length of number in fibbonacci sequence", () => {
    expect(fib(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fib(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])

  })
})
// TDD_________________________________________________________________

// // --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.
//

//Pseudo Code
// I am creating a function () => {}
// I will call this function fibbonacci () => {}
// To do this I must declare it with Const fibonacci () => {}
// the function fibbanaci must take in a number as a parameter (number)
// the number must be greater than 2
// the function must return an array
// the array must be the length containing the numbers of the fibbanaci sequence.

//creating the function that takes in a number
const fib = (num) => {
// declared an array has the first two values of the fib seq
let array = [1, 1]
// for loop that begins at index 2, goes until the number is hit and increments one at a time
for (let i = 2; i < num; i++ ){
  // pushing the values of the fib seq by using [i-2] + [i-1]
  array.push(array[i-2] + array[i-1])
// returning the final array
} return array
}
console.log(fib(27))











// const functionReturnArray = (num) =>{
//     let fiboArray = [1,1]
//     let a, b;
//     for(let i=2;i < num; i++) {
//         a = fibboArray[i-1];
//         b = fibboArray[i-2];
//         fibboArray.push(a + b);
//     }
//     return fibboArray
// }

// let fibonacci = (number) => {
//   if (number === 1)
//   {
//     return [0, 1]
//   }
//   else
//   {
//     var s = fibonacci(number - 1);
//     s.push(s[s.length - 1] + s[s.length - 2])
//     return s
//   }
// }
//
//  // console.log(fibonacci(6))
//
// var moreThan2 = (number) => {
//   if (number > 2) {
//     return (number)
//   }
//   else {
//     return ("number is not greater than 2")
//   }
// }
//
// // console.log(moreThan2(6))
//
// let fibonnaciSeq = (number) => {
//   if (number === true) {
//   return fibbanaci(number)
//   }
// }
//
// console.log(fibonnaciSeq(6))


// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//___________________________________________________________________

//Pseudo Code
// Function that takes in an array
// function = onlyOdds
// sorted from least to greatest

// // --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// // // a) Create a test with expect statements for each of the variables provided.

// // b) Create the function that makes the test pass.


// var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
// var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// // TDD_______________________________________
// describe ("onlyOdds", () => {
//   test("returns a newArray of only odds", () => {
//     expect(onlyOdds(fullArr1)).toEqual([-9, 7, 9, 199])
//     expect(onlyOdds(fullArr2)).toEqual([-823, 7, 23])
//   })
// })
// TDD_______________________________________

//pseudo code
// function = onlyOdds
// parameter = array
// returns a new array of only odd numbers sorted from lease to greatest.
// logic
// filter out non numeric values
//


// onlyOdds = ([]) => {
//   let oddNums = []
//   for (let i = 0; i < array.length; i++){
//     if (array[i] % 2 !== 0) {
//       oddNums.push(array[i]);
//     }
//   }
//   oddNums = oddNums.sort((a,b)); => a-b)
//   array.concat(oddNums)
//   array = array.sort((a,b) => a, b)
//   return array
// }
// console.log (onlyOdds([2, 4, 6 , 8 , 10, 11, 13])

// let onlyNums = (arr) => {
//   return arr.filter(arr => typeof arr === "number")
// }
// console.log(onlyNums(fullArr1))
// ^^First Step^^ //

// var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
//
// let onlyNums = (arr) => {
//   arr.filter(arr => typeof arr === "number")
// }

// console.log(onlyNums(fullArr1))

// the following Did not work
// let onlyNums = (val) => {
//   if (typeof(val) === 'number'){
//     return val
//   }
// }
// ^^ did not work


//
//
//







// // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// // a) Create a test with expect statements for each of the variables provided.


// //___________________________________________________________________
// describe("accSum", () => {
//   test("reterns an array of accumulating sum", () => {
//     expect(accSum()).toEqual([2, 6, 51, 60])
//   })
// })
//
// describe("accSum", () => {
//   test("reterns an array of accumulating sum", () => {
//     expect(accSum()).toEqual([0, 7, -1, 11])
//   })
// })
// //___________________________________________________________________


// // // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
//
// var numbersToAdd1 = [2, 4, 45, 9]
// // // Excpected output: [2, 6, 51, 60]
// //
// var numbersToAdd2 = [0, 7, -8, 12]
// // // Expected output: [0, 7, -1, 11]
// //
// // var numbersToAdd3 = []
// // // Expected output: []
//
// describe("hello", () => {
//   test("returns a string that says hi", () => {
//     expect(numbersToAdd1()).toEqual([2, 6, 51, 60])
//     expect(numbersToAdd2()).toEqual([0, 7, -1, 11])
//     expect(numbersToAdd3()).toEqual([])
//   })
// })


// const onlyOdds = (array) =>{
//     let sortedArr = array.filter(function (item) {
//     if (typeof item === `number` && item%2)
//     return item
//     });
//     return sortedArr.sort((a, b) => a-b)
// }
// console.log(onlyOdds(fullArr1))

//Pseudo Code
// function input = array
// Function output = array of accumulating sum


//
// const cumulativeSum = (sum => value => sum += value)(0);
//
// console.log(numbersToAdd1.map(cumulativeSum));
// console.log(numbersToAdd2.map(cumulativeSum));
// console.log(numbersToAdd3.map(cumulativeSum));



//
// // b) Create the function that makes the test pass.
