 app.controller("homeCtrl", function($scope, $location) {
	$scope.currentad = null;

	$scope.setCurrentAd = function(ad){
		if($scope.currentAd == ad)
			$scope.currentAd = null;
		else {
			
			$scope.currentAd = ad;
		}
	};
	
	$scope.toAd = function(ad) {
		if(ad == null) {
			$scope.currentAd = null;
			$location.path("");
			$scope.enlargedPicture = null;
		}
		else {
			$location.path("/" + ad.id);
		}
	};

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
		{ id: 1, title: "Très joli lapin nain", description: "C'est un très bel objet, c'est même un objet de la mort qui tue", date: new Date(2015, 0, 3, 3, 3), price: 25.4,
			pictures: [{url: "http://static.wamiz.fr/images/animaux/rongeurs/large/lapin-1767.jpg"}, {url: "http://static.wamiz.fr/images/animaux/rongeurs/large/lapin-1767.jpg"}, {url: "http://www.lapindumetro.fr/lapin-metro-01.jpg"}]},
		{ id: 2, title: "URGENT!! Le lapin !", description: "C'est un très bel <strong>objet à vendre</strong>", date: new Date(2013, 0, 3, 3, 3), price: 5.2,
			pictures: [{url: "http://static.wamiz.fr/images/animaux/rongeurs/large/lapin-1767.jpg"}, {url: "http://static.wamiz.fr/images/animaux/rongeurs/large/lapin-1767.jpg"}]},
		{ id: 3, title: "Lapin à la moutarde", description: "C'est un très bel objet à vendre", date: new Date(2010, 0, 3, 3, 3), price: 1233.67,
			pictures: [{url: "http://static.wamiz.fr/images/animaux/rongeurs/large/lapin-1767.jpg"}, {url: "http://static.wamiz.fr/images/animaux/rongeurs/large/lapin-1767.jpg"}]},
		{ id: 4, title: "Miam", description: "C'est un très bel objet à vendre", date: new Date(2011, 0, 3, 3, 3), price: 2.4,
			pictures: [{url: "http://static.wamiz.fr/images/animaux/rongeurs/large/lapin-1767.jpg"}, {url: "http://static.wamiz.fr/images/animaux/rongeurs/large/lapin-1767.jpg"}]},
		{ id: 5, title: "Objet à vendre", description: "C'est un très bel objet à vendre", date: new Date(2012, 0, 3, 3, 3), price: 0.4,
			pictures: [{url: "http://static.wamiz.fr/images/animaux/rongeurs/large/lapin-1767.jpg"}, {url: "http://static.wamiz.fr/images/animaux/rongeurs/large/lapin-1767.jpg"}]},
	];
	
	$scope.$watch(function() {
		return $location.path();
	}, function(newPath) {
		var tabPath = newPath.split("/");
		var idAd = tabPath[1];
		if(idAd == "") {
			$scope.setCurrentAd(null);
		} else {
			$scope.ads.forEach(function(item) {
				if(item.id == idAd) {
					$scope.setCurrentAd(item);
				}
			});
		}
	});

	$scope.reverse = false;
	$scope.$watch(function() {
		return $scope.sortType;
	}, function(newSortType) {
		if(newSortType.match("Reverse$")) {
			$scope.reverse = true;
			$scope.sortField = newSortType.slice(0,-7);
		} else {
			$scope.reverse = false;
			$scope.sortField = newSortType;
		}
	});
	
});

