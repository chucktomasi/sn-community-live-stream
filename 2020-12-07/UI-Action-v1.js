// UI action v1 - attempt 1: Call a global-only API
// Note: The error is in the system log
//
var currentU = new global.GlideRecordUtil();
var list = currentU.getFields(current);
var count = list.length;
gs.addInfoMessage('There are ' + count + ' fields on this table');
action.setRedirectURL(current);