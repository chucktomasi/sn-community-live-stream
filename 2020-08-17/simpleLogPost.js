(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    var body = request.body.data.user;
	var name = body.name;
	var title = body.title;
	
	gs.info('new employee request: name=' + name + ' title=' + title);

})(request, response);