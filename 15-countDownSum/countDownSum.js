class MySolution {
  countDownSum(num) {
    // Insert code here;
    var sum=0;
    if(num>1){
      sum=sum+num;
      num--;
    }
    else{
      sum=sum+1;
    }
    return sum;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
