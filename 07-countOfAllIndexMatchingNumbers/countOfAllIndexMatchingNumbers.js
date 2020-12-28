function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  var totalCount=0;
  for(var cursor=0;cursor<nums.length;cursor++){
    if(cursor==nums[cursor]){
      totalCount++;
    }
  }
  return totalCount;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
