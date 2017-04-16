'use strict'

var infoControllers = angular.module('infoControllers',[]);

infoControllers.controller('githubCtrl', ['$scope', '$http', 
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



infoControllers.controller('contactCtrl', ['$scope', '$http',
	function($scope, $http){
		$scope.message = "";
		$scope.thanks = "";
		$scope.sendMessage = function(){

			var url = 'https://richyteas-messages.herokuapp.com/api/messages';

			var data = {
						"message":{
							"message": $scope.message,
							"code": $scope.recaptcha
						}
					}


			$scope.thanks = "Sending..."

			$http.post(url, data)
			.then(function(response){
				if(response.data.success == true){
					$scope.thanks = "Thank you!";
					$scope.message = "";
				}
				else{
					$scope.thanks="An error has occurred: Please check if the recaptcha is verified";
				}
				
			});
			

		}
	}
]);