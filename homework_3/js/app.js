// Problem 1
// 1. A parameter is a value that a function
//    receives in order to work correctly.
//
//    An argument is what the user inputs into
//    a method to have the method/function work
//    with their specific argument.
// 
// 2. Return will spit out a value within JavaScript
//    that the user can work with in their project whereas
//    console.log prints values to the console in order
//    to more efficiently troubleshoot problems.
//
// 3. Since a function can return a value, it allows your
//    code to be "DRY" because instead of trying to 
//    re-evaluate the same thing multiple times, you can
//    simply wrap the action in a function to call on.
//
// Problem 2

function checkPalindrome(string) {
    // Check first and last index to see if equal
    // If not equal, return false
    let lastIndex = string.length-1;
    const centerIndex = Math.floor(lastIndex/2);
    let str = string.toUpperCase();         // Makes letters the same case
    for (let i = 0; i<=centerIndex; i++){
        if (str.charAt(i) == str.charAt(lastIndex-i)){
            if (centerIndex == i){
                return true;
            }
        } else {
            return false;
        }
    }
};

console.log(checkPalindrome('Hello'));      // False
console.log(checkPalindrome("racecar"));    // True
console.log(checkPalindrome("Racecar"));    // True
console.log(checkPalindrome("hello"));      // False
console.log(checkPalindrome("toot"));       // True
console.log(checkPalindrome("Toot"));       // True

// Problem 3
function sumDigits(num){
    let str = num.toString();               // Make to string so we can separate the digits
    let sum = 0;                            // Runnning sum variable
    for (let i=0;i<str.length;i++){         // Iterate through length of number
       sum += parseInt(str.charAt(i));      // Make the char back to int for adding
    };
    return sum;                             // Return running sum
};
console.log(sumDigits(42));

// Problem 4
function calculateSide (sideA, sideB){
    // a^2 + b^2 = c^2, c = sqrt(a^2 + b^2)
    return Math.sqrt(sideA*sideA + sideB*sideB);
}
console.log(calculateSide(8,6));

// Problem 5
function sumArray (arr){
    // Iterate through and add the numbers
    let sum = 0
    for (let i = 0; i<arr.length; i++){
        sum += arr[i];
    };
    return sum;
};
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// Problem 6
function checkPrime (num){
    for (let i = 2; i < Math.sqrt(num); i++){
        if (num % i == 0) {
            return false;
        }
    }
    return true;
};

function printPrimes (num){
    for (let i = 0; i <= num; i++){
        if (checkPrime(i)){
            console.log(i);
        };
    };
};
printPrimes(97);

// Hungry For More
// Problem 2
function insertDash (num) {
    let arr = num.toString().split("");
    for (let i=0;i<arr.length;i++){
        if (arr[i]%2 && arr[i+1]%2){
            // insert dash at i+1
            arr.splice(i+1,0,'-');
            // since we added another char, we want to increment the index once more
            i += 1;
        };
    };
    return arr.join('');
};
console.log(insertDash(454793));

// Problem 3, already did this earlier. See problem 2.

// Problem 4, same as problem 2, just clean up without spaces.
function checkPalindrome(string) {
    // Check first and last index to see if equal
    // If not equal, return false
    // Clean input of spaces first
    let string2 = string.replace(/\s/g, '');
    let lastIndex = string2.length-1;
    const centerIndex = Math.floor(lastIndex/2);
    let str = string2.toUpperCase();         // Makes letters the same case
    for (let i = 0; i<=centerIndex; i++){
        if (str.charAt(i) == str.charAt(lastIndex-i)){
            if (centerIndex == i){
                return true;
            }
        } else {
            return false;
        }
    }
};
console.log(checkPalindrome('Hello'));      // False
console.log(checkPalindrome("racecar"));    // True
console.log(checkPalindrome("Racecar"));    // True
console.log(checkPalindrome("hello"));      // False
console.log(checkPalindrome("toot"));       // True
console.log(checkPalindrome("Toot"));       // True
console.log(checkPalindrome("Race Car"));   // True

// Problem 5
// Problem 6

