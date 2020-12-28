function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  var totalCount=0;
  for(var cursor=0;cursor<nums.length;cursor++){
    if(nums[cursor]>=start && nums[cursor]<=end){
      totalCount++;
    }
  }
  return totalCount;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
