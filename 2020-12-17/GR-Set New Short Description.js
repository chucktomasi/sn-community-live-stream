var incGr = new GlideRecord('incident');
incGr.query();
incGr.next();

gs.info('function output=' + newShortDescription(incGr));
gs.info('old value=' + incGr.getValue('short_description'));

function newShortDescription(someGr /* GlideRecord - passed by reference */) {

    var newStr  = '';

    newStr = 'NEW STRING: ' + someGr.getValue('short_description');

    return newStr;

}

