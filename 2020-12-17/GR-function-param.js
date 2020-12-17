var incGr = new GlideRecord('incident');
incGr.query();
incGr.next();

newShortDescription(incGr);
gs.info(incGr.getValue('short_description'));

function newShortDescription(someGr /* GlideRecord - passed by reference */) {

    someGr.setValue('short_description', 'This is the new description');

    // Note - I'm not returning anything

}

