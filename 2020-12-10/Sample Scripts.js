// Example 1 - simple gs.eventQueue() call
// Remember to register the event first
gs.eventQueue('x_66238_cls323.course_change', null, '', '');

// Example 2 - add some parameters
gs.eventQueue('x_66238_cls323.course_change', null, 'Hello', 'World');

// Example 3 - Pass a GlideRecord
var programGr = new GlideRecord(Constants.PROGRAM_TABLE);
programGr.get('94ed8aaedbd19010d5cc61ca0b961988');
gs.eventQueue('x_66238_cls323.course_change', programGr, 'Hello', 'World');

// Example 4 - GlideRecordScheduled
var programGr = new GlideRecord(Constants.PROGRAM_TABLE);
programGr.get('94ed8aaedbd19010d5cc61ca0b961988');
var gdt = new GlideDateTime();
var now = gdt.getDisplayValue()
gdt.addSeconds(15);
gs.eventQueueScheduled('x_66238_cls323.course_change', programGr, now, 'Scheduled', gdt);

var incGr = new GlideRecord('incident');
incGr.get('9d385017c611228701d22104cc95c371');
var processTime = new GlideDateTime();
processTime.addSeconds(15);
gs.eventQueueScheduled('x_66238_cls323.course_change', incGr, 'TEST', gs.getUserID(), processTime);