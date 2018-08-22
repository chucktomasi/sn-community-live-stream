Standard disclaimer: The following code is untested, requires review and potential modifications.

(function () {  

    // Clear out old asset value of CI XYZ
    var ci1 = new GlideRecord('cmdb_ci');

    if (ci1.get('asset', 'SYS_ID_OF_ASSET_XYZ')) {
        ci1.asset = '';
        ci1.update();
    }
 
    // Set the value of the new GlideRecord
    var ci2 = new GlideRecord('cmdb_ci');

    if (ci2.get('SYS_ID_OF_CI_ABC')) {
        ci2.asset = 'SYS_ID_OF_ASSET_XYZ';
        ci2.update();
    }
})();  