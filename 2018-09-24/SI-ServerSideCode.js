var ServerSideCode = Class.create();

ITEM_TABLE = 'x_66238_cls_item';

ServerSideCode.prototype = {
    initialize: function() {
    },
	
	getRecordSysID : function(number) {
		
		var itemGr = new GlideRecord(ITEM_TABLE);
		
		if (itemGr.get('number', number)) {
			return itemGr.getUniqueValue();
		}
		
		return;
		
	},

    type: 'ServerSideCode'
};