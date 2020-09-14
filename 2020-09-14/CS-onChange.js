// onChange client script
// Calls InstanceAjax script include
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }

    var ga = new GlideAjax('InstanceAjax');
    ga.addParam('sysparm_name', 'getInfo');
    ga.addParam('sysparm_fx', 'url');
    ga.getXMLAnswer(getAnswer); // callback: getAnswer

	function getAnswer(answer) {
		g_form.addInfoMessage('url=' + answer);
	}
}
