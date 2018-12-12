gs.include('validators');

if (current.getTableName() == "incident") {
    current.comments = "reply from: " + email.origemail + "\n\n" + email.body_text;

    if (email.subject.toLowerCase().indexOf("please reopen") >= 0 && current.getValue('state') == 6) {
        current.incident_state = "2";
        current.work_notes = "The caller did not feel that this issue was resolved";
    }

    if (email.body.assign != undefined)
        current.assigned_to = email.body.assign;

    if (email.body.priority != undefined && isNumeric(email.body.priority))
        current.priority = email.body.priority;

    if (email.body.category != undefined)
    current.category = email.body.category;

    current.update();
}