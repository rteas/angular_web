var extraCtrl = angular.module('extraCtrl', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
extraCtrl.controller('extraCtrl', function ($scope, $window) {


  
  $scope.tabs = [
    { title:'Dynamic Title 1', content:"Dynamic content 1 \n literals" },
    { title:'Dynamic Title 2', content:'Dynamic content 2' }
  ];

// extra function for timeout tab

  /*
  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };
  */
  $scope.model = {
    name: 'Tabs'
  };
});