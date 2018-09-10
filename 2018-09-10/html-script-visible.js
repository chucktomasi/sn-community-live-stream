// Update visible on HTML Script field type
// table: sys_glide_object
// sys_id: 98fc02dbef0011002841f7f775c0fb71
(function () {

    var rec = new GlideRecord('sys_glide_object');
    if (rec.get('98fc02dbef0011002841f7f775c0fb71')) {
        rec.visible = true;
        rec.update();
    }
})();