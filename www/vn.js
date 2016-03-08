module.exports.navigate = function(venueId, referenceId){
	// if(device.platform === 'Android') {
	// 	var successCallback = function(){

	// 	};
	// 	var errorCallback = successCallback;
	// 	cordova.exec(successCallback, errorCallback, "VanillaNav", "navigate", [venueId, referenceId]);
	// } else if(device.platform === 'iOS') {
		var scheme = "vanillanav://navigateTo?venueId=" + venueId + "&referenceId=" + referenceId;

		appAvailability.check(
    		'vanillanav://',       // URI Scheme or Package Name
    		function() {  // Success callback
    			console.log(scheme + ' is available :)');
    			window.open(scheme, '_system');
    		},
		    function() {  // Error callback
		    	console.log(scheme + ' is not available :(');
                window.open('itms-apps://itunes.apple.com/ro/app/vanillanav/id1007116984?mt=8', '_system');
		    }
		);
	// }

}
