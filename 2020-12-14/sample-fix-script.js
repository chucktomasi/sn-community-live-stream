// Sample fix script content to update existing records

var cls = new GlideRecord('x_66238_videx_cls');
cls.addNullQuery('task');
cls.query();
while (cls.next()) {

  var task = new GlideRecord('x_66238_videx_task');
  if (task.get('video_id', cls.getValue('video_id'))) {
      cls.task = task.getUniqueValue();
      cls.update();
  }
}