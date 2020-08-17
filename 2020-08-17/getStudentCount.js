(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

	var id = request.queryParams.course_id;

	if (!id) {
		response.setStatus(500);
		response.setBody({"msg" : "No ID Specified"});
	} else {

		var obj = {
			"status" : "OK",
			"msg" : "Hello, world!",
			"count" : -1
		};
		var attendeeGa = new GlideAggregate(Constants.ATTENDEE_M2M);
		attendeeGa.addQuery('course', id);
		attendeeGa.addAggregate('COUNT');
		attendeeGa.query();

		if (attendeeGa.next()) {
			obj.count = parseInt(attendeeGa.getAggregate('COUNT'), 10);
		}
		response.setBody(obj);	
	}

})(request, response);