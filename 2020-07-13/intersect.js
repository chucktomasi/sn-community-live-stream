// Example of ArrayUtil().intersect()

var a1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var a2 = ['c', 'h', 'u', 'c', 'k'];
var au = new global.ArrayUtil();

gs.info(au.intersect(a1, a2));