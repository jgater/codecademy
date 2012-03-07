var cashRegisterWithChange = {
    total: 0,
    change: 0,   
    currency: {"£10 note":10, "£5 note":5, "£1 coin":1, "50p coin":0.50, "20p coin":0.20, "10p coin":0.10, "5p coin":0.05, "1p coin":0.01}, 
    setTotalBill: function (amount) {
        this.total = amount;
    },
    getPaid: function (amountPaid) {
        if (this.total > amountPaid) { console.log ("Not enough!"); }
        else {
            this.change = amountPaid - this.total;
            console.log ("Give them:");
            this.makeChange();
        }
    },
    howManyCoins: function (coinName, coinAmount) {
        var coinsSoFar = 0;
        while (this.change > coinAmount) {
                this.change -= coinAmount;
                this.change = this.change.toFixed(2);
                coinsSoFar++;            
        }
        if (coinsSoFar===1) { console.log("a " + coinName); }
        else if (coinsSoFar) { console.log(coinsSoFar + " x " + coinName + "s"); }
    },
    makeChange: function() {
        var index;
        for (index in this.currency) { this.howManyCoins(index,this.currency[index]); }
    }
};    


//calls to check if you get the correct output
cashRegisterWithChange.setTotalBill(100);
cashRegisterWithChange.getPaid(50);
cashRegisterWithChange.getPaid(109.94);