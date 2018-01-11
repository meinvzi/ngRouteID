app.factory('baseconfig', function($http, $q) {
    return {
        ajax: function(url, type) {
            var def = $q.defer();
            $http({
                url: url,
                method: type || "GET"
            }).then(function(result) {
                def.resolve(result)
            }, function(error) {
                def.reject(error)
            })
            return def.promise;
        }
    }
})