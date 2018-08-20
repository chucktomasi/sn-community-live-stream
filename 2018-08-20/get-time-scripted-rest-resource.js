// Simple scripted REST API resource
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

	var answer = {};
    var gdt = new GlideDateTime();
	
	gs.info('SRAPI: time: user=' + gs.getUserID());
	answer.year = gdt.getYearLocalTime();
	answer.month = gdt.getMonthLocalTime();
	answer.day = gdt.getDayOfMonthLocalTime();
	answer.day_of_week = gdt.getDayOfWeekLocalTime();
	var gt = new GlideTime();
	gt = gdt.getTime();
	answer.hour = gt.getHourOfDayLocalTime();
	answer.minute = gt.getMinutesLocalTime();
	answer.second = gt.getSeconds();
	 	
	response.setBody(answer);
	

})(request, response);