function countGroupMembers(groupName) {

	var count = -1;
	var ga = new GlideAggregate('sys_user_grmember');
	ga.addAggregate('COUNT');
	ga.addQuery('group.name', groupName);
	ga.query();
	
	if (ga.query()) {
		count = parseInt(ga.getAggregate('COUNT'));
	}
	
	return count;
}