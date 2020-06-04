var LoanerUtil = Class.create();
LoanerUtil.prototype = {
	initialize: function(loanerRec) {
		
		// If this is a GlideRecord, then get the sys_id from it
		if (loanerRec instanceof GlideRecord) {
			this.loanerID = loanerRec.getUniqueValue();
			this.loanerGr = loanerRec;
		} else {
			// Otherwise use the sys_id to get the GlideRecord
			this.loanerGr = new GlideRecord(Constants.REQUEST_TABLE);
			this.loanerGr.get(loanerRec);
			this.loanerID = loanerRec;
		}
	},

	/*********
 	*
 	* isAvailable - check to see if there are no conflicts w/ci
 	*               being available between start and end times
 	*               and CI is "in" (loaner request state=Requested, Closed, Withdrawn)
 	*
 	* @return boolean - true=no conflicts
 	*
 	**********/
	isAvailable : function(ci) {

		var ci_id = ci;
		var work_start = this.loanerGr.getValue('work_start');
		var work_end = this.loanerGr.getValue('work_end');
		var count = 0;
		var lr    = new GlideAggregate(Constants.REQUEST_TABLE);

		// Null CI defaults to "not available"
		if (!ci)
			return false;

		if (ci instanceof GlideRecord)
			ci_id = ci.getUniqueValue();

		var myQuery = 'active=true^';
		myQuery += 'cmdb_ci=' + ci_id + '^';
		myQuery += 'work_start<' + work_end + '^';
		myQuery += 'work_end>' + work_start + '^';
		myQuery += 'NQ';
		myQuery += 'active=true^';
		myQuery += 'cmdb_ci=' + ci_id + '^';
		myQuery += 'work_end<' + gs.daysAgo(0);

		lr.addAggregate('COUNT');
		lr.addEncodedQuery(myQuery);
		lr.query();

		if (lr.next()) {
			count = parseInt(lr.getAggregate('COUNT'), 10);
		}

		return (count == 0);
	},

	/**********
 	*
 	* availableCis - get a list of CIs in a class/depot that are available
 	*
 	* @param class_name - CI class
 	* @param depot_name - Name of the pick up location
 	* @param start - reservation start date
 	* @param end - reservation end date
 	* @return - comma separated list of sys_ids that are available at that time
 	*
 	**********/
	availableCis : function() {

		var ci              = new GlideRecord(Constants.CI_TABLE);
		var class_name      = this.loanerGr.getValue('item_type');
		var depot_name      = this.loanerGr.getValue('depot');
		var availableItems  = [];

		if (Constants.installStatus) {
			ci.addQuery('install_status', 'IN', Constants.INSTALL_STATUS);
		}
		ci.addQuery('x_orb_loaner_is_loaner', true);
		ci.addQuery('sys_class_name', class_name);
		ci.addQuery('x_orb_loaner_depot', depot_name);
		ci.query();

		while (ci.next()) {
			var id = ci.getUniqueValue();

			// Check only available matching items
			if (this.isAvailable(id)) {
				availableItems.push(id);
			}
		}

		return availableItems.join(',');
	},

	// Check which CIs are available for this item type, depot, start/end time
	ciRefQual : function() {

		return 'sys_idIN' + this.availableCis();
	},
	
	type: 'LoanerUtil'
};