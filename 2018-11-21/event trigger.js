//Build record object on asset table
var gr = new GlideRecord('alm_asset');
//Append the querry to generate the view record based on condition
gr.addQuery('u_send_record_to_mail', true);
gr.query();

//If there is at least one record, we fire the event
if(gr.hasNext()){
	gs.eventQueue("Asset.retired.ccchange", null, '', '');
	
	while (gr.next()) {
				
		//we reset the flag in order to avoid unneeded resend
		gr.u_send_record_to_mail = false;
		gr.update();
		
	}
}