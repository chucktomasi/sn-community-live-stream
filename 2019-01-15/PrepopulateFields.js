// Present a form with some prepopulated values and let the user save

var eqStr = 'short_description=' + current.short_description +
    '^impact=2^urgency=2^state=2';

var url = 'incident.do?sys_id=-1&sysparm_query=' + eqStr;
action.setRedirectURL(url);

