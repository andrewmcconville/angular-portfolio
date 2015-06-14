angular
	.module('portfolio')
	.controller('workListCtrl', ['$scope', '$state', 'Works', function($scope, $state, Works){
		$scope.category = $state.current.name;

		//if category.details get rid of everythign after the .
		if($scope.category.indexOf(".") > 0){
			$scope.category = $scope.category.substring(0, $scope.category.indexOf("."));
		}

		$scope.works = Works.getWorks($scope.category);
	}]);