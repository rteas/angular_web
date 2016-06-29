'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'infoControllers',
  'myApp.version',
  'vcRecaptcha',
]);

// Routes in controllers/routes.js
myApp.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {

$httpProvider.defaults.useXDomain = true;
delete $httpProvider.defaults.headers.common['X-Requested-With'];

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
  .when('/contact', {
    templateUrl: 'templates/contact.html',
    controller: 'contactCtrl'
  })
  .otherwise({redirectTo: '/'});

}]);
