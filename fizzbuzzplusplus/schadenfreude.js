var comedy = {
    schadenfreude : function (n) {
		for (i=0;i<n;i++){
			console.log("HaHa!");
		}
	},
	irony : function () {
		alert("You have successfully run this function.");
	},
	slapstick: function (name) {
		return (name === "Murdoch" || name === "Gates" ) ? "Pie!" : ((name === "Hollande") ? "Flour" : "Make Up!" );
	}

};

comedy.schadenfreude(4);
comedy.irony();

