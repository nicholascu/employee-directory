app.directive('employeeInfo', function(){
	return {
  	restrict: 'E',
    scope: {
    	info: '='
    },
    templateUrl: 'js/directives/employeeInfo.html'
  };
});