angular
	.module('portfolio')
	.controller('detailsCtrl', ['$scope', '$state', '$stateParams', 'Works', function($scope, $state, $stateParams, Works){
		$scope.currentWork = Works.getWork($stateParams.url);
		$scope.previousWorkURL = Works.getPreviousURL($scope.currentWork.index);
		$scope.nextWorkURL = Works.getNextURL($scope.currentWork.index);

		$scope.work = $scope.currentWork.work;
		$scope.index = $scope.currentWork.index;

		document.addEventListener("keydown", previousNext);

		function previousNext(e){			
			//if escape key or down arrow go to category list
			if(e.keyCode === 27 || e.keyCode === 40){
				$state.go($scope.category);
				document.removeEventListener("keydown", previousNext);
			}
			//if right arrow go to next work
			else if(e.keyCode === 39){
				$state.go($scope.category.toString() + '.details', {url: $scope.nextWorkURL});
				document.removeEventListener("keydown", previousNext);
			}
			//if left arrow go to previous work
			else if(e.keyCode === 37){
				$state.go($scope.category.toString() + '.details', {url: $scope.previousWorkURL});
				document.removeEventListener("keydown", previousNext);
			}
		}
	}]);