function countOfAllBooleans(arr) {
  // Insert code here;
  var totalCount=0;
  for(var cursor=0;cursor<arr.length;cursor++)
  {
    if(arr[cursor]==true){
      totalCount++;
    }
    if(arr[cursor]==false){
      totalCount++;
    }
    return totalCount;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
