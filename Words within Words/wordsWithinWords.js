function nestedWordCount (wordList) {
  var lower = wordList.map(function(value) {
    return value.toLowerCase();
  });
  
  var most = 0;
  var result;
  
  for (var i=0; i<lower.length; i++) {
      var curr = lower[i];
      var counter = 0;
      for (var j=1; j<lower.length; j++) {
        if (curr.includes(lower[j])) {
            counter++;
        }
        if (counter > most) {
            most = counter; 
            result = wordList[i];
        }
      }
  }
 
  return result;  
}