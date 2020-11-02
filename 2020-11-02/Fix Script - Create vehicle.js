var v = new GlideRecord('x_orb_clsfixar_vehicle');
v.newRecord();
v.setValue('make', 'Honda');
v.setValue('model', 'Accord');
v.setValue('year', '2018');
v.setValue('source', 'Fix script');
v.insert();