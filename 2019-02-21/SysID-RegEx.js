var obj = {
    "order_date":"02/11/2019",
    "test":"Test VK",
    "name":"Snow team",
    "customer_name":"94a9231bdb6beb00371478b5ae96194dddf"
    };
var patt = /[0-9a-f]{32}/;
var match = obj.customer_name.match(patt);
gs.info('match=' + match);

if (match) {
  gs.info('looks like a sys_id');
} else {
    gs.info('That\'s no sys_id');
}