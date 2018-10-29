var current = new GlideRecord('x_66238_cls_chuck');
current.get('9ec9c5080f2123007500cbdce1050e07');

var vuserschedule='US Holidays'; //Checking US business days
var vschedule = new GlideRecord('cmn_schedule');// Querying schedule table
vschedule.addEncodedQuery('name='+vuserschedule); 
vschedule.query();
if (vschedule.next()) {
    gs.info(vschedule.getDisplayValue());
    var sched = new GlideSchedule(vschedule.sys_id);
    var d = new GlideDateTime();
    d.setValue(current.start_date);   // d.setDisplayValue('12/25/2018 08:00:00');
    gs.info('d=' + d.getDisplayValue());
    gs.info('start_date=' + current.start_date.getDisplayValue());
    if (sched.isInSchedule(d)) {
        gs.info("this is in schedule");
    } else{
        gs.info('Selected Planned start date is not a Business Day');
        gs.info(sched.start_date_time.getDisplayValue());  // Is giving me Undefined value. Help me in adding days to end date of the schedule entry and populate it on planned start date
    }
}