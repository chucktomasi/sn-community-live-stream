// Get the elements added and removed from an array
// Courtesy of Stewe Lundin

var arrayUtil = new ArrayUtil();
 
var before_change = [1,2,3,4,5];
var after_change  = [2,3,5];
 
gs.print('arrayUtil.diff(before_change,after_change) - ' + arrayUtil.diff(before_change,after_change));
gs.print('arrayUtil.diff(after_change,before_change) - ' + arrayUtil.diff(after_change,before_change));
