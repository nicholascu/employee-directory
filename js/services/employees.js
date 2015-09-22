app.factory('employees', ['$http', function($http) { 
  return $http.get('http://0.0.0.0:3000/users/directory_home.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);