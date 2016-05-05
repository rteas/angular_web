'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  }).
  when('/github', {
  	templateUrl: 'view1/github.html',
  	controller: 'gitCtrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {

	$scope.user = "rteas";

	// Get user and repo data from github
	$scope.gitData = function(){
		$http.get('https://api.github.com/users/'+$scope.user).
		then(function(response){
			$scope.profile = response.data;
		});
		$http.get('https://api.github.com/users/'+$scope.user+'/repos').
		then(function(response){
			$scope.repos = response.data;
		});
	}

	// Initialize 
	$scope.gitData();

}]);