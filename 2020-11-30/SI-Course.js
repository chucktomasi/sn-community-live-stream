var Course = Class.create();
Course.prototype = {
    initialize: function() {
    },
	
	getTrackCategories : function(track) {
		
		var list = [];
		
		var choiceGr = new GlideRecord('sys_choice');
		choiceGr.addQuery('name', Constants.COURSE_TABLE);
		choiceGr.addQuery('element', 'category');
		choiceGr.addQuery('dependent_value', track);
		choiceGr.addQuery('language', gs.getSession().getLanguage());
		choiceGr.addQuery('inactive', false);
		choiceGr.orderBy('sequence');
		choiceGr.query();
		
		while (choiceGr.next()) {
			var obj = {
				"label" : choiceGr.getValue('label'),
				"value" : choiceGr.getValue('value'),
				"sequence" : choiceGr.getValue('sequence')
			};
			
			list.push(obj);

		}
		
		return list;
	},

    type: 'Course'
};