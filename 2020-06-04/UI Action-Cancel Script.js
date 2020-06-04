//Client-side 'onclick' function
function cancel(){

    if (confirm('Are you sure you want to cancel this request?')) {

        //Call the UI Action and skip the 'onclick' function
        gsftSubmit(null, g_form.getFormElement(), 'loaner_cancel'); //MUST call the 'Action name' set in this UI Action

        return true;
    }
    
    return false; //Abort submission
}

// Server side code
if (typeof window == 'undefined') {

    // Cancel any running Flows
    var flowGr = new GlideRecord("sys_flow_context");
    flowGr.addQuery("source_record", current.getUniqueValue());
    flowGr.query();

    while (flowGr.next()) {
        sn_fd.FlowAPI.cancel(flowGr.getUniqueValue(), 'Canceling Test Flows');
    }

    // Set the state to canceled (4)
    current.setValue('state', 4);
    current.update();
    gs.addInfoMessage('Request canceled');
    action.setRedirectURL(current);
}