function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }
	
	var ga = new GlideAjax('CourseAjax');
	ga.addParam('sysparm_name', 'getTrackCategories');
	ga.addParam('sysparm_track', g_form.getValue('track'));
	ga.getXMLAnswer(updateCategory);
	
	function updateCategory(answer) {
		// alert(answer);
		
		var list = JSON.parse(answer);
		g_form.clearOptions('category');
		
		for (var i = 0; i < list.length; i++) {
			var opt = list[i];
			g_form.addOption('category', opt.value, opt.label, opt.sequence);
		}
	}
   
}