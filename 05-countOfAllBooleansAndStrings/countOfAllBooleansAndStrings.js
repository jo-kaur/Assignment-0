function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  var totalCount=arr.length;
  for(var cursor=0;cursor<arr.length;cursor++){
    if(typeof arr[cursor]!="boolean" || typeof arr[cursor]!="string"){
      totalCount--;
    }
  }
  return totalCount;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
