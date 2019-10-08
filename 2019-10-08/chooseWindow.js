function getPageOfIncidents(start) {
    var count = 5;
    var incGr = new GlideRecord('incident');

    incGr.orderBy('number');
    incGr.chooseWindow(start, start + count);
    incGr.query();
    gs.info(incGr.getRowCount() + ' records found in this list');

    while (incGr.next()) {
        gs.info(incGr.getValue('number'));
    }
}

getPageOfIncidents(5);
