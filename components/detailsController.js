angular
	.module('portfolio')
	.controller('detailsCtrl', ['$scope', '$state', '$stateParams', 'Works', function($scope, $state, $stateParams, Works){
		$scope.currentWork = Works.getWork($stateParams.url);
		$scope.previousWorkURL = Works.getPreviousURL($scope.currentWork.index);
		$scope.nextWorkURL = Works.getNextURL($scope.currentWork.index);

		$scope.work = $scope.currentWork.work;
		$scope.index = $scope.currentWork.index;
		$scope.hasLink = function(){
			if($scope.work.link) {
				return true;
			} else {
				return false;
			}
		};

		document.addEventListener("keydown", previousNext);

		function previousNext(e){			
			//if escape key go to category list
			if(e.keyCode === 27){
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

        $scope.$emit('updateMetaData', {
            'canonical': '/' + $scope.work.category + 's/' + $scope.work.url + '/',
            'pageTitle': $scope.work.name,
            'title': $scope.work.name + ' by Andrew McConville',
            'description': $scope.work.excerpt,
            'image': 'http://andrewmcconville.com/wp-content/uploads/' + $scope.work.defaultImage + '-thumbnail.jpg',
            'name': $scope.work.name,
            'section': $scope.work.category,
            'date': $scope.work.date
        });
	}]);