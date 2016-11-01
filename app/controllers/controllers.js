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

// TODO: Create seperate controller and factory
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

		$scope.langData = [
			{
				'name': 'Java',
				'tasks': [
					'Recreated data structures & created simulations using input data',
					'Worked with team to create a rouge game using the Slick2D library'
				]
			},
			{
				'name': 'Ruby/Rails',
				'tasks': [
					'Developed mock-up twitter website and used front-end web languages such as jQuery and JavaScript'
				]
			},
			{
				'name': 'C# & ASP.NET',
				'tasks': [
					'Developed ASP MVC application to manage patient medical data with Entity Framework 6 in Visual Studio']
			},
			{
				'name': 'Embedded Systems (C/C++)',
				'tasks': [
					'Developed a functional digital watch with time, date, timer, countdown, alarm, and settings',
					'Created a sound equalizer by manipulating LP, HP, and BP filters to manipulate amp/dB of frequencies'
					]
			},
			{
				'name': 'Matlab',
				'tasks': [
				'Generated textures using sample data images and image stitching techniques',
				'Generated sinusoidal data and samples for processing and analysis '
				]
			},
			{
				'name': 'Verilog/VHDL',
				'tasks': [
				'Designed components to function as a fully functional MIPS processor with pipelining'
				]
			}
		];

		$scope.projectData = [
			{
				'name': 'Unity Game Project',
				'tasks' : [
					'Developed 2D arcade (prototype) shooting game with Unity',
					'Designed & implemented player tracking, allowing enemies to fire accurate shots to player',
					'Using GIMP to create and design (all original) sprites/art assets'
				]
			},
			{
				'name': '(This) Portfolio Website',
				'tasks' : [
					"Developed SPA website using Angular.js and consuming Github's api",
					"Developed backend with Rails, implementing Google's reCAPTCHA"
				]
			},
			{
				'name': '3D Modelling Quadcopter (Senior Project)',
				'tasks' : [
					"Designed and implemented 3D modelling algorithm using vertices scanned by laser",
					"Created backend website for storing 3D vertices data"
				]
			}
		];

		$scope.workData = [
			{
				'title': 'Software Developer Intern @ Kappboom Inc.',
				'duration': 'July 2014 - September 2014',
				'tasks': [
				'Wrote backend software with Ruby/Rails to expose RESTful APIs to application clients',
				'Developed Android applications with Java and Eclipse',
				'Worked with Linux, Angular.js, Node.js, JQuery, CSS3, MySQL, and MongoDB'
				]
			},
			{
				'title': 'Private Tutor',
				'duration': 'June 2013 - September 2013',
				'tasks': [
				'Tutored intro to Java and C++ to community college students'
				]	
			}
		];
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