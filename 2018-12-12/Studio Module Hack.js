var modGr = new GlideRecord('sys_app_module');
if (modGr.get('bb0c4ba0c3120200ca27ff9c02d3ae7e')) {
    modGr.setValue('query', '$studio.do');
    modGr.window_name = '_blank';
    modGr.update();
}