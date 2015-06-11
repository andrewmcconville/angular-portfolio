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
					}, 40);
				};
			}
		});
}]);

app.controller('appCtrl', ['$rootScope', '$scope', '$state', '$stateParams', '$timeout', 'Works', function($rootScope, $scope, $state, $stateParams, $timeout, Works) {
	$scope.works = Works.getWorks();
	$scope.isDetailsState = false;
	$scope.menuOpen = false;

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		if(toState.name === 'details'){
			$scope.isDetailsState = true;
			$(window).scrollTop(0);
		} else {
			$scope.isDetailsState = false;
		}
	});
}]);