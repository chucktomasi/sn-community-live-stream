// Go through all active programs...
var prgGr = new GlideRecord(Constants.PROGRAM_TABLE);
prgGr.addQuery('active', true);
prgGr.orderBy('order');
prgGr.query();

while (prgGr.next()) {

    var programCount = 0;

    // For each program found, find related active/available courses

    var courseGr = new GlideRecord(Constants.COURSE_TABLE);
    courseGr.addQuery('active', true);
    courseGr.addQuery('program', prgGr.getUniqueValue());
    courseGr.addQuery('state', 'available');
    courseGr.query();

    while (courseGr.next()) {

        // Now count how many students are in each course

        var ga = new GlideAggregate(Constants.ATTENDEE_M2M);
        ga.addQuery('course', courseGr.getUniqueValue());
        ga.addAggregate('COUNT');
        ga.query();

        if (ga.next()) {
            var courseCount = parseInt(ga.getAggregate('COUNT'), 10);
            programCount += courseCount;
            gs.info('Program=' + prgGr.getDisplayValue() +
                ' (' + programCount +
                ') course=' + courseGr.getDisplayValue() +
                ' (' + courseCount + ')'); 
        }
    }

    // prgGr.setValue('student_count', programCount);
    // prgGr.update();
}
