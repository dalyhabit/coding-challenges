var bubbleSort = function(array) {
  var swap = true;

  while(swap) {
    swap = false;
  for (i=0; i<array.length - 1; i++){
      if (array[i] > array[i+1]) {
        var temporaryNumber = array[i];
        array[i] = array[i+1];
        array[i+1] = temporaryNumber;
        swap = true;
      }
    }
  }
  return array;
}
