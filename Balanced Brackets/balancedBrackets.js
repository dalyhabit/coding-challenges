function isBalanced (str) {
  var storage = [];
  var result = true;
  var openBrackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  var closeBrackets = {
    '}': '{',
    ']': '[',
    ')': '('
  };
  
  for (var i=0; i<str.length; i++) {
    if ( openBrackets[str[i]] || closeBrackets[str[i]] ) { tester(str[i]) }
  }
  
  if ( storage.length > 0 ) { result = false }
  
  return result;
  
  function tester (char) {
    if ( openBrackets[char] ) { storage.push(char) }
    else {
      if (storage[storage.length-1] === closeBrackets[char]) { return storage.pop() }
      else { result = false }
    }
  }
}
