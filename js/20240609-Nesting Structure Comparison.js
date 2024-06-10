Array.prototype.sameStructureAs = function (other) {
  let areSameStructure
  
  for (let i = 0; i < this.length; i++) {
    if (areSameStructure === false) break
    
    if (isArray(this[i]) && isArray(other[i]) && this[i].length === other[i].length) {
      areSameStructure = this[i].length === 0 || this[i].sameStructureAs(other[i])
    } else if (!isArray(this[i]) && !isArray(other[i])) {
      areSameStructure = true
    } else {
      areSameStructure = false
    }
  }
  
  return areSameStructure
};

/*
Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     
For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.

I liked this solution:

Array.prototype.sameStructureAs = function (other) {
  return isArray(other) && this.length == other.length && this.every(function (a, i) {
    var b = other[i];
    return isArray(a) ? a.sameStructureAs(b) : isArray(a) == isArray(b);
  });
};
*/
