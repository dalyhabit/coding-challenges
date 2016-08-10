function telephoneWords (digitString) {

  var numArray = (digitString).split('');
  var resultArray = [];

  var num2Lets = {
    0: ['0'],
    1: ['1'],
    2: ['A', 'B', 'C'],
    3: ['D', 'E', 'F'],
    4: ['G', 'H', 'I'],
    5: ['J', 'K', 'L'],
    6: ['M', 'N', 'O'],
    7: ['P', 'Q', 'R', 'S'],
    8: ['T', 'U', 'V'],
    9: ['W', 'X', 'Y', 'Z']
  }
  
  for (var i=0; i<num2Lets[numArray[0]].length; i++) {
    for (var j=0; j<num2Lets[numArray[1]].length; j++) {
      for (var k=0; k<num2Lets[numArray[2]].length; k++) {
        for (var l=0; l<num2Lets[numArray[3]].length; l++) {
          var tempString = num2Lets[numArray[0]][i] + 
                           num2Lets[numArray[1]][j] + 
                           num2Lets[numArray[2]][k] + 
                           num2Lets[numArray[3]][l]
          
          resultArray.push(tempString);
        }
      }
    }
  }
  
  return resultArray
}
