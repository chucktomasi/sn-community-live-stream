Standard disclaimer: The following code is untested, requires review and potential modifications.

(function () {  

    var rec = new GlideRecord('contract_sla');  
    // Add your query here to restrict
    // the SLA definition records to update
    // rec.addQuery(''); 
    rec.query();  
  
    while (rec.next()) {  
		rec.stop_condition = 'YOUR_QUERY_STRING_HERE';
		rec.update();  
    }  
})();  