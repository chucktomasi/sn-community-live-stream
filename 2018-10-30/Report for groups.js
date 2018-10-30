var reportName = 'NAME_OF_REPORT_HERE';
var gr = new GlideRecord('sys_user_group');

//Replace sample names with your database names here
gr.addEncodedQuery('name=Database^ORname=Network^ORname=Procurement');
gr.query();

//Get Template for scheduled report
var template = new GlideRecord('sysauto_report');

if (template.get('name', reportName)) {
    //Run the scheduled report as that manager, repeated for each manager
    while (gr.next()){
        template.newRecord();
        template.run_as = gr.getValue('manager');
        template.user_list = gr.getValue('manager');
        template.run_type = 'once';
        template.insert();
    }
} else {
    gs.error('Error: ' + reportName + ' not found');
}