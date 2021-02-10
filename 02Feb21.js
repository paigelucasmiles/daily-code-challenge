// Codewars - 6kyu: Sum or Digits/Digital Root

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. 
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
// The input will be a non-negative integer.

// EXAMPLES
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
    let sum = 0;

    String(n).split('').map(number => sum += +number)

    return sum >= 10 ? digital_root(sum) : sum
}

const number = 493193
digital_root(number)


function persistence(num) {
    
}

// console.log(persistence(999))


// 6kyu: Roman Numerals Decoder

// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. 
// You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately,
// starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC)
// and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). 
// The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example: solution('XXI'); should return 21

// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function solution(roman){
    const decode = {"M":1000, "D":500, "C":100, "L":50, "X":10, "V":5, "I":1}
    const romanArray = roman.split('')

    let total = 0 ;
    let currentRomanNumeral;
    let currentConvertedValue;
    let nextRomanNumeral;
    let nextConvertedValue;

    for (let i = 0; i < romanArray.length; i++) {
        currentRomanNumeral = romanArray[i];
        currentConvertedValue = decode[currentRomanNumeral];

        nextRomanNumeral = romanArray[i+1];
        nextConvertedValue = decode[nextRomanNumeral];

        if (currentConvertedValue < nextConvertedValue) {
            total -= (currentConvertedValue);
        } else {
            total += (currentConvertedValue);
        }
    }
    console.log(total)
}

const roman = "MDCLXVI"

// solution(roman)



// 6kyu: Your order, please

// Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
    const wordsArray = words.split(" ")
    const sortedArray = []

    for (let i = 0; i < wordsArray.length; i++) {
        const letterArray = wordsArray[i].split("")
        for (let j = 0; j < letterArray.length; j++) {
            console.log(letterArray[j].includes(1))
        }
    }
    console.log(sortedArray)
}

order("is2 Thi1s T4est 3a")