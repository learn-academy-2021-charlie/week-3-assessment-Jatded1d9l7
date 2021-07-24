// // ASSESSMENT 3: Coding practical questions with Jest
//
// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process
//
// // Add appropriate dependencies to the repository:
// // $ yarn add jest
//
// // Use test driven development to complete the following questions
// // Run the file with the following command:
// // $ yarn jest
//
// // Reminder: The test will call your function

//Pseudo Code
// function = fibonacci
// Parameter = number
// Returns = array




// // --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.
//
// // a) Create a test with expect statements for each of the variables provided.

// Test Driven Development TDD_______________________________________
// describe("functionReturnArray", () => {
//   test("returns a string the length of number in fibbonacci sequence", () => {
//     expect(functionReturnArray()).toEqual([1, 1, 2, 3, 5, 8])
//   })
// })
//TDD_________________________________________________________________

//Pseudo Code
// I am creating a function => () {}
// I will call this function fibbonacci => () {}
// To do this I must declare it with Const fibonacci => () {}
// the function fibbanaci must take in a number as a parameter (number)
// the number must be greater than 2
// the function must return an array
// the array must be the length containing the numbers of the fibbanaci sequence.

// How to return an array?
// How to evaluate the fibbonacci sequence?
// Each number is the sum of the two preceding ones.

//
// var myNumber1 = 6
// var myNumber1 = 10
//
// const fibbonacci = (number) {
//   if number > 2
//
// }


// // Example input: 6
// // Expected output: [1, 1, 2, 3, 5, 8]
//
// // Example input: 10
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//
//
//
// // b) Create the function that makes the test pass.

//___________________________________________________________________

//Pseudo Code
// Function that takes in an array
// function = onlyOdds
// sorted from least to greatest

// // --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// // // a) Create a test with expect statements for each of the variables provided.
// describe("onlyOdds", () => {
//   test("returns a newArray of only odds", () => {
//     expect(onlyOdds()).toEqual(-9, 7, 9, 199)
//   })
// })


var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

let onlyNums = (arr) => {
  return arr.filter(arr => typeof arr === "number")
}

console.log(onlyNums(fullArr1))



// the following Did not work
// let onlyNums = (val) => {
//   if (typeof(val) === 'number'){
//     return val
//   }
// }
// ^^ did not work

// // Expected output: [-9, 7, 9, 199]
//
// var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// // Expected output: [-823, 7, 23]
//
//
// // b) Create the function that makes the test pass.
//
//
//
// // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
//
// // a) Create a test with expect statements for each of the variables provided.
//
// var numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]
//
// var numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]
//
// var numbersToAdd3 = []
// // Expected output: []
//
//
//
// // b) Create the function that makes the test pass.
