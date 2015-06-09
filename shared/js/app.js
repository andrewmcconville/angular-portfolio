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
			controller: function($scope, $state, $stateParams, Works){
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
					}, 0);
				};
			}
		});
}]);

app.controller('appCtrl', ['$scope', '$stateParams', '$timeout', 'Works', function($scope, $stateParams, $timeout, Works) {
	$scope.works = Works.getWorks();

	$scope.showDetails = false;
}]);