function longestPalindrome (string) {
  var palindromes = [];
  
  for (var i=0; i<string.length; i++) {
    for (var j=i+1; j<string.length+1; j++) {
      var sub = string.substring(i,j);
      // If substring is a palindrome, push into palindromes array.
      if (sub === sub.split('').reverse().join('')) {
        palindromes.push(sub);
      }
    }
  }
  // Return only the longest palindrome.
  return palindromes.reduce(function (a, b) { return a.length > b.length ? a : b; });
}
