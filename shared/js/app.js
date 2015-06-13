var app = angular.module('portfolio', ['ui.router', 'ngAnimate']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
	//$urlRouterProvider
		//.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/'
		})
		.state('interfaces', {
			url: 'interfaces',
			controller: function($scope, Works){

			}
		})
		.state('details', {
			url: '/:url',
			views: {
				'details': {
					templateUrl: 'components/details.html',
					controller: function($scope, $timeout, $state, $stateParams, Works){
						var currentWork = Works.getWork($stateParams.url);
						$scope.previousWorkURL = Works.getPreviousURL(currentWork.index);
						$scope.nextWorkURL = Works.getNextURL(currentWork.index);

						$scope.work = currentWork.work;
						$scope.index = currentWork.index;
					}
				}
			}
		});
}]);

app.controller('appCtrl', ['$rootScope', '$scope', '$state', '$stateParams', '$timeout', 'Works', function($rootScope, $scope, $state, $stateParams, $timeout, Works) {
	
	$scope.isDetailsState = false;
	$scope.menuOpen = false;

	$scope.getWorks = function(category){
		$scope.works = Works.getWorks(category);
	};
	//$scope.works = $scope.getWorks('infographic');

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		if(toState.name === 'details'){
			$scope.isDetailsState = true;
			window.scroll(0, 0);
		} else {
			$scope.isDetailsState = false;
		}
	});
}]);