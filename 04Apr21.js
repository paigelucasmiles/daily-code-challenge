// LeetCode 1678. Goal Parser Interpretation

// You own a Goal Parser that can interpret a string command. 
// The command consists of an alphabet of "G", "()" and/or "(al)" in some order. 
// The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". 
// The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

// Example 1:
// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

// Example 2:
// Input: command = "G()()()()(al)"
// Output: "Gooooal"

// Example 3:
// Input: command = "(al)G(al)()()G"
// Output: "alGalooG"

// Constraints:
// 1 <= command.length <= 100
// command consists of "G", "()", and/or "(al)" in some order.

var interpret = function(command) {
    let string = ''
    let i = 0;
    
    while(i < command.length) {
        if(command[i] === "G") {
            string = string + "G";
            i++
        } else if(command[i] === "(" && command[i + 1] === ")") {
            string = string + "o"
            i = i + 2
        } else if(command[i] === "(" && command[i + 1] === "a") {
            string = string + "al"
            i = i + 4
        }
    }
    return string
};

// LeetCode 1720. Decode XORed Array

// There is a hidden integer array arr that consists of n non-negative integers.
// It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. 
// For example, if arr = [1,0,2,1], then encoded = [1,2,3].
// You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].
// Return the original array arr. It can be proved that the answer exists and is unique.


// Example 1:
// Input: encoded = [1,2,3], first = 1
// Output: [1,0,2,1]
// Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]

// Example 2:
// Input: encoded = [6,2,7,3], first = 4
// Output: [4,2,0,7,4]

// Constraints:
// 2 <= n <= 104
// encoded.length == n - 1
// 0 <= encoded[i] <= 105
// 0 <= first <= 105

var decode = function(encoded, first) {
    let array = [first];
    
    for(let i = 0; i < encoded.length + 1; i++) {
        if(i === 0) {
            array[i] = first;
        } else {
            array[i] = encoded[i - 1] ^ array[i - 1]
        }
    }
    return array
};

// LeetCode: 1389. Create Target Array in the Given Order

// Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.

// Example 1:
// Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
// Output: [0,4,1,3,2]
// Explanation:
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]

// Example 2:
// Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
// Output: [0,1,2,3,4]
// Explanation:
// nums       index     target
// 1            0        [1]
// 2            1        [1,2]
// 3            2        [1,2,3]
// 4            3        [1,2,3,4]
// 0            0        [0,1,2,3,4]

// Example 3:
// Input: nums = [1], index = [0]
// Output: [1]

// Constraints:
// 1 <= nums.length, index.length <= 100
// nums.length == index.length
// 0 <= nums[i] <= 100
// 0 <= index[i] <= i

var createTargetArray = function(nums, index) {
    let targetArray = [];
    
    for(let i = 0; i < index.length; i++) {
        targetArray.splice(index[i], 0, nums[i])
    }
    return targetArray;
};


// LeetCode: 1603. Design Parking System

// Design a parking system for a parking lot. 
// The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

// Implement the ParkingSystem class:
// - ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. 
//     The number of slots for each parking space are given as part of the constructor.

// - bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. 
//     carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. 
//     A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.

// Example 1:
// Input
// ["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
// [[1, 1, 0], [1], [2], [3], [1]]
// Output
// [null, true, true, false, false]

// Explanation
// ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
// parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
// parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
// parkingSystem.addCar(3); // return false because there is no available slot for a small car
// parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.

// Constraints:
// 0 <= big, medium, small <= 1000
// carType is 1, 2, or 3
// At most 1000 calls will be made to addCar

var ParkingSystem = function(big, medium, small) {
    this.count = [big, medium, small]
};

ParkingSystem.prototype.addCar = function(carType) {
    return this.count[carType] ? this.count[carType]-- : 0
};


// LeetCode: 1221. Split a String in Balanced Strings

// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it in the maximum amount of balanced strings.

// Return the maximum amount of split balanced strings.

// Example 1:
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

// Example 2:
// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

// Example 3:
// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".

// Example 4:
// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'

// Constraints:
// 1 <= s.length <= 1000
// s[i] is either 'L' or 'R'.
// s is a balanced string.

var balancedStringSplit = function(s) {
    
    let balance = 0;
    let answer = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "L") {
            balance++
        } else {
            balance--
        } if (balance === 0) {
            answer++
        }
    }
    return answer;
};

