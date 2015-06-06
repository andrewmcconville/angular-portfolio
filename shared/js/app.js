var app = angular.module('portfolio', ['ui.router', 'ngAnimate', 'wu.masonry', 'snap']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
	//routes if i have time
}]);

app.controller('appCtrl', ['$scope', function($scope) {
	$scope.works = [
		{
			name: "Mesmer",
			excerpt: "Interactive, drag and drop, web-app providing students real-time data manipulation.",
			poster: {
				src: "",
				height: 270,
				width: 340
			}
		},
		{
			name: "Census Viewer",
			excerpt: "Interactive infographic to U.S. census API in HTML, CSS & JS.",
			poster: {
				src: "",
				height: 220,
				width: 340
			}
		},
		{
			name: "Demographics Supersized",
			excerpt: "City demographics in Milwaukee vs McDonald’s spatial density.",
			poster: {
				src: "",
				height: 210,
				width: 340
			}
		},
		{
			name: "Energy Life Cycle of Coal",
			excerpt: "Visualizing the movement and consumption of coal reserves.",
			poster: {
				src: "",
				height: 290,
				width: 340
			}
		},
		{
			name: "Google Material",
			excerpt: "Blah",
			poster: {
				src: "",
				height: 240,
				width: 340
			}
		},
		{
			name: "UWM Mobile",
			excerpt: "Designed UI, UX and interactions along with in app prototyping.",
			poster: {
				src: "",
				height: 310,
				width: 340
			}
		}
	];

	$scope.selected = {
		current: -1
	};

	$scope.activateWork = function(index){
		if($scope.selected.current == index) {
			$scope.selected.current = -1;
		} else {
			$scope.selected.current = index;
		}
	};
}]);