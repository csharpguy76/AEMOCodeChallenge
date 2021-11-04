var app = angular.module('aemoApp', []);

app.controller('aemoController', ['$scope', '$http', function($scope, $http) {
    $scope.text = '';
    $scope.textErrorMsg = '';
    $scope.subText = '';
    $scope.subTextErrorMsg = '';
    $scope.total = 0;
    $scope.positions = [];
    $scope.errorMsg = '';

    // clear function is bound to the button clear on index.html
    // this will clear the text and sub text input field.
    $scope.clear = function() {
        $scope.text = '';
        $scope.subText = '';
        $scope.total = 0;
        $scope.positions = [];
    };

    // find function is bound to the button find on index.html.
    $scope.find = function () {

        // reset error message properties to empty string
        $scope.errorMsg = '';
        $scope.textErrorMsg = '';
        $scope.subTextErrorMsg = '';

        // validate text property is not empty
        if ($scope.text === '') {
            $scope.textErrorMsg = 'Text field is empty.';
        }

        // validate sub text property is not empty
        if ($scope.subText === '') {
            $scope.subTextErrorMsg = 'Sub Text field is empty.';
        }

        // setup http get configuration to include parameters.
        var config = {
            params: {
                text: $scope.text,
                subText: $scope.subText
            }
        };

        // get request to Web API hosted on Azure.
        $http.get(
            'https://aemoservice.azurewebsites.net/Text/MatchString',
            config
            ).then(function success(response) {
                // display the total and positions if the request was successful.
                $scope.total = response.data.total;
                $scope.positions = response.data.positions;
                if ($scope.total === 0) {
                    // display a message if there is no valid matching sub text found.
                    $scope.errorMsg = 'There were no matching sub text found.';
                }
            }, function error(response) {
            // display status message to the user if error occurs.
            $scope.errorMsg +=  response.status + ' ' + response.statusText;
        });
    };
}]);