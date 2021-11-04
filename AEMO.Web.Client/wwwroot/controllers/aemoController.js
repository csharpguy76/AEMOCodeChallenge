var app = angular.module('aemoApp', []);

app.controller('aemoController', ['$scope', '$http', function($scope, $http) {
    $scope.text = '';
    $scope.subText = '';
    $scope.total = 0;
    $scope.positions = [];
    $scope.errorMsg = '';

    $scope.find = function() {
        $scope.errorMsg = '';

        var config = {
            contentType: 'application/json; odata=verbose',
            params: {
                text: $scope.text,
                subText: $scope.subText
            }
        };

        $http.get(
            'https://aemoservice.azurewebsites.net/Text/MatchString',
            config
            ).then(function success(response) {
                $scope.total = response.data.total;
                $scope.positions = response.data.positions;
        }, function error(response) {
            $scope.errorMsg = "Oops, there was an error!";
        });
    };
}]);