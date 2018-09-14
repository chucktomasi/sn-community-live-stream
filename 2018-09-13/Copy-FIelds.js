var copyProp = gs.getProperty('my.copy.fields', 'caller_id,short_description');
var copyFields = copyProp.split(',');

// set srcGr to some incident record
var destGr = new GlideRecord('incident');

for (var i = 0; i < copyFields.length; i++) {
    var fName = copyFields[i];
    destGr.setValue(fName, srcGr.getValue(fName));
}

destGr.insert();