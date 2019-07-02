var pGr = new GlideRecord('x_66238_cls528_person');
pGr.query();

if (pGr.next()) {
    gs.eventQueue('x_66238_cls528.run_script', pGr, 'parm1', 'parm2');
} else {
    gs.error('Could not read a record, try again!');
}
