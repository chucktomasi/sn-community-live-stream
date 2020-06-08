function onSubmit() {
   var jsStartDate = new Date(g_form.getValue('work_start'));
   var jsEndDate   = new Date(g_form.getValue('work_end'));
   var jsToday     = new Date();
   
   if (jsStartDate < jsToday) {
      alert(getMessage('loaner_error_start_before_today'));
	  return false;
   }
   
   if (jsEndDate < jsStartDate) {
      alert(getMessage('loaner_error_end_before_start'));
	  return false;
   }
   return true;   
}