var obj = {
	'customer' : {
        'name' : 'Acme',
        'address' : '123 Main St'
    },
	'order' : 100
};
if (obj.customer) {
    if (obj.customer.name) {
        var cust = obj.customer.name;
        gs.info(cust);
    } else {
        gs.error('Invalid customer name');
    }
 
} else {
    gs.error('Cannot read customer object');
}
