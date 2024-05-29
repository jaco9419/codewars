var recoverSecret = function(triplets) {
  let letters = [...new Set([].concat(...triplets))]
  
  let madeChanges = true
  while (madeChanges) {
    madeChanges = false
    triplets.forEach(triplet => {
      
      const tryPlaceBeforeElement = (from, to) => {
        if (letters.indexOf(triplet[from]) < letters.indexOf(triplet[to])) {
          letters.splice(letters.indexOf(triplet[from]), 0, letters.splice(letters.indexOf(triplet[to]), 1)[0])
          madeChanges = true
        }
      }
      
      tryPlaceBeforeElement(2, 1)
      tryPlaceBeforeElement(1, 0)
      tryPlaceBeforeElement(2, 0)
    })
  }
  
  return letters.join('')
}

/*
There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs more than once in the secret string.

You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.
*/
