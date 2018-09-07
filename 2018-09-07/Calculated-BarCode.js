// Combine three fields in to a JSON toString
(function calculatedFieldValue(current) {

    var obj = {
        "asset" : current.asset,
        "serial_number" : current.serial_number,
        "manufacturer" : current.manufacturer
    };


	return JSON.stringify(obj);  // return the calculated value

})(current);