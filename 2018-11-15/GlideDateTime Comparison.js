var DateUtil = Class.create();
DateUtil.prototype = {
    initialize: function() {
    },

    // Usage: new DateUtil().hasDatePassed(current.getValue('state_date'))
    //
    hasDatePassed : function(dateFieldValue) {
        var now     = new GlideDateTime();
        var startDt = new GlideDateTime(dateFieldValue);

        if (startDt.getNumericValue() < now.getNumericValue())
            return true;

        return false;

    },

    type: 'DateUtil'
};
