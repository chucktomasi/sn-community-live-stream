Standard disclaimer: The following code is untested, requires review and potential modifications.

(function () {  

    var rec = new GlideRecord('incident');  
    rec.addQuery('parent', current.sys_id); 
    rec.query();  
  
    while (rec.next()) {  
	rec.state = 3; // Update to proper state value as needed
        // add other fields to copy to rec from current if desired
	rec.update();  
    }  
})();  