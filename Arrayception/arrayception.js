function arrayception (array) {
  /*
    Approach:stringifies the array and parses it.
    Increments counter for each [ and decrements for each ]
    Keeps track of the largest value of the counter
    
    Edge cases:
    If there is a nested array, it will increment a "pending" counter
    This counter is not added to the current counter until it is 
    confirmed that there is a non-array value inside of it.
  */
  
  var letters = JSON.stringify(array).split(""),
    maxDepth = 0, 
    curDepth = 0,
    pending = 0

  letters.forEach(function(cur,ind,col){
    var next = col[ind+1]
    var prev = col[ind-1]
    
    // If we are entering a new array that could count
    if(cur === "[" && next !== "]") {
      next === "["
        ? pending++
        : curDepth++
    } 
    
    // If we are leaving an array that could count
    else if(cur === "]" && prev !== "[") {
      pending = 0
      curDepth--
    } 
    
    // If we found a non-Array
    else if (cur !== "[" && cur !== "]" && cur !== ","){
      curDepth += pending
      pending = 0
    }

    if(curDepth > maxDepth)
      maxDepth = curDepth
  })