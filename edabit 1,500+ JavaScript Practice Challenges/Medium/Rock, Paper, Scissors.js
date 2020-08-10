/*


Rock, Paper, Scissors
Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2) as arguments and returns a string stating the winner in a game of Rock, Paper, Scissors.

Each argument will contain a single string: "Rock", "Paper", or "Scissors". Return the winner according to the following rules:

Rock beats Scissors
Scissors beats Paper
Paper beats Rock
If p1 wins, return the string "The winner is p1". If p2 wins, return the string "The winner is p2" and if p1 and p2 are the same, return "It's a draw".

Examples
rps("Rock", "Paper") ➞ "The winner is p2"

rps("Scissors", "Paper") ➞ "The winner is p1"

rps("Paper", "Paper") ➞ "It's a draw"
Notes
All inputs will be valid strings.


*/






/*  Solution 1   */


const rps = (a, b) =>
    a == 'Rock' && b == 'Paper' ? `The winner is p2` :
    a == 'Scissors' && b == 'Rock' ? `The winner is p2` :
    a == 'Scissors' && b == 'Paper' ? `The winner is p1` :
    a == 'Paper' && b == 'Rock' ? `The winner is p1` : `It's a draw`;


/*  Solution 2   */

const rps = (p1, p2) => {
    dic = { Rock: 'Scissors', Scissors: 'Paper', Paper: 'Rock' };
    return p1 == p2 ? "It's a draw" : `The winner is p${2-(dic[p1]==p2)}`;
};



/*  Solution 3   */


function rps(p1, p2) {
    let obj = {
        Rock: 'Scissors',
        Scissors: 'Paper',
        Paper: 'Rock'
    }
    return p1 === p2 ? "It's a draw" : obj[p1] === p2 ? "The winner is p1" : "The winner is p2";
}



/*  Solution 4   */


function rps(p1, p2) {
    let w = {
        Rock: "Scissors",
        Scissors: "Paper",
        Paper: "Rock"
    }
    if (p1 === p2) return "It's a draw"
    return `The winner is ${w[p1] === p2 ? 'p1' : 'p2'}`
}