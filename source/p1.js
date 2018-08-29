function isPrime(n) {
    if (typeof n == "number") {
	if(n > 0) {
	    var srn = Math.sqrt(n);
	    for (var i = 2 ; i <= srn; i++) 
    		if (n % i == 0)
    			return false;
	    return true;
	}
	else
		  throw new Error("Input value has to be greater than 0");
  }
  else
	    throw new Error("Input value has to be a Number");
}
console.log("es primo" + isPrime(7));