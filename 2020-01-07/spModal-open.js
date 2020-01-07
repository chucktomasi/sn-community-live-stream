		c.agree = 'unknown';
		var h = '<h4>Apple likes people to agree to lots of stuff</h4>'
		var m = 'Your use of Apple software or hardware products is based on the software license and other terms and conditions in effect for the product at the time of purchase. Your agreement to these terms is required to install or use the product. '
		spModal.open({
			title: 'Do you agree?',
			message: h + m,
			buttons: [
				{label:'✘ ${No}', cancel: true},
				{label:'✔ ${Yes}', primary: true}
			]
		}).then(function() {
			c.agree = 'yes';
			console.log('Confirmed = ' + c.agree);
		}, function() {
			c.agree = 'no';
			console.log('Confirmed = ' + c.agree);

		});