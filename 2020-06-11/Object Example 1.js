// Addressing properties in undefined objects
// Example 1
var user = {
    "incidentList" : [],
    "first_name" : "Chuck",
    "last_name" : "Tomasi"
};

// Problem with this
user.setting.active = true;