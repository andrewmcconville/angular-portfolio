angular
	.module('portfolio')
	.controller('workListCtrl', ['$scope', '$state', 'Works', function($scope, $state, Works){
		$scope.category = $state.current.name;

		//if category.details get rid of everythign after the .
		if($scope.category.indexOf(".") > 0){
			$scope.category = $scope.category.substring(0, $scope.category.indexOf("."));
		}

		$scope.works = Works.getWorks($scope.category);

		window.addEventListener("resize", updatePerfectScrollbar);

        function isMobile(){ 
            if( navigator.userAgent.match(/Android/i)
             || navigator.userAgent.match(/webOS/i)
             || navigator.userAgent.match(/iPhone/i)
             || navigator.userAgent.match(/iPad/i)
             || navigator.userAgent.match(/iPod/i)
             || navigator.userAgent.match(/BlackBerry/i)
             || navigator.userAgent.match(/Windows Phone/i)){
                return true;
            } else {
                return false;
            }
        }

        if(!isMobile() && window.innerWidth >= 888){
            Ps.initialize(document.getElementById('js-work-details'), {});
            Ps.initialize(document.getElementById('js-body'), {});
        }

        function updatePerfectScrollbar(){
	        if(!isMobile() && window.innerWidth >= 888){
	            Ps.update(document.getElementById('js-work-details'));
	            Ps.update(document.getElementById('js-body'));
	        }
        }
	}]);