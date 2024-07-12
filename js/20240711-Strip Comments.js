function solution(text, markers) {
  const pattern = new RegExp(`\[ \t]*([${markers.map(marker => '\\' + marker).join('')}].*)?$`, 'gm');
  
  return text.replace(pattern, '').replace(/[ \t]+$/, '');
}

/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

Here's a niec solution without Regex that I liked:

function solution(input, markers) {
  return input.split('\n')
    .map(str => markers.reduce((s, m) => s.split(m)[0], str).trimEnd())
    .join('\n');
}
*/
