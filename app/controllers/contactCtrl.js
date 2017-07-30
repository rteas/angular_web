var contactCtrl = angular.module('contactCtrl',[]);


contactCtrl.controller('contactCtrl', ['$scope', '$http',
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