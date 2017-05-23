app.factory("UserService", function($http) {
    return {
        login: function(user) {
            return $http({
                method: 'POST',
                url: 'http://localhost:3000/api/login',
                data: user
            }).then(function(data) {
                    return data;
                },
                function(error) {
                    
                });
        },
        getUser: function(user) {
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/api/getuser',
                params: user
            }).then(function(data) {
                return data;

            }, function(error) {
            
            });
            
        }
    }   
});
