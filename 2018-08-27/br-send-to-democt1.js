// Business rule to trigger the REST message
(function executeRule(current, previous /*null when async*/) {

	new RESTTest().createIncident(current.getValue('short_description'), current.getValue('description'));

})(current, previous);