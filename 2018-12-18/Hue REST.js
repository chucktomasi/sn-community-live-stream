var REST = Class.create();
// /api/BstA6aBTc-9wjjGN/lights

LIGHT_TABLE = 'x_snc_hue_light';

REST.prototype = {

	initialize: function() {

		this.base_url   = gs.getProperty('x_snc_hue.hub.base_url');
		this.mid_server = gs.getProperty('x_snc_hue.mid.server');
		this.hue_user   = gs.getProperty('x_snc_hue.user');

	},

	sendMessage : function(method, action, payload) {

		var url = this.base_url + '/api/' + this.hue_user + action;
		var safeUrl = this.base_url + '/api/USERID' + action;
		gs.info('>>>DEBUG: ' + url);
		var rm = new sn_ws.RESTMessageV2();
		rm.setEndpoint(url);
		rm.setHttpMethod(method);
		rm.setMIDServer(this.mid_server);
		rm.setRequestBody(payload);
		var response = rm.execute();

		var responseBody = response.getBody();
		var httpStatus = response.getStatusCode();

		gs.info('sendMessage(): ' + safeUrl + ' ' + httpStatus);

		if (httpStatus == "200")
			return responseBody;

		return;
    },
    
    setLightState : function(name, stateBool) {
  
        var obj = {	"on" : stateBool };

		var id = this.getLightID(name);
		if (id)
			this.sendMessage('PUT', "/lights/" + id + "/state", JSON.stringify(obj));

    },

	lightOn : function(name) {

        this.setLightState(name, true);
	},

	lightOff : function(name) {

        this.setLightState(name, false);

	},

	getLightID : function(name) {

		var light = new GlideRecord(LIGHT_TABLE);
		if (light.get('name', name)) {
			return light.getValue('id');
		}

		return;
	},

	updateLightList : function() {

		var list = this.getLightList();
		if (list) {
			this.deleteLightList();
			this.createLightList(list);
		}
	},

	createLightList : function(list) {

		for (var key in list) {
			var name = list[key].name;
			
			gs.info(key + ' name=' + list[key].name);
			var light = new GlideRecord(LIGHT_TABLE);
			light.newRecord();
			light.id = key;
			light.name = name;
			light.insert();
		}

	},

	getLightList : function() {

		var body = this.sendMessage('GET', "/lights", '');

		gs.info('getLights(): ' + body);

		if (body)
			return JSON.parse(body);

		return;

	},

	deleteLightList : function() {

		var delLight = new GlideRecord(LIGHT_TABLE);
		delLight.query();
		delLight.deleteMultiple();

	},

	type: 'REST'
};