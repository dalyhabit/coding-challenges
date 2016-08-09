function fractionConverter (number) {
  function hCF(a,b) {
    if (b === 0) {return a}
    return hCF(b, a%b);
  }

  var decimal = number.toString();
  
  if (!decimal.includes('.')) { return decimal + '/1' }
  
  var numerator = decimal.split(".")[0] + decimal.split(".")[1];
  var denominator = Math.pow(10, decimal.split(".")[1].length);
  
  var highestCommonFactor = hCF(numerator, denominator);
  denominator /= highestCommonFactor;
  numerator /= highestCommonFactor;
  return numerator + '/' + denominator;
}
