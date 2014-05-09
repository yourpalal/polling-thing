// started at like 11:20?

IssuesController = function ($scope, $timeout, $http) {
	$scope.json_url = 

	$scope.issues = [];
	$scope.setTimeout = function() {
		$timeout($scope.updateIssues, 1000, true);
	};


	$scope.updateIssues = function() {
		$http({method: 'GET', url: 'https://api.github.com/repos/yourpalal/polling-thing/issues'})
			.success(function(data, status, headers, config) {
				$scope.issues = data;
			})
			.error(function(data, status, headers, config) {
			})
	};
	$scope.setTimeout();
}
