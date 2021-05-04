// 1295. Find Numbers with Even Number of Digits

// Given an array nums of integers, return how many of them contain an even number of digits.

// Example 1:
// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.

// Example 2:
// Input: nums = [555,901,482,1771]
// Output: 1 
// Explanation: 
// Only 1771 contains an even number of digits.

// Constraints:
// 1 <= nums.length <= 500
// 1 <= nums[i] <= 10^5

var findNumbers = function(nums) {
    let count = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i].toString().length % 2 === 0) {
            count++
        }
    }
    return count;
};

// 1816. Truncate Sentence

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. 
// Return s​​​​​​ after truncating it.

// Example 1:
// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how" "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".

// Example 2:
// Input: s = "What is the solution to this problem", k = 4
// Output: "What is the solution"
// Explanation:
// The words in s are ["What", "is" "the", "solution", "to", "this", "problem"].
// The first 4 words are ["What", "is", "the", "solution"].
// Hence, you should return "What is the solution".

// Example 3:
// Input: s = "chopper is not a tanuki", k = 5
// Output: "chopper is not a tanuki"

// Constraints:
// 1 <= s.length <= 500
// k is in the range [1, the number of words in s].
// s consist of only lowercase and uppercase English letters and spaces.
// The words in s are separated by a single space.
// There are no leading or trailing spaces.

var truncateSentence = function(s, k) {
    return s.split(" ").slice(0, k).join(" ")
};