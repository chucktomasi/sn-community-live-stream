// Get random incident
var incGr = new GlideRecord('incident');
incGr.query();

if (incGr.next()) {
    gs.info(incGr.getValue('sys_updated_on'));
    // When using getDisplayValue() to retrieve, also use getDisplayValue() to setDisplayValue
    // Same thing for getValue(). Keep them them same to avoid offset issues
    incGr.due_date.setDisplayValue(incGr.sys_updated_on.getDisplayValue());
}