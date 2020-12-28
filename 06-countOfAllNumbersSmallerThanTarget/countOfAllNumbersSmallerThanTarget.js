function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  var totalCount=0;
  for(var cursor=0;cursor<nums.length;cursor++){
    if(nums[cursor]<target){
      totalCount++;
    }
  }
  return totalCount;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
