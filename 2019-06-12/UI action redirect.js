current.state = 3; // closed complete
current.update();
var msg = gs.getMessage('safety_issue_closed_and_open', [current.number]);
gs.addInfoMessage(msg);
// Option 1 - stay on this page
// action.setRedirectURL(current);
// Option 2 - go to another GlideRecord
// action.setRedirectURL(rec);
// Option 3 - go to a specific URL
// action.setRedirectURL('/someURL');
action.setRedirectURL('/com.glideapp.servicecatalog_cat_item_view.do?sysparm_id=5dc101fcdb023300d5cc61ca0b9619c6')