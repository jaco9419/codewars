function encrypt(text, n) {
  return iterateTrhoughText(text, n, getEncryptedText)
}

function decrypt(encryptedText, n) {
  return iterateTrhoughText(encryptedText, n, getDecryptedText)
}

const getEncryptedText = (textCharacters) => [
  ...textCharacters.filter((char, index) => index % 2 !== 0),
  ...textCharacters.filter((char, index) => index % 2 === 0)
]

const getDecryptedText = (textCharacters) => {
  const half = Math.floor(textCharacters.length / 2)
  const pairCharacters = textCharacters.slice(half, textCharacters.length)
  const oddCharacters = textCharacters.slice(0, half)

  return textCharacters.map((char, index) => index % 2 === 0 ? pairCharacters.shift() : oddCharacters.shift())
}

function iterateTrhoughText(text, n, crypticCallback) {
  if (!text) return text
  
  let textCharacters = text.split('')
  
  for (let i = 0; i < n; i++) {
    textCharacters = crypticCallback(textCharacters)
  }
  
  return textCharacters.join('')
}

/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/
