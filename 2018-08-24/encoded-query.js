// active=true
// active=true^priority=1
var usrID = gs.getUserID();
var q = 'active=true^priority=1^caller_id!=' + usrID + '^ORcaller_id=NULL';
// active=true^priority=1^caller_id!=681ccaf9c0a8016400b98a06818d57c7
var incGr = new GlideRecord('incident');
incGr.addEncodedQuery(q);
incGr.query();
gs.info(incGr.getRowCount());