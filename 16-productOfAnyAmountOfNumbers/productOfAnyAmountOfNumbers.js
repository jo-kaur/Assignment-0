function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  var result=1;
  for(var cursor=0;cursor<args.length;cursor++){
    result=result*args[cursor];
  }
  return result;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
