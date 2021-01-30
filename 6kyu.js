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

// solution(10)



// 6kyu: Counting Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// function duplicateCount(text){
    
// }

function duplicateCount(text){
    const textArray = text.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    console.log(textArray.length)
}

const text = 'aabb'

// duplicateCount(text)



// 6kyu: Create Phone Number

// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

const createPhoneNumber = (tenNumberArray) => {
    let areaCode = [];
    let secondArray = [];
    let thirdArray = [];
    let i = 0;

    while(i <= 2) {
        areaCode.push(tenNumberArray[i])
        i++
    }
    while(i >= 3 && i <= 5 ) {
        secondArray.push(tenNumberArray[i])
        i++
    }
    while(i >= 5 && i < tenNumberArray.length ) {
        thirdArray.push(tenNumberArray[i])
        i++
    }
    let phoneNumber = ""
    phoneNumber = phoneNumber.concat("(" + areaCode.join("") + ") " + secondArray.join("") + "-" + thirdArray.join(""))
    console.log(phoneNumber)
}

const tenNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

createPhoneNumber(tenNumberArray)

// better solution? 

// function createPhoneNumber(numbers){
//     let format = "(xxx) xxx-xxxx";
    
//     for(var i = 0; i < numbers.length; i++)
//     {
//         format = format.replace('x', numbers[i]);
//     }
    
//     return format;
// }