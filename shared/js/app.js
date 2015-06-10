var app = angular.module('portfolio', ['ui.router', 'ngAnimate', 'wu.masonry']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
	//$urlRouterProvider
		//.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/'
		})
		.state('details', {
			url: '/:url',			
			templateUrl: 'components/details.html',
			controller: function($scope, $timeout, $state, $stateParams, Works){
				var currentWork = Works.getWork($stateParams.url);
				$scope.previousWorkURL = Works.getPreviousURL(currentWork.index);
				$scope.nextWorkURL = Works.getNextURL(currentWork.index);

				$scope.work = currentWork.work;
				$scope.index = currentWork.index;

				$scope.reloadMasonry = function(){
					$timeout(function () {
						$('#js-bricks').masonry({
							itemSelector: '.masonry-brick'
						});
					}, 160);
				};
			}
		});
}]);

app.controller('appCtrl', ['$scope', '$state', '$stateParams', '$timeout', 'Works', function($scope, $state, $stateParams, $timeout, Works) {
	$scope.works = Works.getWorks();
	
	$timeout(function(){
		$scope.updateState();
	}, 0);

	$scope.updateState = function(){
		$(window).scrollTop(0);

		if($state.current.name == 'details') {
			$scope.detailsActive = true;
			return $scope.detailsActive;
		} else {
			$scope.detailsActive = false;
			return $scope.detailsActive;
		}		
	};
}]);