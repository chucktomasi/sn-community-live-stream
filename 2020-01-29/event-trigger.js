var personGr = new GlideRecord('x_66238_cls528_person');
personGr.setLimit(1);
personGr.query();
personGr.next();

gs.eventQueue('x_66238_cls528.person_created', personGr, 'parm1', 'parm2');