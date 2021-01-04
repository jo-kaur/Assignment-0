function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var result= new Set();
  for(var i of args){
    for(var j of i){
      if(result.has(j)==false){
        result.add(j);
      }
    }
  }
  return result;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
