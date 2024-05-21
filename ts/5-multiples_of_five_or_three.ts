export class Challenge {
  static solution(number: number) {
    let sum = 0
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) sum += i
    }
    return sum
  }
}

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)

Here is a solution without having to use a for loop:

export class Challenge {
  static solution(number) {

    const fiveCoFactor = Math.floor((number - 1)/5);
    const threeCoFactor = Math.floor((number - 1)/3);
    const fifteenCoFactor = Math.floor((number - 1)/15);
    
    const fiveSum = (5 * fiveCoFactor * ( fiveCoFactor + 1)) / 2
    const threeSum = (3 * threeCoFactor * ( threeCoFactor + 1)) / 2
    const fifteenSum = (15 * fifteenCoFactor * ( fifteenCoFactor + 1)) / 2
    
    return fiveSum + threeSum - fifteenSum;
}
}
*/
