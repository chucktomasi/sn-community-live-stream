var now = new GlideDate();
var thisMonth = now.getMonthNoTZ();
var thisDay = now.getDayOfMonthNoTZ();

var eGr = new GlideRecord('x_66238_cls323_employee');
eGr.query();

while (eGr.next()) {
    var myDate = {
        "doh" : {},
        "dob" : {}
    };

    myDate.doh.date = new GlideDate();
    myDate.doh.date.setDisplayValue(eGr.getDisplayValue('doh'));
    myDate.doh.month = myDate.doh.date.getMonthNoTZ();
    myDate.doh.day = myDate.doh.date.getDayOfMonthNoTZ();

    if (myDate.doh.month == now.thisMonth && myDate.doh.day == now.thisDay) {
        gs.eventQueue('my.doh.anniversary', eGr, '', '');
    }

    // Do something similar for dob
    // TO DO: Instead of retrieving all records, find an addQuery or addEncodedQuery
    // that only retrieves the records you need
}