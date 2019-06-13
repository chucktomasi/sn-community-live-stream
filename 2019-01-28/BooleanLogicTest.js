var isAdmin = true;
var isUser = false;
var isEmployee = false;

if (isAdmin || isUser) {
    gs.info("Admin or user");
}

if (!isAdmin && !isUser) {
    gs.info("Not admin nor user");
}
