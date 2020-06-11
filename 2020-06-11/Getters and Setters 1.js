// Getters/setters
// Plan A:
// Build an object, then augment
var user = {
    "incidentList" : [],
    "first_name" : "Chuck",
    "last_name" : "Tomasi",
    "mode" : 'cls_user_message'
};

user.message = gs.getMessage(user.mode);

gs.info('Message=' + user.message);