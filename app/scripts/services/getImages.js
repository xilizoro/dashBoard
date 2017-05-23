(function() {

    function getImages($http) {
        return {
            getImage: function() {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:3000/api/work'
                }).then(function(result) {
                    return result;
                }).catch(function(error) {
                    console.error(error);
                });
            }
        }

    };

    getImages.$inject = ['$http'];

    app.factory('getImg', getImages);

}())
