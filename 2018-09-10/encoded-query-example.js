var q = 'caller_id=' + gs.getUserID() = '^priorityIN1,2^active=true';
var incGr = new GlideRecord('incident');
incGr.addEncodedQuery(q);
incGr.query();

while (incGr.next()) {
    // do something here
}