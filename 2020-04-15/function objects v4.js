/* 
 * displayAnswer - display properties from object
 *                and return a boolean success/fail
 * 
 * @param person - object
 * @return - boolean
 *
 */
function getInspection(person) {

    // Error checking
    if (!person.name) {
        gs.error('No name specified');

        return false;

    } else if (!person.age) {
        gs.error('No age specified');

        return false;

    } else {
        gs.info('hello ' + person.name + ' age=' + person.age);

        return true;
    }
}

/**************** MAIN *************/
var p = {
    "name" : "Chuck",
    "age" : 26,
    "address" : {
        "city" : "Phoenix",
        "state" : "AZ"
    }
};

var answer = getInspection(p);
if (answer) {
    gs.info('getInspection went well');
}