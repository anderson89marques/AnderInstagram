<!-- O objeto será injetado no nosso controller-->
angular.module("starter").factory("imageUtil", function($cordovaCamera){
	var util = {}

	util.cameraOptions = {
		CAMERA: 1,
		GALLERY: 2
	}

	util.getImage = function(option, success, error){
	  var options = {
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: option,
      allowEdit: false,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      success(imageData);
    }, function(err) {
      error(err);
    });
	};

	return util;
})