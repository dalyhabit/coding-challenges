function insertionSort (array) {
  for(var i = 0; i < array.length; i++) {
    var value = array[i]; 
    for(var j = i-1; array[j]>value; j--) {
      if (j>=0) {
        array[j+1] = array[j];
      }
    }
    array[j+1] = value;
  }
  return array;
}
