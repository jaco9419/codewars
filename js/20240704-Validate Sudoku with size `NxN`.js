const Sudoku = function(data) 
{
  function validateRowsLengthsAndType(data) {
    return data.every(row => row.length === data[0].length && row.every(number => typeof number === "number"))
  }
  
  function validateSudokuLength(data) {
    return data[0].length === data.length
  }
  
  function validateSudokuUniqueness(data) {
    return validateArrayUniqueness(data)
            && validateArrayUniqueness(getColumns(data))
            && validateArrayUniqueness(getSudokuSquares(data))
  }
  
  function validateArrayUniqueness(data) {    
    return data.every(array => {
      return array.every(number => number > 0 && number <= data.length) && areAllElementsUnique(array)
    })
  }
  
  function areAllElementsUnique(arr) {
    const uniqueElements = new Set(arr);
    return uniqueElements.size === arr.length;
  }
  
  function getColumns(data) {
    const size = getSudokuSize(data)
    const columns = Array.from({ length: size * size }, () => []);
    
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length; j++) {
        columns[i]?.push(data[j][i])
      }
    }
    
    return columns
  }
  
  function getSudokuSize(data) {
    let largestDivisor = data.length - 1
    while (largestDivisor > 0) {
      largestDivisor--
      if (data.length % largestDivisor === 0) break
    }
    
    return largestDivisor
  }
  
  function getSudokuSquares(data) {
    const size = getSudokuSize(data);
    const squares = Array.from({ length: size * size }, () => []);
    
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < size; j++) {
        const chunk = data[i].slice(j * size, j * size + size);
        const squareIndex = Math.floor(i / size) * size + j;
        squares[squareIndex].push(...chunk);
      }
    }
    
    return squares;
  }
  
  return {
    isValid: function() {
      return validateRowsLengthsAndType(data) && validateSudokuLength(data) && validateSudokuUniqueness(data);
    }
  }
}

/*
Given a Sudoku data structure with size NxN, N > 0 and √N == integer, write a method to validate if it has been filled out correctly.

The data structure is a multi-dimensional Array, i.e:

[
  [7,8,4,  1,5,9,  3,2,6],
  [5,3,9,  6,7,2,  8,4,1],
  [6,1,2,  4,3,8,  7,5,9],
  
  [9,2,8,  7,1,5,  4,6,3],
  [3,5,7,  8,4,6,  1,9,2],
  [4,6,1,  9,2,3,  5,8,7],
  
  [8,7,6,  3,9,4,  2,1,5],
  [2,4,3,  5,6,1,  9,7,8],
  [1,9,5,  2,8,7,  6,3,4]
]
Rules for validation

Data structure dimension: NxN where N > 0 and √N == integer
Rows may only contain integers: 1..N (N included)
Columns may only contain integers: 1..N (N included)
'Little squares' (3x3 in example above) may also only contain integers: 1..N (N included)
*/
