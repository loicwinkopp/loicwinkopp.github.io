angular.module("QuickySale", ["ngSanitize", "ui.tinymce"])
.controller("QuickySaleCtrl", function($scope, $location) {
	
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

	$scope.currentAd = null;

	$scope.setCurrentAd = function(ad){
		if($scope.currentAd == ad)
			$scope.currentAd = null;
		else {
			$scope.currentAd = ad;
		}
	};
	
	// Ouverture/fermeture d'une annonce
	$scope.toAd = function(ad) {
		if(ad == null) {
			$scope.currentAd = null;
			$location.path("/home/");
			$scope.enlargedPicture = null;
		}
		else {
			$location.path("/ad/" + ad.id);
		}
	};
	
	// Observateur de l'URL
	$scope.$watch(function() {
		return $location.path();
	}, function(newPath) {
		var tabPath = newPath.split("/");
		var page = tabPath[1];

		if (page == "") {
			$location.path("/home/");
		}

		$scope.currentPage = page;

		if(page == "ad") {
			var idAd = tabPath[2];
			if(idAd == "") {
				$scope.setCurrentAd(null);
			} else {
				$scope.ads.forEach(function(item) {
					if(item.id == idAd) {
						$scope.setCurrentAd(item);
					}
				});
			}
		}

		if(page == "post") {
			$scope.initAd();
		}
	});
	
	$scope.toPage = function(page) {
		if(page != $scope.currentPage) {
			$location.path("/" + page + "/");
		}
	};

	// Création d'annonce
	$scope.newAd = null;
	$scope.initAd = function() {
		$scope.newAd = {
			date: new Date() 
		}
	};
	$scope.postAd = function() {
		$scope.newAd.id = Math.floor((Math.random() * 100) + 10); 
		$scope.ads.push($scope.newAd);
		$scope.newAd = null;
	}

	$scope.optionsTinyMCE = {
		language: "fr_FR",
		statusbar: false
	};

	$scope.clearSearchField = function() {
		$scope.search = "";
	}

	$scope.enlargedPicture = null;

	$scope.enlargePicture = function(picture) {
		$scope.enlargedPicture = picture;
	}
	
	$scope.doubleToPrice = function(double) {
		var string = double.toString();
		string = string.replace('.', ',');
		return string + " €";
	};

	$scope.sortType = null;
	
	$scope.ads = [
		{ id: 1, title: "Btwin 20 pouce", description: "Vélo enfant 20 pouce b'twin decathlon négociable", date: new Date(2013, 02, 25, 18, 54), price: 60,
			pictures: [{url: "images/velo.jpg"}]},
		{ id: 2, title: "Hyundai ix35", description: "1.7 crdi 115 2WD BLUE DRIVE PACK PREMIUM + XENON Steel Gray, sellerie mi-cuir/mi-tissu Très bon état général, Toit panoramique ouvrant, sièges chauffants avant arrière", date: new Date(2013, 02, 22, 15, 32), price: 16500,
			pictures: [{url: "images/voiture1.jpg"}, {url: "images/voiture2.jpg"}, {url: "images/voiture3.jpg"}]},
		{ id: 3, title: "Marshall jcm 800 4210 de 1982", description: "Vends jcm 800 de 1982 le modèle 4210 Hp rola celestion Footswitch fourni Lampes neuves Pas de ronflettes Fonctionnel", date: new Date(2013, 02, 21, 15, 15), price: 800.50,
			pictures: [{url: "images/ampli.jpg"}]},
		{ id: 4, title: "Lunettes de soleil Ralph Lauren Etat Neuf Noir", description: "Lunettes de soleil Ralph Lauren Etat Neuf Noir", date: new Date(2013, 02, 11, 13, 15), price: 24,
			pictures: [{url: "images/lunettes1.jpg"}, {url: "images/lunettes2.jpg"}]},
		{ id: 5, title: "Meuble rangement", description: "VENDS MEUBLE RANGEMENT BLANC. 2ETAGERES. 1TIROIRS", date: new Date(2013, 02, 08, 13, 15), price: 35,
			pictures: [{url: "images/meuble.jpg"}]},
	];

	$scope.sortField = "default";
	$scope.reverse = false;
	$scope.$watch(function() {
		return $scope.sortField;
	}, function(newSortField) {
		if(newSortField.match("Reverse$")) {
			$scope.reverse = true;
			$scope.sortType = newSortField.slice(0,-7);
		} else {
			$scope.reverse = false;
			$scope.sortType = newSortField;
		}
	});
})
.filter("hightlightSearch", function() {
	return function(input, search) {
		if(search) {
			return input.replace(new RegExp("(" + search + ")", "gi"), "<span class='hightlightSearch'>$1</span>");
		} else {
			return input;
		}
	}
});