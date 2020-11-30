var CourseAjax = Class.create();
CourseAjax.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
	
	getTrackCategories : function() {
		
		var track = this.getParameter('sysparm_track');
		if (track) {
			var list = new Course().getTrackCategories(track);
			
			return JSON.stringify(list, null, 4);
	
		}
		
	},

    type: 'CourseAjax'
});