// Script include defined in global
// available to all scopes
// and calls global-only APIs
//
var CLSUtils = {
	flushMessages : flushMessages,
	getFields     : getFields
};

function flushMessages() {
	
	gs.flushmessages();

}

function getFields(someGr) {
	
	var someGrU = new global.GlideRecordUtil();
	var list = someGrU.getFields(someGr);
	
	return list;

}