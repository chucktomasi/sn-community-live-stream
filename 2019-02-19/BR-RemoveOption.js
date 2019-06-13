(function executeRule(current, previous /*null when async*/) {

  var displayCancel = true;

  var groupName = current.assignment_group.getDisplayValue();
  var priority = current.getValue('priority');

  if (priority == 1 || priority == 2) {
     displayCancel = false;
     if (groupName == "GROUP1" || groupName == "GROUP2") {
         displayCancel = true;
     }
  }

  // Pass this information to the client script
  g_scratchpad.displayCancel = displayCancel;

})(current, previous);