export function order(words:string):string{
  return words
    .split(' ')
    .map((word:string):[number, string] => {
      const match = word.match(/\d+/)
      return [match ? Number(match[0]) : 0, word]})
    .sort((a:[number, string], b:[number, string]) => a[0] - b[0])
    .map(wordDictionary => wordDictionary[1])
    .join(' ')
}

/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/
