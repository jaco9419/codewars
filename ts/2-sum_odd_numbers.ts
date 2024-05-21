export function rowSumOddNumbers(n: number): number {
  const triangle:number[][] = [[1,2]]
  
  for (let i = 1; i < n; i++) {
    const lastTriangleItem = triangle[triangle.length-1] ?? []
    const lastTriangleItemNumber = lastTriangleItem[lastTriangleItem.length-1]

    triangle.push(
      Array.from({length: lastTriangleItem.length + 2}, (value, index) => lastTriangleItemNumber + 1 + index)
    )
  }
  
  return triangle[triangle.length-1]
    .filter(value => value % 2 !== 0)
    .reduce((acc, curr) => acc + curr, 0)
}

/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

Here's a more clever solution based on the idea of 'the nth row starts with the (n(n-1) + 1)th odd number and contains n odd numbers':

export function rowSumOddNumbers(n: number) {
  return Math.pow(n, 3)
}
*/
