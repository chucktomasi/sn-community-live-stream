/* 
 * displayAnswer - display properties from object
 *
 * @param person - object
 * @return - none
 *
 */
function displayAnswer(person) {

     // First do some error checking to ensure good data
     if (!person.name) {
        gs.error('No name specified');
    } else if (!person.age) {
        gs.error('No age specified');
    } else {
        gs.info('hello ' + person.name + ' age=' + person.age);
    }
}

/**************** MAIN *************/
var p = {
    "name" : "Chuck",
    "age" : 26,
    "city" : "Phoenix",
};
// Add another property or two
p.state = 'AZ';  // dot notation
p['zip'] = '12345'; // hash/subscript notation

displayAnswer(p);