    
// create necessary classes

    // the ArrayOfCards class holds the methods to access an array of cards (a superclass)
    // the DeckOfCards class contains our playing deck of standard playing cards, it is a subclass of ArrayOfCards
    // the Hand class contains the cards for a single player, it is a subclass of ArrayOfCards
    // the PlayerHands class contains Hand objects

    
    function ArrayOfCards() {
        var acard;
        this.addCard = function (acard) { this.cards.push(acard); };
        this.removeCard = function () { return this.cards.pop(); };
        this.showAllCards = function () { return this.cards; };
        this.empty = function () { this.cards = []; };
    }

    
    function DeckOfCards() {
        var tmp, i, j, k, n;
        this.cards=[];
        this.shuffle = function () {
            for ( i = this.cards.length - 1 ; i ; i-- ) {
                j = Math.floor(Math.random() * (i + 1));
                tmp = this.cards[j];
                this.cards[j] = this.cards[i];
                this.cards[i] = tmp;
            }
        };
        this.addDeck = function (n) {
            for ( k=0; k<n ; k++ ) {    
                for ( j=1; j<=4; j++ ) {
                    for ( i=1; i<=13; i++ ) { this.addCard( new Card(j,i) ); }
                }
            }
        };
    }
    DeckOfCards.prototype = new ArrayOfCards();

    function Hand(name) {
        this.cards = [];
        this.playerName = name;
        this.getScore = function () {
            var score = 0;
            for (acard in this.cards) { score+=this.cards[acard].getValue(); }      
            return score;
        };

        this.showHand = function() {
            console.log( this.playerName + "'s cards are:" );
            for (acard in this.cards) {
                console.log(' - The ' + this.cards[acard].getNumber()  + ' of ' + this.cards[acard].getSuit() + ', worth ' + this.cards[acard].getValue() + ' points');
            }   
            console.log("total score of " + this.playerName + "'s hand is " + this.getScore() + ' points.\n');
        };
    }
    Hand.prototype = new ArrayOfCards();


    function PlayerHands() {
        this.hands = [];
        this.addPlayer = function (name) { this.hands.push( new Hand(name) ) };
    }

    function Card(s,n){
        this.acesHigh = true;
        var suit = s;
        var number = n;
        var allSuits = ["Hearts", "Clubs", "Diamonds", "Spades"];
        this.getSuit = function() { return allSuits[suit-1]; };
        this.getValue = function() {
            return (number > 10) ? 10 : (number === 1) ? ( (this.acesHigh) ? 11 : 1 ) : number;
        };
        this.getNumber = function() {
            switch(number) {
                case 11 :
                    return "Jack";
                case 12 :
                    return "Queen";
                case 13 : 
                    return "King";
                case 1 :
                    return "Ace";
                default :
                    return number;
                }
        };
    }

    
    //
    // Let's prepare the game
    //

    // Create a deck object to play with
    var blackjackDeck = new DeckOfCards();

    // Add a single x52 deck of cards to it
    blackjackDeck.addDeck(1);

    // and shuffle them
    blackjackDeck.shuffle();

    //Let's make it two player 
    var blackjackHands = new PlayerHands ();
    blackjackHands.addPlayer("Dealer");

    // add sanity check for askName
    //var askName = prompt("What's your name?");

    blackjackHands.addPlayer("James");

    //
    // Finished prep, now start playing!
    //

    // deal 2 cards into dealer's hand from the deck 
    //(and if you can follow the levels of object recursion in this step without pen and paper, you're a better person than I)
    blackjackHands.hands[0].addCard( blackjackDeck.removeCard() ); 
    blackjackHands.hands[0].addCard( blackjackDeck.removeCard() ); 

    // deal 2 cards into player 1's hand
    blackjackHands.hands[1].addCard( blackjackDeck.removeCard() ); 
    blackjackHands.hands[1].addCard( blackjackDeck.removeCard() ); 

    // Let's see who got what
    blackjackHands.hands[0].showHand();
    blackjackHands.hands[1].showHand();





