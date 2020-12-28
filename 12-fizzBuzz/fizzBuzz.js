function fizzBuzz(start, end) {
  // Insert code here;
  var resultArr=[];
  for(var num=start;num<=end;num++){
    if(num%15==0){
	    resultArr.push("FizzBuzz");
    }
    else if(num%3==0){
	    resultArr.push("Fizz");
    }
    else if(num%5==0){
	    resultArr.push("Buzz");
    }
    else{
	    resultArr.push(i);
    }
  }
  return resultArr;
}

// Do not edit this line;
module.exports = fizzBuzz;
