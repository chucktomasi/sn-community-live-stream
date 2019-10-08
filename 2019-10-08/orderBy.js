function sortedIncidents() {

    var incGr = new GlideRecord('incident');

    incGr.orderBy('state');
    incGr.orderBy('number');
    incGr.query();

    while (incGr.next()) {
        gs.info(incGr.getValue('state') + ' ' + incGr.getValue('number'));
    }
}

sortedIncidents();
