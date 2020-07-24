(function execute(inputs, outputs) {

    var val = gs.getProperty(inputs.key, inputs.defaultValue);

    outputs.property_value = val;

})(inputs, outputs);
