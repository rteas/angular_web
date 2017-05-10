var githubCtrl = angular.module('githubCtrl',[]);

githubCtrl.controller('githubCtrl', ['$scope', '$http', 
	function($scope, $http) {

		$scope.user = "rteas";
		$scope.repos = {};

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