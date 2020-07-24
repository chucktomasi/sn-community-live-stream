(function execute(inputs, outputs) {

  var list = [];
  var count = 0;
  var courseGr = new GlideRecord(Constants.COURSE_TABLE);
  if (inputs.filter) {
    courseGr.addEncodedQuery(inputs.filter);
  }
  courseGr.query();

  while (courseGr.next()) {
    ++count;
    var course = {
      "active" : courseGr.getValue('active') == "1",
      "name" : courseGr.getValue('name'),
      "order" : parseInt(courseGr.getValue('order'), 10)
    };
    list.push(course);
  }
  gs.info(JSON.stringify(list, null, 4));
  
  outputs.list = list;
  outputs.count = count;
})(inputs, outputs);
