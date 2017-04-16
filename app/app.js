'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'CarouselDemoCtrl',
  'ui.bootstrap',
  'infoControllers',
  'myApp.version',
  'vcRecaptcha',
  'extraCtrl',
  'resumeCtrl'
]);

// Routes in controllers/routes.js
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
$locationProvider.hashPrefix('');

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
  .when('/extra', {
    templateUrl: 'templates/extra.html',
    controller: 'extraCtrl'
  })
  .otherwise({redirectTo: '/'});

}]);
