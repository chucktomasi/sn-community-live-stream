var defaultGroup = gs.getProperty('x_66238_cls528.default.assignment_group', 'Service Desk');
// do some stuff here
gs.info('defaultGroup=' + defaultGroup);

var defaultFulfiller = gs.getProperty('x_66238_cls528.default.assigned_to', 'Chuck Tomasi');
// do some stuff here
gs.info('defaultGroup=' + defaultFulfiller);

var testMode = gs.getProperty('x_66238_cls528.test_mode') == 'true';
gs.info('test_mode=' + testMode);
if (testMode) {
    gs.info('We are testing!!!');
} else {
    gs.info('Normal operations');
}
