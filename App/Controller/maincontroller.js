app.controller('maincontroller', ['$scope', 'mainservice', function ($scope, mainservice) {
    mainservice.getmain()
        .then(function (result) {
            console.log(result.data);
            $scope.data = result.data;
        })
}])