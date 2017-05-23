(function(){
    function imageCtrl($scope, $http, $filter, getImg) {
    
    // $http({
    //     method: 'GET',
    //     url: 'http://localhost:3000/api/work',
    // }).then(function successCallback(success) {
    //     $scope.display_images = success.data.works;
    // }, function errorCallback(error) {
    //     console.log(error);
    // });

// get Image from server and set the value to image;
    getImg.getImage().then(function(result){
        console.log(result.data);
        $scope.images = result.data.works;
    }).catch(function(error){
        console.error(error);
    });



//
    $scope.addVisable = false;
    $scope.editVisable = false;
    $scope.tempItem = {};
    $scope.editItem = {}

    $scope.toggleAdd = function() {
        $scope.addVisable = true;
    };

//trigger edit 
    $scope.toggleEdit = function(image) {
        $scope.editVisable = true;
        $scope.tempItem = image;
        $scope.editItem = {
            title: image.title,
            author: image.author,
            like: image.like,
            comment: image.comment
        };
    };

    $scope.myDropDown = 'card';
    $scope.togglePage = function(choice) {
        $scope.myDropDown = choice;
    };


// when click delete button, it will show the spinner and make sure you want to delete.
    $scope.isdeleteVisible = false;
    $scope.removeImage = function() {
        $scope.isdeleteVisible = !$scope.isdeleteVisible;
    };

    $scope.Submit_delete = function($index) {
        $scope.images.splice($index, 1);
        $scope.isdeleteVisible = !$scope.isdeleteVisible;
    };

    $scope.Cancel_delete = function() {
        $scope.isdeleteVisible = !$scope.isdeleteVisible;
    };




    var orderBy = $filter('orderBy');
    $scope.order = function(predicate, reverse) {
        $scope.images = orderBy($scope.images, predicate, reverse);
    };

}

imageCtrl.$inject = ['$scope', '$http', '$filter', 'getImg'];

app.controller("ImageController", imageCtrl);

}())


