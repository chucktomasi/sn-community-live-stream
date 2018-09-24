function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	if (isLoading || newValue === '') {
		return;
	}

	var ga = new GlideAjax('ClientSideCode');  
	ga.addParam('sysparm_name','getRecordID');
	ga.addParam('sysparm_number', g_form.getValue('number'));
	ga.getXML(IDParse);  

	// the callback function for returning the result from the server-side code
	function IDParse(response) {  
		var answer = response.responseXML.documentElement.getAttribute("answer"); 
		alert(answer);
	}

}