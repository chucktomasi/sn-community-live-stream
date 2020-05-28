// Faux "current" to test in Scripts - Background
// before putting it in to a Business Rule, UI action, etc.
//
var currentId = 'ed92e8d173d023002728660c4cf6a7bc';
var current = new GlideRecord('incident');
current.get(currentId);

// Now check each rule against the current record
var ruleGr = new GlideRecord('x_66238_cls323_rule');

ruleGr.addQuery('active', true);
ruleGr.addNotNullQuery('condition');
// Don't table field here if you use staticDependent
ruleGr.addQuery('table', current.getTableName());
ruleGr.orderBy('order');
ruleGr.query();

while (ruleGr.next()) {
    gs.info('condition=' + ruleGr.condition);

    // Here's where the comparison checks and determines a match
    var match = GlideFilter.checkRecord(current, ruleGr.condition, true);
    gs.info('typeof match=' + typeof match + ' = ' + match);
	if (match) {
        // Do something important here!
		gs.info('Record ' + current.getDisplayValue() + ' matched rule ' + ruleGr.getDisplayValue());
	}
}
