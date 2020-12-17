// Import set code snippet to find the task and set the cls task value

	if (source.u_video_id) {
		var taskGr = new GlideRecord('x_66238_videx_task');
		if (taskGr.get('video_id', source.u_video_id)) {
			target.task = taskGr.getUniqueValue();
		}
	}
