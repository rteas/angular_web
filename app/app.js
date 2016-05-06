'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'infoControllers',
  'myApp.version',
]);

// Routes in controllers/routes.js
app.config(['$routeProvider', function($routeProvider) {

$routeProvider.when('/', {
    templateUrl: 'templates/home.html'
  }).
  when('/about', {
  	templateUrl: 'templates/about.html'
  }).
  when('/resume', {
  	templateUrl: 'templates/resume.html',
  	controller: 'resumeCtrl'
  }).
  when('/github', {
  	templateUrl: 'templates/github.html',
  	controller: 'githubCtrl'
  })
  .otherwise({redirectTo: '/'});

}]);

