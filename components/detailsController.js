angular
	.module('portfolio')
	.controller('detailsCtrl', ['$scope', '$stateParams', 'Works', function($scope, $stateParams, Works){
		var currentWork = Works.getWork($stateParams.url);
		$scope.previousWorkURL = Works.getPreviousURL(currentWork.index);
		$scope.nextWorkURL = Works.getNextURL(currentWork.index);

		$scope.work = currentWork.work;
		$scope.index = currentWork.index;
	}]);