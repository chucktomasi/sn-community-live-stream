var CLSREST = Class.create();
CLSREST.prototype = {
	initialize: function() {
	},

	sendIncident : function(rec) {
		try { 
			var r = new sn_ws.RESTMessageV2('x_66238_cls.DemoCT 1 Incident', 'Post incident');
			r.setStringParameterNoEscape('short_description', rec.short_description);
			r.setStringParameterNoEscape('description', rec.description);

			var response = r.execute();
			var responseBody = response.getBody();
			var httpStatus = response.getStatusCode();
		}
		catch(ex) {
			var message = ex.message;
		}
	},

	type: 'CLSREST'
};