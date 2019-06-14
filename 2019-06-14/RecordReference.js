(function(){
  var u_record_2 = new GlideRecord("u_record_2");
  u_record_2.newRecord();  //use to initialize the record
  u_record_2.short_description = current.getValue("short_description");
  u_record_2.u_record_1 = current.getValue("sys_id"); //reference fields are set by sys_id
  u_record_2.u_resource_assign = current.getValue("u_resource_assign");  //do not need getDisplayValue()

  var sysID = u_record_2.insert();

  current.u_record_2_id = sysID;
  current.update();  //not using mySysID so no point setting it

  gs.addInfoMessage("Record " + u_record_2.number + " created");  //missing " after 'created'
  action.setRedirectURL(u_record_2);
  action.setReturnURL(current);

})();