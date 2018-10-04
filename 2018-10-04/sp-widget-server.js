(function() {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */

	if (input) {
		var itemGr = new GlideRecord('x_66238_cls_item');
		itemGr.get('02fb3cfc0f3023007500cbdce1050e46');
		var action = input.op.toString();
		switch (action) {
			case 'open':
				itemGr.setValue('code', 'ready to pick up');
				itemGr.setValue('description', 'come and get it');
				itemGr.setValue('active', true);
				itemGr.update();
				break;
			case 'close':
				itemGr.setValue('code', 'delivered');
				itemGr.setValue('description', 'thank you');
				itemGr.setValue('active', false);
				itemGr.update();
				break;
		}
		
	} else {
		gs.addInfoMessage('no input');
	}
})();