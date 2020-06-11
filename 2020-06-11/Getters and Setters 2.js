// Getters/setters
// Plan B:
// Use get() to build message dynamically in the object definition
var user = {
    "incidentList" : [],
    "first_name" : "Chuck",
    "last_name" : "Tomasi",
    "mode" : 'cls_user_message',
    get message() {
        return gs.getMessage(this.mode);
    }
};

gs.info('Message=' + user.message);