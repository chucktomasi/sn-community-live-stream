// Concatenate two arrays of objects
var au = new global.ArrayUtil();

var a3 = [
    {"name" : "Chuck", "age": 55},
    {"name" : "Tom", "age" : 54}
];

var a4 = [
    {"name" : "Linda", "age": 35},
    {"name" : "Amit", "age" : 24}
];
gs.info('concat a3, a4: ' + JSON.stringify(au.concat(a3, a4), null, 4));