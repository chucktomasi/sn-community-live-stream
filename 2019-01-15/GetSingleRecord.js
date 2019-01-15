// Use the get method to get a single record from sys_template
var gr = new GlideRecord('sys_template');

if (gr.get('770ed701bdf1a50062cc892c25f9fe90')) {
    gs.print('Template Name = ' + gr.name);
}
