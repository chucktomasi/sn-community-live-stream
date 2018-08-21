Standard disclaimer: The following code is untested, requires review and potential modifications.

(function () {  

    var rec = new GlideRecord('YOUR_TASK_TABLE');  
    rec.addQuery('parent_milestone_field', current.getValue('parent_milestone_field')); 
    rec.addQuery('active', true);
    rec.setLimit(1);
    rec.query();  
  
    if (rec.next()) {  
		return;
    }
	
    var milestone = new GlideRecord('YOUR_TASK_TABLE');
    if (milestone.get(current.getValue('parent_milestone_field'))) {
        milestone.state = 'COMPLETED_VALUE_HERE';
        milestone.update();
    }  
     
})();  