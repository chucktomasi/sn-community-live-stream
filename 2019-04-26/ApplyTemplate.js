
(function () {  

    var rec = new GlideRecord('incident');  
    rec.newRecord();
    rec.applyTemplate('Populate the Call type field with Self-service');
    rec.insert();
})();  