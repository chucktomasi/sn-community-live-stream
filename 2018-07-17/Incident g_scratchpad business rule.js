// Sample business rule used for g_scratchpad
(function executeRule(current, previous /*null when async*/) {

    g_scratchpad.instance_name = gs.getProperty('instance_name');

})(current, previous);