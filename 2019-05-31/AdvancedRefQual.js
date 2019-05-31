function getMyState() {
	var userGr = gs.getUser();
	var locGr = userGr.getRefRecord('location');
	var state = locGr.getValue('state');
	
	return 'state=' + state;
}