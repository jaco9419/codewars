function parseInt(string) {
  if (baseNumbers[string] !== undefined) return baseNumbers[string]
  
  const validatedString = string.toLowerCase().replaceAll('-', ' ').replaceAll(' and', '')
  const splitByThousands = validatedString.split('thousand').map(x => x.trim())
  const stringNumber = validatedString.includes('thousand')
    ? `${fillWithZeroes(calculatedHundreds(splitByThousands[0]))}${fillWithZeroes(calculatedHundreds(splitByThousands[1]))}`
    : `${fillWithZeroes(calculatedHundreds(splitByThousands[0]))}`
  
  return Number(stringNumber)
}
  
function fillWithZeroes(number) {
  return number < 1 ? `000` : number < 10 ? `00${number}` : number < 100 ? `0${number}` : `${number}`
}

function calculatedHundreds(string) {
  if (!string) return 0
  const splitByHundreds = string.split('hundred').map(x => x.trim())
  return string.includes('hundred')
    ? baseNumbers[splitByHundreds[0]] * 100 + calculateTensAndUnits(splitByHundreds[1])
    : calculateTensAndUnits(splitByHundreds[0])
}

function calculateTensAndUnits(string) {
  if (!string) return 0
  const numberStrings = string.split(' ')
  const numbers = numberStrings.map(numberString => baseNumbers[numberString])
  return numbers.reduce((acc, curr) => acc + curr, 0)
}

const baseNumbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
  hundred: 100,
  'one million': 1_000_000
}

/*
In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

Examples:

"one" => 1
"twenty" => 20
"two hundred forty-six" => 246
"seven hundred eighty-three thousand nine hundred and nineteen" => 783919
Additional Notes:

The minimum number is "zero" (inclusively)
The maximum number, which must be supported is 1 million (inclusively)
The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
All tested numbers are valid, you don't need to validate them

This was a cool solution:

var words = {
  "zero":0, "one":1, "two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9, 
  "ten":10, "eleven":11, "twelve":12, "thirteen":13, "fourteen":14, "fifteen":15, "sixteen":16, 
  "seventeen":17, "eighteen":18, "nineteen":19, "twenty":20, "thirty":30, "forty":40, "fifty":50, 
  "sixty":60, "seventy":70, "eighty":80, "ninety":90
};
var mult = { "hundred":100, "thousand":1000, "million": 1000000 };
function parseInt(str) {
  return str.split(/ |-/).reduce(function(value, word) {
    if (words[word]) value += words[word];
    if (mult[word]) value += mult[word] * (value % mult[word]) - (value % mult[word]);
    return value;
  },0);
}
*/
