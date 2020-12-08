/*

Matrix Transpose

In linear algebra, the transpose of a matrix is an operator which flips a matrix over its diagonal; that is, it switches the row and column indices of the matrix A by producing another matrix, often denoted by A^T.

Create a function that takes a 2D array (matrix A) and returns a 2D array (matrix A^T).

Examples
makeTranspose([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) ➞ [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
]

makeTranspose([
  [1, 2],
  [3, 4],
  [5, 6]
]) ➞ [
  [1, 3, 5],
  [2, 4, 6]
]

makeTranspose([
  ["a", "b"]
]) ➞ [
  ["a"],
  ["b"]
]


*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function makeTranspose(arr) {
    return arr[0].map((x, i) => arr.map(x => x[i]));
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function makeTranspose(arr) {
    return Array(arr[0].length).fill(0).map((a, i) => arr.map((b, j) => arr[j][i]));
}



//#############################################################
//#  SOLUTION 3
//#############################################################


makeTranspose = d => d[0].map((_, iCol) => d.map((row) => row[iCol]))


//#############################################################
//#  SOLUTION 4
//#############################################################


function makeTranspose(arr) {
    let v;
    let arr2 = Array.from(Array(arr[0].length), () => Array(arr.length).fill(0)); //r,c,v
    for (let i = 0; i < arr.length; i++) {
        v = arr[i];
        for (let j = 0; j < v.length; j++)
            arr2[j][i] = v[j];
    }
    return arr2
}