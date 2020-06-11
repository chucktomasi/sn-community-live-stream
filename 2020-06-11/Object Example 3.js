// Addressing properties in undefined objects
// Example 3
var user = {
    "incidentList" : [],
    "first_name" : "Chuck",
    "last_name" : "Tomasi"
};

// Fix 2 - detect if it 'setting' exists before using it
if (user.hasOwnProperty('setting')) {
    gs.info('Setting exists, now we can use it');
    user.setting.active = false;
} else {
    gs.error('HEY! Setting does not exist in user');
}