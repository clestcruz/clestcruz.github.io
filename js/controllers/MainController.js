function MyController($scope, $http) {

    $scope.items = [];
    $scope.getItems = function() {

        $http({method : 'GET',url : 'https://api.parse.com/1/classes/Professional', headers: { 'X-Parse-Application-Id':'XXX', 'X-Parse-REST-API-Key':'YYY'}})
            .success(function(data, status) {
                $scope.items = data;
            })
            .error(function(data, status) {
                alert("Error");
            });
    };