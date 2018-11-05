var vehicle = {
    "wheels" : 2,
    "engines" : true,
    "lights" : "green and red",
    "response" :
        {
            "items" : [
                {"status" : "ready",
                "level" : 4
                }
            ]
        }
};

var vehicleStr = JSON.stringify(vehicle, null, 4);
gs.info(vehicleStr);
gs.info(vehicle.response.items[0].status);
var obj = JSON.parse(vehicleStr);
gs.info(obj.response.items[0].level);
