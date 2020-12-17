// Reset task value on all CLS records

var cls = new GlideRecord('x_66238_videx_cls');
cls.query();
while (cls.next()) {
    cls.setValue('task', '');
    cls.update();
}