 app.controller("mainCtrl",function($scope) {
	$scope.selection = "connexion";
	$scope.clickShowConnexion = function() {
		$scope.connexionShow = true;
	}
	$scope.clickHideConnexion = function() {
		$scope.connexionShow = false;
	}
	
	$scope.clickSwitchLostPassword = function() {
		$scope.selection = "lostPassword";
	}
	
	$scope.clickSwitchConnexion = function() {
		$scope.selection = "connexion";
	}
	
	$scope.nb = 3;
	
	// test pour 
	// $scope.templates =
	// [ { name: 'templateConnexion', url: 'file:///C:/Users/Jo/Documents/GitHub/quickysale/partials/connexion.html'},
	//   { name: 'template2.html', url: 'template2.html'} ];
	//	$scope.template = $scope.templates[0];
 });
 
