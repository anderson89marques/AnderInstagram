// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.config(function($ionicConfigProvider) { //para definir a posiçã das tabs tanto no ios como no android
  $ionicConfigProvider.tabs.position('bottom')
})

.directive('filterBar', function(){
  return {
    //E de element para poder usar assim <filter-bar>
    restrict: "E", 
    templateUrl: "componentes/filter-bar.html"
  }
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('HomeController', function($scope){})

.controller('CameraController', function($scope, imageUtil){
  $scope.onTabSelect = function (){
    $scope.imageCamera = undefined;

    imageUtil.getImage(imageUtil.cameraOptions.CAMERA ,function(imageData){
      //como o imageData é base64 é preciso informar isso e convertelo
      $scope.imageCamera = "data:image/jpeg;base64," + imageData;
    }, function(err){
      console.log(err);
    } 
    );
  }

  $scope.onFilter = function(option){
      alert("Filtro" + option);
  }

})

.controller('GalleryController', function($scope, imageUtil){
  $scope.onTabSelect = function (){
    $scope.imageGallery = undefined;

    imageUtil.getImage(imageUtil.cameraOptions.GALLERY ,function(imageData){
      $scope.imageGallery = "data:image/jpeg;base64," + imageData;
    }, function(err){
      console.log(err);
    } 
    );
  }

  $scope.onFilter = function(option){
      alert("Filtro" + option);
  }
  
})
