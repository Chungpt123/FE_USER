app.controller('detail_controller', function ($scope, $http,$routeParams) {
    //get product
    $scope.option_vulues = [];
    $scope.option_sizes = [];
    $scope.option_colors = [];
    $scope.option_designs = [];
    $scope.option_materials = [];
    $scope.product = {};
   
  
    $http.get('http://buiquanghieu.xyz/PRO2111_FALL2022/user/rest/option-optionvalue/find-by-product/' + $routeParams.id)
        .then(function(response){
            console.log(response.data);
            $scope.option_vulues = response.data;
            $scope.option_sizes = search(7, response.data); 
            $scope.option_colors = search(15, response.data);
            $scope.option_designs = search(7, response.data);
            $scope.option_materials = search(9, response.data);              
        })
        .catch(function (error){
            console.log(error);
        }
    )
    //Tìm kiếm optionValues theo optionId
    function search(id, myArray){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].option.optionId === id) { 
                console.log(myArray[i].optionValues);              
                return myArray[i].optionValues;
            }
        }
    }
    //In
    $scope.onSelect = async function (size) {
        console.log(size);
    }  
})