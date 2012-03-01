function Card(s,n){
    var suit = s;
	var number = n;
	this.getSuit = function() { return suit; };
	this.getNumber = function() {return number;};
	this.getValue = function() {
		return (number > 10) ? 10 : (number === 1) ? 11 : number;
	};
}

function Hand() {
	var card1 = deal();
	var card2 = deal();
	this.score = function () {
		return card1.getValue() + card2.getValue();
	};
}

// Our deal function will return a random card
function deal() {
		var suit = Math.floor((Math.random()*4) + 1);
		var number = Math.floor((Math.random()*13) + 1);
		return new Card(suit,number);
};
