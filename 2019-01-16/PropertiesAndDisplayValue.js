// original script
/*
if (current.assignment_group.name == 'CAB Approval') {
    current.u_ci = true;
}
*/

// Best practice #1, use the getDisplayValue()
// Best practice #2, use a property
var grpName = gs.getProperty('cab.approval.group_name', '');

if (grpName != '') {
    if (current.assignment_group.getDisplayValue() == grpName) {
        current.u_ci = true;
    }
}
