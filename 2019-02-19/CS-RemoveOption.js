function onLoad() {
   
   // Note: g_scratchpad is set by a display business rule
   if (!g_scratchpad.displayCancel) {
     g_form.removeOption('state', 4); // adjust to your state value for canceled
   }
}