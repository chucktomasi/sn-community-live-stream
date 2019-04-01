var testthis = Class.create();
testthis.prototype = {
	initialize: function() {
	},

	printList : function(list) {

        // This doesn't work - this.displayItem is not recognized
        /*
        
        list.forEach(function(item) {
            this.displayItem(item);
        });
        */
        
        // Need to use this
		for (var i = 0; i < list.length; i++) {
			var item = list[i];
			this.displayItem(item);
		}
	},

	displayItem : function(person) {
		gs.info('name=' + person.name + ' computer=' + person.computer);
	},

	type: 'testthis'
};