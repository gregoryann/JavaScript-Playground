/*



Function Factory
Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

Please check the examples below for a clearer representation of the behavior expected.

Examples
// Calling makePlusFunction(5) returns a new function that takes an input,
// and returns the result when adding 5 to it.

const plusFive = makePlusFunction(5)

plusFive(2) ➞ 7

plusFive(-8) ➞ -3

// Calling makePlusFunction(10) returns a new function that takes an input,
// and returns the result when adding 10 to it.

const plusTen = makePlusFunction(10)

plusTen(0) ➞ 10

plusTen(188) ➞ 198

plusFive(plusTen(0)) ➞ 15
Notes
All inputs will be valid numbers.

*/






/*  Solution 1   */

function makePlusFunction(baseNum) {
    return newFunct = (num) => { return baseNum + num }
}



/*  Solution 2   */

const makePlusFunction = baseNum => num => baseNum + num;

const makePlusFunction = (base) => (num) => base + num;




/*  Solution 3   */


function makePlusFunction(baseNum) {
    return function(x) {
        return baseNum + x;
    };
}




/*  Solution 4   */




function makePlusFunction(baseNum) {
    function plusnum(num) {
        return num + baseNum
    }
    return plusnum
}






function makePlusFunction(baseNum) {
    return newNum => baseNum + newNum
}






function makePlusFunction(baseNum) {
    return (other) => {
        return other + baseNum;
    };
}




function makePlusFunction(baseNum) {
    return (n) => n + baseNum;
}