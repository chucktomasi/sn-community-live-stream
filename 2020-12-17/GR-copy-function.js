var incGr = new GlideRecord('incident');
incGr.query();
incGr.next();

var myNewGr = newShortDescription(incGr);
gs.info('old value=' + incGr.getValue('short_description'));
gs.info('new value=' + myNewGr.getValue('short_description'));

function newShortDescription(someGr /* GlideRecord - passed by reference */) {

    var newGr = someGr;

    newGr.setValue('short_description', 'This is the new description');

    return newGr;

}

