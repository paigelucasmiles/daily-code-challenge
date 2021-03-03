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

fibonacci(6)

