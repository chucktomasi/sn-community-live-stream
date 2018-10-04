function onSubmit() {

    var attachOne = g_form.getValue('one');
    var attachTwo = g_form.getValue('two');
    var attachThree = g_form.getValue('three');

    if (attachOne == 'true' || attachTwo == 'true' || attachThree == 'true') {

        var att = new GlideRecord("sys_attachment");
        att.addQuery("table_name", "sc_cat_item_producer");
        att.addQuery("sys_created_by", g_user.userID);
        att.query();
        if (!att.next()) {
            alert("Please attach the Required Documnet to proceed with submitting.");
            return false;
        }

    }

}