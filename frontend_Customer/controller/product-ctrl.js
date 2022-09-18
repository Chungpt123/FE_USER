app.controller('product_controller', function ($scope, $http,$rootScope) {
    $scope.product = {};
    $scope.products = [];
    $scope.product = {};
    $rootScope.id = {};

    const api ="http://buiquanghieu.xyz/PRO2111_FALL2022/user/rest/products/find-by-status-true";
    $http.get(api)
        .then(function(response){
            $scope.products = response.data;
        }).catch(function (error) {
        });
})