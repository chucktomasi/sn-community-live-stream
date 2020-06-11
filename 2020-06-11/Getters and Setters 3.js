// Getters/setters
// Plan C:
// Use set() to build message directly w/o mode
var user = {
    "incidentList" : [],
    "first_name" : "Chuck",
    "last_name" : "Tomasi",
    set setMessage(mode) {
        this.message = gs.getMessage(mode);
    }
};
user.setMessage = 'cls_user_message';

gs.info('Message=' + user.message);

gs.info(JSON.stringify(user, null, 4));