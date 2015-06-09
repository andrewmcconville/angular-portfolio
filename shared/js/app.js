var app = angular.module('portfolio', ['ui.router', 'ngAnimate', 'wu.masonry']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
	//$urlRouterProvider
		//.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'index.html'
		})
		.state('details', {
			url: '/:url',			
			templateUrl: 'components/details.html',
			controller: function($scope, $stateParams, Works){
				$scope.work = Works.getWork($stateParams.url);
			}
		});
}]);

app.controller('appCtrl', ['$scope', '$stateParams', '$timeout', 'Works', function($scope, $stateParams, $timeout, Works) {
	$scope.works = Works.getWorks();

	$scope.showDetails = false;

	$scope.current = new function(){
		this.index = -1;

		this.increment = function(){
			this.index++;
		};

		this.decrement = function(){
			this.index--;
		};

		this.reset = function(){
			this.index = -1;
			$scope.reloadMasonry();
		};
	};

	$scope.reloadMasonry = function(){
		$timeout(function () {
			$('#js-bricks').masonry({
				itemSelector: '.masonry-brick'
			});
		}, 0);
	};

	$scope.activateWork = function(index){
		if($scope.selected.current == index) {
			$scope.selected.current = -1;
		} else {
			$scope.selected.current = index;
		}
	};

	$scope.log = function(message){
		console.log(message);
	}
}]);