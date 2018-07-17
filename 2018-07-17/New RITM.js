var gr = new GlideRecord('sc_req_item');
gr.newRecord();
// Populate fields as you require as below
gr.request = current.request;
gr.requested_for = current.requested_for;
...
gr.insert();