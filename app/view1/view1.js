'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'templates/home.html',
    controller: 'View1Ctrl'
  }).
  when('/about', {
  	templateUrl: 'templates/about.html'
  }).
  when('/resume', {
  	templateUrl: 'templates/resume.html'
  }).
  when('/github', {
  	templateUrl: 'templates/github.html',
  	controller: 'View1Ctrl'
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
			$scope.numRepos = repos.length;
		});
	}

	// Initialize 
	$scope.gitData();

}]);