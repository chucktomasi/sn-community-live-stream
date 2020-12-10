// UI action v2
// Call the global API we defined that
// calls the global only API
//
var list = global.CLSUtils.getFields(current);
var count = list.length;
gs.addInfoMessage('There are ' + count + ' fields on this table');
action.setRedirectURL(current);