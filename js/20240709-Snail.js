snail = function(array) {
  if (array.length === 0 || array[0].length === 0) return []
  
  const snailLength = Math.pow(array.length, 2)
  const snail = []
  let direction = 'right'
  
  recurringFunction(array)
  
  function recurringFunction(array) {
    if (snail.length >= snailLength) return
    
    const arrayCopy = [...array]
    switch(direction) {
        case 'right': {
          snail.push(...arrayCopy[0])
          arrayCopy.shift()
          direction = 'down'
          break
        }
        case 'left': {
          snail.push(...arrayCopy[arrayCopy.length - 1].reverse())
          arrayCopy.pop()
          direction = 'up'
          break
        }
        case 'down': {
          for (let i = 0; i < arrayCopy.length - 1; i++) {
            snail.push(arrayCopy[i].at(-1))
            arrayCopy[i].pop()
          }
          direction = 'left'
          break
        }
        case 'up': {
          for (let i = arrayCopy.length - 1; i > 0; i--) {
            snail.push(arrayCopy[i].at(0))
            arrayCopy[i].shift()
          }
          direction = 'right'
          break
        }
    }
    
    recurringFunction(arrayCopy)
  }
  
  return snail
}

/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

Here's a solution I liked:

snail = function(arr) {
  var result = [];
  var top = 0, bottom = arr.length-1;
  var left = 0, right = arr[0].length-1;
  
  do {
    for (var i = left; i <= right; i++){result.push(arr[top][i])} // top row
    for (var i = top+1; i <= bottom; i++){result.push(arr[i][right])} // right column
    for (var i = right-1; i >= left; i--){result.push(arr[bottom][i])} // bottom row
    for (var i = bottom-1; i > top; i--){result.push(arr[i][left])} // left column
    top++; bottom--; left++; right--;
  } while (top <= bottom);
  
  return result;
}
*/
