var empGr = new GlideRecord(Constants.EMPLOYEE_TABLE);
empGr.get('7e4001e0db730010d5cc61ca0b9619c2');
gs.info('Document: ' + empGr.getValue('document'));
gs.info('Table: ' + empGr.getValue('table'));

// Get the record pointed to by the document field
/*
var docGr = new GlideRecord(empGr.getValue('table'));
if (docGr.get(empGr.getValue('document'))) {
    gs.info('docGr=' + docGr.getDisplayValue());
} else {
    gs.error('Cannot read docGr');
}
*/

var docGr = empGr.document.getRefRecord();
gs.info('docGr=' + docGr.getDisplayValue());
