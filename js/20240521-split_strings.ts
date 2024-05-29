function solution(str){
  str += str.length % 2 !== 0 ? '_' : ''
  return str.match(/.{1,2}/g) ?? []
}

/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

I am trwying to learn more regex with these. Here is a solution I also liked:

function solution(s){
   return (s+"_").match(/.{2}/g)||[]
}
*/
