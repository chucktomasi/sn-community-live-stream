/* 
 * displayAnswer - display properties from object
 *               and return inspection object
 * 
 * @param person - object
 * @return inspection - object (null=error)
 *
 */
function getInspection(person) {

    // Static/default object to return
    // Could also be retrieved from a table, API, or calculated
    var inspection = {
        "testing_center" : "1234 Main Str",
        "inspector" : "Abel Tuter",
        "test_code" : "passenger"
    };

    // Note the lack of 'else' here because it's not needed
    if (!person.address) {
        gs.error('No address specified');

        return; // return null to indicate failure

    }
    
    // Return the inspection

    return inspection;
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
if (!answer) {
    gs.info('Check your data!');
} else {
    gs.info('>>>ANSWER=\n' + JSON.stringify(answer, null, 4));
}