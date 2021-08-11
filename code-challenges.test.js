

// 1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.
     // a) Create a test with expect statements for each of the variables provided.
     // b) Create the function that makes the test pass.

//-------------------- CODE BLOCK START ----------------------// Week-3-assessment-Jatded1d9l7 -Code Challenges- -Question 1-

// describe("fibonacci", () => {
//   test("returns array with accumulating sum", () => {
//           expect(fibonacci(6).toEqual([1, 1, 2, 3, 5, 8]))
//           expect(fibonacci(10).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]))
          
//   })
// })

// const fibonacci = (number) => {
//   let answerArray = [1, 1]
//   for(let i=2; i<number; i++){
//     answerArray.push(answerArray[i - 2] + answerArray[i - 1])
//   }
//   return answerArray
// }

//-------------------- CODE BLOCK END ----------------------// Week-3-assessment-Jatded1d9l7 -Code Challenges- -Question 1-

















// // --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
     // a) Create a test with expect statements for each of the variables provided.
     // b) Create the function that makes the test pass.


//-------------------- CODE BLOCK START ----------------------// Week-3-assessment-Jatded1d9l7 -Code Challenges- -Question 2-

    //  describe("onlyOdds", () => {
    //   test("returns a new array of only odd numbers sorted from least to greatest", () => {
    //     var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    //     // Expected output: [-9, 7, 9, 199]
    //     var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    //     // Expected output: [-823, 7, 23]
    //     expect(onlyOdds(fullArr1)).toEqual([-9, 7, 9, 199])
    //     expect(onlyOdds(fullArr2)).toEqual([-823, 7, 23])
    //   })
    // })

    // const onlyOdds = (array) => {
    //   let filteredArray = array.filter(value => {
    //     return typeof value === "number" && value%2 !== 0
    //   })
    //   return filteredArray.sort((a, b) => a - b)
    // }


//-------------------- CODE BLOCK END ----------------------// Week-3-assessment-Jatded1d9l7 -Code Challenges- -Question 2-






// // // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
     // a) Create a test with expect statements for each of the variables provided.
     // b) Create the function that makes the test pass.

     describe("addNum", () => {
      test("returns an array of the accumulating sum", () => {
        var numbersToAdd1 = [2, 4, 45, 9]
        // Excpected output: [2, 6, 51, 60]
        var numbersToAdd2 = [0, 7, -8, 12]
        // Expected output: [0, 7, -1, 11]
        var numbersToAdd3 = []
        // Expected output: []
        expect(addNum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        // expect(addNum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        // expect(addNum(numbersToAdd3)).toEqual([])
      })
    })
    
    const addNum = (array) => {
      let anchor = 0
      return array.map(value => {
        console.log("anchor:", anchor)
        console.log("value:", value)
        return anchor += value
      })
    }