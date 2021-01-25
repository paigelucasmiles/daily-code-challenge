// 6ky: Multiples of 3 or 5
// Instructions
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// "Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)"

// function solution(number){
//     let numbersToSumArray = []
//     if (number <= 0) {
//         return 0
//     } else {
//         let i = number
//         do {
//         i -= 1
//         if (i % 3 === 0 || i % 5 === 0) {
//             numbersToSumArray.push(i)
//         }
//     }
//     while (i >= 0)
//     }
//     return numbersToSumArray.reduce((accumulator, currentValue) => accumulator + currentValue)
// }

// refactor!

function solution(number){
    let sum = 0
    for(i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum = sum + i
        }
    }
    console.log(sum)
}

solution(10)