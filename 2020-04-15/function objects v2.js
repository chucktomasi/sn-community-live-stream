/* 
 * displayAnswer - display a string and integer
 *
 * @param name - string to display
 * @param age - integer of name
 * @return - none
 *
 */
function displayAnswer(name, age) {

    // First do some error checking to ensure good data
    if (!name) {
        gs.error('No name specified');
    } else if (!age) {
        gs.error('No age specified');
    } else {
        gs.info('hello ' + name + ' age=' + age);
    }
}

/**************** MAIN *************/

// Note that integer is not passed here
// to demonstrate 'undefined'.
// Correct it and test.
displayAnswer('Chuck');