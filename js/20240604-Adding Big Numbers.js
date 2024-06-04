function add(a, b) {
  let cumulative = 0
  let sum = ''
  
  let [longest, shortest] = a.length > b.length ? [a, b] : [b, a]
  
  const difference = longest.length - shortest.length
  
  shortest = `${'0'.repeat(difference)}${shortest}`

  for (let i = longest.length - 1; i >= 0; i--) {
    const digitSum = `${Number(longest[i]) + Number(shortest[i]) + cumulative}`
    
    const [newCumulative, digitToAdd] = digitSum.length > 1
      ? [Number(digitSum[0]), digitSum[1]]
      : [0, digitSum[0]]
    
    cumulative = newCumulative
    sum = `${digitToAdd}${sum}`
  }
  
  return cumulative > 0 ? `${cumulative}${sum}` : sum;
}

/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/
