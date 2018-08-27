var RESTTest = Class.create();
RESTTest.prototype = {
    initialize: function() {
    },

	createIncident : function(short_description, description) {
		try { 
			var r = new sn_ws.RESTMessageV2('x_66238_cls.DemoCT 1 Incident', 'Post incident');
			r.setStringParameterNoEscape('short_description', short_description);
			r.setStringParameterNoEscape('description', description);

			var response = r.execute();
			var responseBody = response.getBody();
			var httpStatus = response.getStatusCode();
			gs.info('httpStatus=' + httpStatus);
		}
		catch(ex) {
			var message = ex.message;
		}
	},

    type: 'RESTTest'
};
