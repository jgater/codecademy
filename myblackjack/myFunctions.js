// shuffle an array function
    exports.shuffle = function(array) {
        var tmp, i, j;
        for ( i = array.length - 1 ; i ; i-- ) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = array[j];
            array[j] = array[i];
            array[i] = tmp;
        }
    return array;
    };

// Our deal function will return the last card(s) from the deck
	exports.deal = function(cardsToDeal,hand,deck) {
    	if (!hand) {hand = [];}
		for (i=0;i<cardsToDeal;i++) {
        	hand.push(deck.pop());
    	}       
    	return hand;
	};
	
// Score the hand
	exports.score = function(hand) {
	    var totalScore=0;
	    for (var mycard in hand) {
	        totalScore += hand[mycard].value;
	    }
	    return totalScore;
	};
	