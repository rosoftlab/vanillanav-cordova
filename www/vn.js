cordova.define("cordova-plugin-vanillanav.device", function(require, exports, module) {
module.exports.navigate = function(venueId, referenceId){
//	if(device.platform === 'Android') {
//		var successCallback = function(){
//
//		};
//		var errorCallback = successCallback;
//		cordova.exec(successCallback, errorCallback, "VanillaNav", "navigate", [venueId, referenceId]);
//	} else if(device.platform === 'iOS') {
		var scheme = "vanillanav://navigateTo?venueId=" + venueId + "&referenceId=" + referenceId;

		appAvailability.check(
    		'vanillanav://',       // URI Scheme or Package Name
    		function() {  // Success callback
                //alert("available");
    			console.log(scheme + ' is available :)');
    			//window.location=scheme;
    			window.open(scheme, '_system');
    		},
		    function() {  // Error callback
                //alert("not available");
		    	console.log(scheme + ' is not available :(');
		    	//window.location="https://itunes.apple.com/ro/app/vanillanav/id1007116984?mt=8";
                window.open('itms-apps://itunes.apple.com/ro/app/vanillanav/id1007116984?mt=8', '_system');
		    }
		);
//	}

}

});
