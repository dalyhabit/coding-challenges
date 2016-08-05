function firstNonRepeatedCharacter (string) {
  // Loop through the string
  for (var i=0; i<string.length; i++) {
    var current = string[i];
    // Check to see if the first instance of the current element
    // is the same as the last instance of the current element
    if (string.indexOf(current) === string.lastIndexOf(current)) {
      // If it's the same, it isn't repeated; return the current element
      return current;
    }
  }
  return 'sorry';
}