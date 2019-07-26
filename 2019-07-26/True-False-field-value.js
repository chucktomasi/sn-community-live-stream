// Display true and false values from fields
var pGr = new GlideRecord('x_66238_cls528_person');
pGr.query();

while (pGr.next()) {
    var activeFieldValue = pGr.getValue('active') == '1';

    gs.info(pGr.getDisplayValue() + ' active=' + activeFieldValue + ' typeof=' + typeof activeFieldValue);
}