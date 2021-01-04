class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    var midNum=Math.floor(nums.length/2);
    if(nums.length==1 && nums[0]!=target){
      return false;
    }
    if (target == nums[midNum]){
      return true;
    }else if (target < nums[midNum]){
      return this.binarySearch(nums.slice(0, midNum), target);
    }else if (target > nums[midNum]){
      return this.binarySearch(nums.slice(midNum), target);
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
