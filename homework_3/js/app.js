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