module.exports.navigate = function(venueId, referenceId){
  var successCallback = function(){

  };
  var errorCallback = successCallback;
  cordova.exec(successCallback, errorCallback, "VanillaNav", "navigate", [venueId, referenceId]);
}
