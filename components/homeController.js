angular
	.module('portfolio')
	.controller('homeCtrl', ['$rootScope', '$scope', 'Works', function($rootScope, $scope, Works){
		$scope.fizz = 2;
		$scope.buzz = 3;
		$scope.fizzBuzz = [];
		$scope.getFizzBuzz = function(number1, number2){
			$scope.fizzBuzz = [];
			for(var i = 0; i < 10; i++){
				if(i % $scope.fizz === 0 && i % $scope.buzz === 0) {
					$scope.fizzBuzz.push(i + ': fizz buzz');
				} else if (i % $scope.fizz === 0) {
					$scope.fizzBuzz.push(i + ': fizz');
				} else if (i % $scope.buzz === 0) {
					$scope.fizzBuzz.push(i + ': buzz');
				} else {
					$scope.fizzBuzz.push(i);
				}
			}
		}
		$scope.getFizzBuzz($scope.fizz, $scope.buzz);

		$rootScope.metadata = {
            'canonical': '/',
            'pageTitle': 'Home',
            'title': 'Andrew McConville Home',
            'description': 'I\'m a designer who spends some of his time coding and a coder who spends most of his time designing.',
            'image': 'http://andrewmcconville.com/wp-content/uploads/XXXXXXXX.jpg',
            'name': 'Andrew McConville',
            'section': 'About',
            'date': Works.getWorks()[0].date
        };
	}]);