// if number = 5 or 6 return 20
// if number = 1 return 0
// if number = 15 return 40
// else return number *2

// (test) ? true do... : false do... ;

// (number === 5 || number === 6 ) ? 20 : number*2 ;

// (number === 5 || number === 6 ) ? 20 : (number === 1) ? 0 : number * 2 ;

// (number === 5 || number === 6 ) ? 20 : (number === 1) ? 0 : (number === 15) ?  40 : number * 2 ;

function mytest (number) {
	return (number === 5 || number === 6 ) ? 20 : (number === 1) ? 0 : (number === 15) ?  40 : number * 2 ;
}

console.log( mytest(5) );
console.log( mytest(6) );
console.log( mytest(1) );
console.log( mytest(15) );
console.log( mytest(7) );