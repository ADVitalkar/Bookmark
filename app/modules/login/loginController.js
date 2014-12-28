myApp.controller('LoginController', ['$scope','LoginService', function($scope, LoginService) {    
    $scope.AuthLogin = function(){
	    LoginService.setCredentials($scope.userName, $scope.password);
	    LoginService.getCredentials();
	}
}]);