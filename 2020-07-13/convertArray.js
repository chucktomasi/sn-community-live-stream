// Example of ArrayUtil().convertArray()

var table = new global.TableUtils("task");
var ext = table.getTableExtensions();
var au = new global.ArrayUtil();
var conv = au.convertArray(ext);
var index = au.indexOf(conv, 'incident');
gs.info(index);

// Test if the variable is an array before/after convertArray
var ext = new TableUtils('task').getTableExtensions();
gs.info(ext instanceof Array);
var ext2 = new ArrayUtil().convertArray(ext);
gs.info(ext2 instanceof Array);
var ext3 = j2js(ext);
gs.info(ext3 instanceof Array);