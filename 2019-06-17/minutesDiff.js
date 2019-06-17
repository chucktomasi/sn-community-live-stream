/*
 * determine if the start/end date are >= X min apart
 *
 * @param startDate - GlideDateTime
 * @param endDate - GlideDateTime
 * @param minutes - integer
 * @return boolean - true dates are >= X min apart
 */
function minutesDiff(startDate, endDate, minutes) {

    var startDateStr = startDate.getDisplayValue();
    var endDateStr   = endDate.getDisplayValue();

    var seconds = gs.dateDiff(startDateStr, endDateStr, true);

    var myMinutes = parseInt(seconds, 10) / 60;

    if (myMinutes >= minutes) {
        return true;
    }

    return false;
}
////////////////////////////
// Test the date function
/*
var s = new GlideDateTime('2019-06-17 06:00:00');
var e = new GlideDateTime('2019-06-17 06:02:00');

var answer = minutesDiff(s, e, 1);
gs.info(s.getDisplayValue() + ' ' + e.getDisplayValue() + ' answer=' + answer);
*/