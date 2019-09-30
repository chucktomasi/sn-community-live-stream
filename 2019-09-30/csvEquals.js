var prev = "US,GB,JP";
var curr = "GB,US,JP";

gs.info('are these two equal? ' + csvEqual(prev, curr));

function csvEqual(s1, s2) {

    return (s1.split(',').sort().join(',') == s2.split(',').sort().join(','));
    
}