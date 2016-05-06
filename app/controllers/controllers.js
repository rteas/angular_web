'use strict'

var infoControllers = angular.module('infoControllers',[]);

infoControllers.controller('resumeCtrl', ['$scope', 
	function($scope){

		$scope.displayMode = "Online";

		$scope.toggleDisplay = function(){
			if($scope.displayMode === "Online"){
				$scope.displayMode = "PDF";
			}
			else{
				$scope.displayMode = "Online"
			}
		}
}]);

infoControllers.controller('githubCtrl', ['$scope', '$http', 
	function($scope, $http) {

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