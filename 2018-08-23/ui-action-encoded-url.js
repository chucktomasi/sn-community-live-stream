var url = "http://yoursite.com/?search=";
var urlArg = gs.urlEncode(current.reference_field.getDisplayValue());
action.setRedirectURL(url + urlArg);