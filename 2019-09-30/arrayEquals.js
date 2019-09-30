var prev = "US,GB,JP";
var curr = "GB,US,JA";

var list1 = ['Chuck', 'Kreg', 'Dave'];
var list2 = ['Kreg', 'Dave', 'Chuck'];

gs.info('are these two csv equal? ' + csvEqual(prev, curr));
gs.info('are these two lists equal? ' + arrayEquals(list1, list2));

function csvEqual(s1, s2) {

    var a1 = s1.split(',');
    var a2 = s2.split(',')

    return arrayEquals(a1, a2);
    
}

function arrayEquals(a1, a2) {

    if (a1.length != a2.length) {
        return false;
    }
    
    return (a1.sort().join(',') == a2.sort().join(','));
}