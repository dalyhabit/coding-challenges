function calculate (inputs) {
  let stack = [];
  let inputArray = inputs.split(' ');
  
  while (inputArray.length) {
    let next = inputArray.shift();
    if (!isNaN(Number(next))) {
      stack.push(Number(next));
    } 
    else {
      let val2 = stack.pop();
      let val1 = stack.pop();
      if (next === '+') {
        stack.push(val1 + val2);
      } 
      else if (next === '-') {
        stack.push(val1 - val2);
      } 
      else if (next === '*') {
        stack.push(val1 * val2);
      } 
      else if (next === '/') {
        stack.push(val1 / val2);
      }
    }
  }
  
  return stack.pop();
}
