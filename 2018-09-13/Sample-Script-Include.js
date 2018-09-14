var Stewe = Class.create();

ITEM_TABLE = 'x_66238_cls_item';

Stewe.prototype = {
    initialize: function() {
		this.name = 'Chuck';
    },
	
	getItem : function() {
		
		var item = new GlideRecord(ITEM_TABLE);
	},

    type: 'Stewe'
};