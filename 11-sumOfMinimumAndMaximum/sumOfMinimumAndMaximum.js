function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var min = nums[0];
  var max = nums[0];
  for(var cursor=0;cursor<nums.length;cursor++){
    if(nums[cursor]>max){
	    max= nums[cursor];
    }
    if(nums[cursor]<min){
	    min= nums[cursor];
    }
  }
  return min+max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
