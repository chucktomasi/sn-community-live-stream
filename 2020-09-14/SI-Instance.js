var Instance = Class.create();
Instance.prototype = {
    initialize: function() {
    },
	
	getName : function() {
		
		return gs.getProperty('instance_name');
		
	},
	
	getId : function() {
		
		return gs.getProperty('instance_id');
		
	},
	
	getUrl : function() {
		
		return 'https://' + this.getName() + '.service-now.com';
		
	},
	
	getInfo : function(parm) {
		
		var answer = 'error';
		if (!parm) {
			gs.error('No parm found');
			return answer;
		}
		
		switch (parm) {
			case 'id':
				answer = this.getId();
				break;
			case 'name':
				answer = this.getName();
				break;
			case 'url':
				answer = this.getUrl();
				break;
			default:
				gs.error('Unknown parm');
				answer = 'error';
		}
		
		return answer;
	},

    type: 'Instance'
};