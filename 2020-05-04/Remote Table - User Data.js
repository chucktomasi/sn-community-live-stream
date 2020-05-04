try {
    var r = new sn_ws.RESTMessageV2('x_66238_budget.DemoCT1 Data', 'Get 10 Users');
    var response = r.execute();
    var responseBody = JSON.parse(response.getBody());
    var httpStatus = response.getStatusCode();

    if (httpStatus == 200) {
        for (var i = 0; i < responseBody.result.length; i++) {
            var user = responseBody.result[i];
            var rowObj = {
                "name" : user.name,
                "title" : user.title,
                "email" : user.email
            };
            gs.info(JSON.stringify(rowObj));
            // v_table.addRow(rowObj);
        }
    }
} catch (ex) {
    var message = ex.message;
}