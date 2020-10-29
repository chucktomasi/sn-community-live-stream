(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	
	try {
		var inputs = {};
		inputs['first_name'] = request.body.data.first_name; // String 
		inputs['last_name'] = request.body.data.last_name; // String 
		inputs['email'] = request.body.data.email; // Email 
		inputs['phone'] = request.body.data.phone; // String 
		inputs['active'] = request.body.data.active; // True/False 
				
		// Execute Synchronously: Run in foreground. Code snippet has access to outputs.
		var result = sn_fd.FlowAPI.getRunner()
		.subflow('x_66238_cls323.create_or_update_client')
		.inForeground()
		.withInputs(inputs)
		.run();
		var outputs = result.getOutputs();

		// Get Outputs:
		// Note: outputs can only be retrieved when executing synchronously.
		var id = outputs['id']; // String
		var status = outputs['status']; // String
		response.setStatus((status == 'created') ? "201" : "200");
		response.setBody({
			"id" : id,
			"status" : status
		});
		
	} catch (ex) {
		var message = ex.getMessage();
		gs.error(message);
	}
	
})(request, response);