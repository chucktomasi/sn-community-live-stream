var incGr = new GlideRecord('incident');
incGr.newRecord();
incGr.priority = current.priority;
incGr.short_description = current.short_description;
// Add other fields and values here to suit your needs
incGr.insert();
gs.infoMessage('Incident created');
action.setRedirectURL(incGr);