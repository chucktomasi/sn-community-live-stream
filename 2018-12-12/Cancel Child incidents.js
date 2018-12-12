(function execute(current, previous) {  

    var rec = new GlideRecord('incident');  
    rec.addQuery('parent', current.getValue('sys_id')); 
    rec.query();  
  
    while (rec.next()) {  
		rec.state = 8; // Canceled
		rec.update();  
    }  
})();  