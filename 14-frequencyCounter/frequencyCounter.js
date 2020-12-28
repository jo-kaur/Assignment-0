function frequencyCounter(word) {
  // Insert code here;
  var letterFreq={};
  for(var cursor=0;cursor<word.length;cursor++){
    var letter=word.charAt(cursor);
	  if(dict[letter]){
	    letterFreq[letter]++;
	  }
	  else{
	    letterFreq[letter]=1;
	  }
  }
  return letterFreq;
}

// Do not edit this line;
module.exports = frequencyCounter;
