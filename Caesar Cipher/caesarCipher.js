function cipher (alpha, offset, message, command) {
  var bet = alpha+alpha+alpha;
  var arry = message.split('');
  var result = [];
  
  if (command === 'decode') {
    for (var i=0; i<arry.length; i++) {
      if (!bet.includes(arry[i])) {
        result.push(arry[i]);
      }
      else {
        var code = bet.split('').reverse();
        for (var j=0; j<bet.length; j++) {
            console.log(code);
          if (arry[i] !== code[0]) {
            code.shift();
          }
          else {
            j = bet.length;
            result.push(code[offset]);
          }
        }
      }
    }
  }
  
  else if (command === 'encode') {
    for (var k=0; k<arry.length; k++) {
      if (!bet.includes(arry[k])) {
        result.push(arry[k]);
      }
      else {
        var encode = bet.split('');
        for (var l=0; l<bet.length; l++) {
          if (arry[k] !== bet[l]) {
            encode.shift();
          }
          else {
            l = bet.length;
          }
        }
        result.push(encode[offset]);
      }
    }
  }
  
  return result.join('');
}