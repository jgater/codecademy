var Wibble = {
  
  Wobble: function(a, b) {
    if(a===b) 
        //if the variables are equal return 0
        return 0;
    else {
        //decrement the larger of the 2 values
        if (a>b) {
            a--;
        } else {
            b--;
        }
        //call this function again with the decremented values
        //once they are equal the functions will return up the stack
        //adding 1 to the return value for each recursion
        return Wibble.Wobble(a,b)+1;
    }
  },
  Wob: function(a,b) {
    return (a===b) ? 0 : (a>b) ? a-b : b-a ;
  }
    
};

console.log(Wibble.Wob(7,4));


