function sumOfAllOddNumbers(nums) {
  // Insert code here;
  var totalCount=0;
  for(var cursor=0;cursor<nums.length;cursor++){
    if((nums[cursor]%2)!=0){
      totalCount++;
    }
  }
  return totalCount;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
