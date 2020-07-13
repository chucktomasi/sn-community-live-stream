// example of ArrayUtil().indexOf

var a1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
var au = new global.ArrayUtil();

gs.info('Index of c: ' + au.indexOf(a1, 'c'));
gs.info('Index of z: ' + au.indexOf(a1, 'z'));

gs.info('Index of d(2): ' + au.indexOf(a1, 'd', 2));
gs.info('Index of d(6): ' + au.indexOf(a1, 'd', 6));