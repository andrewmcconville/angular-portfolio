var app = angular.module('portfolio', ['ui.router', 'ngAnimate']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
	$urlRouterProvider
		.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			template: 'Andrew'
		})
		// .state('resume', {
		// 	url: '/resume'
		// })
		.state('interface', {
			url: '/interfaces',
			templateUrl: 'components/workListTemplate.html',
			controller: 'workListCtrl'
		})
		.state('infographic', {
			url: '/infographics',
			templateUrl: 'components/workListTemplate.html',
			controller: 'workListCtrl'
		})
		.state('interface.details', {
			url: '/:url',
			templateUrl: 'components/detailsTemplate.html',
			controller: 'detailsCtrl'
		})
		.state('infographic.details', {
			url: '/:url',
			templateUrl: 'components/detailsTemplate.html',
			controller: 'detailsCtrl'
		});
}]);

app.controller('appCtrl', ['$rootScope', '$scope', '$state', '$stateParams', function($rootScope, $scope, $state, $stateParams) {
	
	$scope.isDetailsState = false;
	$scope.menuOpen = false;

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		if(toState.controller === 'detailsCtrl'){
			$scope.isDetailsState = true;
			window.scroll(0, 0);
		} else {
			$scope.isDetailsState = false;
		}
	});
}]);