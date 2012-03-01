//Create an object called FizzBuzzPlus

var FizzBuzzPlus = {
// isFizzBuzzie
// return true if the provided value is
// a multiple of 3 or 5 but not both 3 and 5.
// otherwise it returns false
// arguments: number - integer
// returns: true or false - boolean 
	isFizzBuzzie : function (n) {
		return ((n%3 === 0 || n%5 === 0) && !(n%3 === 0 && n%5 ===0));
	}, 
	//returns the sum of all the numbers below the maximum provided 
	//which are multiples of 3 or 5 but not both
	//arguments: number - maximum value for search
	//returns: number - sum of the numbers below the maximum which are multiples of 3 or 5 but not both
	getFizzBuzzSum : function (n) {
		var sum = 0;
		for (i=1;i<n;i++) {
			if (this.isFizzBuzzie(i)) { sum += i;}
		}
		return sum;
	},
	//getFizzBuzzCount
	//returns the count of all the numbers below the maximum provided 
	//which are multiples of 3 or 5 but not both
	//arguments: number - maximum value for search
	//returns: number - count of the numbers below the maximum whihch are multiples of 3 or 5 but not both	
	getFizzBuzzCount : function (n) {
		var count = 0;
		for (i=1;i<n;i++) {
			if (this.isFizzBuzzie(i)) { count++; }
		}
		return count;
	},
	//getFizzBuzzAverage
	//returns the average(sum/count) of all the numbers below the maximum provided 
	//which are multiples of 3 or 5 but not both
	//arguments: number - maximum value for search
	//returns: number - average(sum/count) of the numbers below the maximum whihch are multiples of 3 or 5 but not both
	getFizzBuzzAverage : function (n) {
		return this.getFizzBuzzSum(n) / this.getFizzBuzzCount(n); 
	} 

};

console.log (FizzBuzzPlus.getFizzBuzzSum(15));
console.log (FizzBuzzPlus.getFizzBuzzCount(15));
console.log (FizzBuzzPlus.getFizzBuzzAverage(15));