app.controller('pagecontroller',['$scope', 'mainservice','$routeParams', function ($scope, mainservice,$routeParams) {
    $scope.id=$routeParams.id;
    console.log($scope.id)
    mainservice.getmain()
        .then(function (result) {
            result.data.forEach(function(item,index){
                if($scope.id == index){
                    $scope.data = item;
                    console.log(item);
                }
            })
        })
}])