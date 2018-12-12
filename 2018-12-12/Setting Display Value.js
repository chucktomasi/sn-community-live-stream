// Query Users
var user = new GlideRecord('sys_user');
var i = 0; // counter
user.addQuery('user_name', 'test');
user.query();


// Loop through Users and copy BU ref field to New BU ref field
while(user.next()){
  var newBu = user.u_new_business_unit; // New ref field
  var oldBu = user.u_business_unit.getDisplayValue(); // Old ref field
  gs.print('NewBu is: ' + newBu.getDisplayValue());
  gs.print('OldBu is: ' + oldBu);
  user.u_new_business_unit.setDisplayValue(oldBu); // Copy label name of Old BU to New BU
  gs.print('What is NewBu now? ' + newBu);
  user.update(); // update form
  i++;
}

gs.print(i + ' number of users have been updated');