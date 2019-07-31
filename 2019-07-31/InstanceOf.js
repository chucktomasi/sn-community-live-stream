var Customer = Class.create();
Customer.prototype = {
	initialize: function(arg) {

		this.validCustomer = false;

		if (arg instanceof GlideRecord) {
			this.customerID = arg.getUniqueValue();
			this.customerGr = arg;
			this.validCustomer = true;
		} else {
			this.customerID = arg;
			this.customerGr = new GlideRecord(Constants.CUSTOMER_TABLE);
			if (this.customerGr.get(this.customerID)) {
				this.validCustomer = true;
			}
		}
	},

	exists : function() {

		return this.validCustomer;

	},

	addCustomer : function(customerObj) {

		var custGr = new GlideRecord(Constants.CUSTOMER_TABLE);

		custGr.newRecord();
		custGr.name  = custObj.name;
		custGr.email = custObj.email;
		custGr.phone = custObj.phone;
		custGr.venue = custObj.venue;

		var id = custGr.insert();

		return id;

	},

	/*
	 * accepts either GlideRecord or object with same basic field structure
	 *
	 */
	updateCustomer : function(customerObj) {

		// If passed an object, get the GlideRecord
		if (!customerObj instanceof GlideRecord) {
			
			var custGr = new GlideRecord(Constants.CUSTOMER_TABLE);

			if (!custGr.get('email', customerObj.email)) {
				return;
			}
		}
		
		custGr.name  = custObj.name;
		custGr.email = custObj.email;
		custGr.phone = custObj.phone;
		custGr.venue = custObj.venue;
		custGr.update();
	
	},
	
	getCustomerByEmail : function(email) {
		
		var custGr = new GlideRecord(Constants.CUSTOMER_TABLE);
		
		// Finish writing this...
	},

	type: 'Customer'
};
