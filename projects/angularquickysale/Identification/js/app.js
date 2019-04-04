var app = angular.module("QuickySale", ['ngRoute', 'ngSanitize']);

app.config(['$routeProvider', 
  function($routeProvider) {
	  
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
      })
      .when('/inscription', {
        templateUrl: 'partials/inscription.html'
		,controller: 'inscriptionCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
