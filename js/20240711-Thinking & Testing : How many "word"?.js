function testit(s) {
  const target = 'word'
  return s
    .toLowerCase()
    .split('')
    .reduce((acc, curr) => {
      let concatenation = ''
      switch(curr) {
          case 'w':
            concatenation = acc === '' || acc.at(-1) === 'd' ? curr : ''
            break
          case 'o':
          case 'r':
          case 'd':
            concatenation = acc.at(-1) === target[target.indexOf(curr) - 1] ? curr : ''
            break
      }
      return acc + concatenation    
    }, '')
    .match(/word/gi)?.length ?? 0
}

/*
No Story

No Description

Only by Thinking and Testing

Look at the results of the testcases, and guess the code!

Some of the tests:

//How many "word" in these sentence? Use your fingers and toes to count
describe('How many "word"?', () => {
  const {assert} = require('chai')
  
  const doTest = (s, expected) => it(`s = '${s}'`, () => assert.strictEqual(testit(s), expected))
  
  describe('Basic tests', () => {
    doTest("word", 1)
    doTest("hello world", 1)
    doTest("I love codewars.", 0)
    doTest("My cat waiting for a dog.", 1)
    doTest("We often read book, a word hidden in the book.", 2)
    doTest("When you in order to do something by a wrong way, your heart will missed somewhere.", 2)
    doTest("This sentence have one word.", 1)
    doTest("This sentence have two word, not one word.", 2)
    doTest("One word + one word = three word ;-)", 3)
    doTest("Can you find more word for me?", 1)
  })
})
*/
