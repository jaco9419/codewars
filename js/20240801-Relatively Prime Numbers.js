function relativelyPrime(n, arr) {
  const nFactors = getFactors(n)
  return arr.filter(number => isRelativelyPrime(number, nFactors))
}

function getFactors(number) {
  const factors = []
  const max = Math.sqrt(number)
  
  for (let i = 1; i <= max; i++) {
    if (number % i === 0) {
      factors.push(i)
      if (i !== number / i) {
        factors.push(number / i)
      }
    }
  }
  
  return factors
}

function isRelativelyPrime(number, nFactors) {
  const numberFactors = getFactors(number)
  return !numberFactors.some(factor => factor !== 1 && nFactors.includes(factor))
}

/*
Two numbers are relatively prime if their greatest common factor is 1; in other words: if they cannot be divided by any other common numbers than 1.

13, 16, 9, 5, and 119 are all relatively prime because they share no common factors, except for 1. To see this, I will show their factorizations:

 13: 13
 16: 2 * 2 * 2 * 2
  9: 3 * 3
  5: 5
119: 17 * 7
Complete the function that takes 2 arguments: a number (n), and a list of numbers (arr). The function should return a list of all the numbers in arr that are relatively prime to n. All numbers in will be positive integers.

Examples
relatively_prime(8, [1, 2, 3, 4, 5, 6, 7])
>> [1, 3, 5, 7]

relatively_prime(15, [72, 27, 32, 61, 77, 11, 40])
>> [32, 61, 77, 11]

relatively_prime(210, [15, 100, 2222222, 6, 4, 12369, 99])
>> []

I liked this clever solution using recursiveness:

  let gcd=(a,b)=>b===0?a:gcd(b,a%b)
  let relativelyPrime=(n,l)=>l.filter(i=>gcd(n,i)===1)
*/
