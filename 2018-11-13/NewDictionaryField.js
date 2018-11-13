var dictGr = new GlideRecord('sys_dictionary');
dictGr.newRecord();
dictGr.name = 'incident';
dictGr.element = 'scripted_string';
dictGr.internal_type = 'string';
dictGr.column_label = 'Scripted string';
dictGr.insert();