// Get all active rules
var rule = new GlideRecord('x_dmv_rule');
rule.addQuery('active', true);
rule.orderBy('order');
rule.addQuery('table', 'x_dmv_vehicle');
rule.query(); 
gs.info('Update vehicles: ' + rule.getRowCount() + ' rules match');

// For each rule found, find matching records and update
while (rule.next()) {
    var vehicle = new GlideRecord('x_dmv_vehicle');
    vehicle.addEncodedQuery(rule.conditions);
    vehicle.query();
    gs.info('Update vehicles: ' + vehicle.getRowCount() + ' vehicles match');

    while (vehicle.next()) {
        vehicle.applyEncodedQuery(rule.set_values);
        vehicle.update();
    }
}
