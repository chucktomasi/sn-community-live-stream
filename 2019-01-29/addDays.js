function addDays(numDays) {
	
	var gdt = new GlideDateTime();
	gdt.addDaysLocalTime(numDays);
	
	return gdt;
}