(function executeRule(current, previous /*null when async*/) {

var start = new GlideDateTime(current.work_start).getNumericValue();
var end = new GlideDateTime(current.work_end).getNumericValue();
	
if (start > end) {
  var msg = gs.getMessage('loaner_error_end_before_start');
  gs.addErrorMessage(msg);
  current.work_start.setError(msg);
  current.setAbortAction(true);
}

})(current, previous);