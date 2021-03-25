// 5kyu: Extract the domain name from a URL
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 
// For example:
// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// my solution

function domainName(url){
    if (url.includes("www.")) {
        const droppedStart = url.split("www.")[1]
        return nextFunction(droppedStart)

    } else if (url.includes("http://") || url.includes("https://")) {
        const droppedStart = url.split("//")[1]
        return nextFunction(droppedStart)
    } else {
        const droppedStart = url
        return nextFunction(droppedStart)
    }
}


function nextFunction (droppedStart) {
    const droppedEnd = droppedStart.slice(0, droppedStart.indexOf("/"))
    const removeLastDot = droppedEnd.slice(0, droppedEnd.lastIndexOf("."))
    if (removeLastDot.includes(".co")) {
        console.log(removeLastDot.split(".co")[0])
    } else {
        console.log(removeLastDot)
    }
}

// better solution 
function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};


const url = "http://google.com"
const url1 = "http://google.co.jp"
const url2= "www.xakep.ru"
const url3 = "https://youtube.com"
const url4 = "2wwfvs07z5elmsa.us"
const url5 = "https://www.roe6dx5txrz61.fr/index.php"
const url6 = "https://foq0za.co.za/warez/"

// domainName(url6)

// 6kyu: Complete Fibonacci Series
// The function 'fibonacci' should return an array of fibonacci numbers. 
// The function takes a number as an argument to decide how many no. of elements to produce. 
// If the argument is less than or equal to 0 then return empty array.

// Example:
// fibonacci(4) // should return  [0,1,1,2]
// fibonacci(-1) // should return []

function fibonacci(n) {
    let array
    if (n <= 0) {
        array = [];
    } else if (n === 1) {
        array = [0];
    } else if (n === 2) {
        array = [0, 1];
    } else {
        array = [0, 1];
        while (n > array.length) {
            array.push(array[array.length - 1] + array[array.length - 2]);
        }
    }
    console.log(array)
}

// fibonacci(6)


// 5kyu: Perimeter of squares in a rectangle
// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. 
// It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

// Hint:
// See Fibonacci sequence

// Ref:
// http://oeis.org/A000045
// The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

// Examples
// perimeter(5)  should return 80
// perimeter(7)  should return 216

function perimeter(n) {
    let array
    if (n <= 0) {
        array = [1];
    } else if (n === 1) {
        array = [1, 1];
    } else if (n === 2) {
        array = [1, 1, 2];
    } else {
        array = [1, 1];
        while (n + 1 > array.length) {
            array.push(array[array.length - 1] + array[array.length - 2]);
        }
    }
    arraySum = array.reduce((accumulator, currentValue) => accumulator + currentValue)
    console.log(arraySum * 4)
}

// perimeter(30)

// 5kyu: Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// example:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
    const newArr = arr.filter(num => num !== 0)
    const numberOfZeros = arr.length - newArr.length

    for(let i = 0; i < numberOfZeros; i++) {
        newArr.push(0)
    }
    console.log(newArr)
}

// moveZeros([false,1,0,1,2,0,1,3,"a"])

// 6kyu: Easy Balance Checking
// You are given a (small) check book as a - sometimes - cluttered (by non-alphanumeric characters) string:

// "1000.00
// 125 Market 125.45
// 126 Hardware 34.95
// 127 Video 7.45
// 128 Book 14.32
// 129 Gasoline 16.10"

// The first line shows the original balance.
// Each other line (when not blank) gives information: check number, category, check amount.

// First you have to clean the lines keeping only letters, digits, dots and spaces.

// Then return a report as a string (underscores show spaces -- don't put them in your solution. 
// They are there so you can see them and how many of them you need to have):

// "Original_Balance:_1000.00
// 125_Market_125.45_Balance_874.55
// 126_Hardware_34.95_Balance_839.60
// 127_Video_7.45_Balance_832.15
// 128_Book_14.32_Balance_817.83
// 129_Gasoline_16.10_Balance_801.73
// Total_expense__198.27
// Average_expense__39.65"

// On each line of the report you have to add the new balance and then in the last two lines the total expense and the average expense. 
// So as not to have a too long result string we don't ask for a properly formatted result.

function balance(book) {
  // your code
  // Please use .toFixed(2) to format numbers
    const bookArray = book.split("\n")
    const regexDigitCharacters = /\d+/
    const balancedBookArray = []

    const originalBalanceAmount = parseInt(bookArray[0].match(regexDigitCharacters)[0]).toFixed(2).toString()
    balancedBookArray.push(`Original Balance: ${originalBalanceAmount}`)

    console.log(bookArray[0].match(regexDigitCharacters))
}

var b1 = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`

// balance(b1)







// 6kyu: Multiplication table

// Your task, is to create NxN multiplication table, of size provided in parameter.
// For example, when given size is 3:
// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
    // make and array size elements long
    let arr = [];
    for(let i = 1; i <= size; i++){
        arr.push(increaseNums(i, size));
    }
    return arr;
}

function increaseNums(numToIncrease, numSize){
    let increasedNumsArr = [];
    let sum = 0;
    for(let i = 0; i < numSize; i++){
        sum += numToIncrease;
        increasedNumsArr.push(sum)
    }

    return increasedNumsArr;
}

// multiplicationTable(3)





// 6kyu: If you can read this...
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:
// If, you can read?

// Output:
// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:
// The set of used punctuation is .!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace


function to_nato(words) {
let table = {
  'A': 'Alfa',
  'B': 'Bravo',
  'C': 'Charlie',
  'D': 'Delta',
  'E': 'Echo',
  'F': 'Foxtrot',
  'G': 'Golf',
  'H': 'Hotel',
  'I': 'India',
  'J': 'Juliett',
  'K': 'Kilo',
  'L': 'Lima',
  'M': 'Mike',
  'N': 'November',
  'O': 'Oscar',
  'P': 'Papa',
  'Q': 'Quebec',
  'R': 'Romeo',
  'S': 'Sierra',
  'T': 'Tango',
  'U': 'Uniform',
  'V': 'Victor',
  'W': 'Whiskey',
  'X': 'Xray',
  'Y': 'Yankee',
  'Z': 'Zulu',
}

    function to_nato(words) {
    return words.split('').filter(c => c !== ' ').map(c => table[c.toUpperCase()] || c).join(' ');
    }

}

to_nato('If, you can read?')


// leetcode 
// 1108. Defanging an IP Address

// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

// Example 1:
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// Example 2:
// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

// Constraints:
// The given address is a valid IPv4 address.

var defangIPaddr = function(address) {
    let addressArray = address.split("")
    for(let i = 0; i < addressArray.length; i++) {
        if(addressArray[i] === '.') {
            addressArray[i] = '[.]'
        }
    }
    console.log(addressArray.join(''))
};

defangIPaddr('1.1.1.1')
