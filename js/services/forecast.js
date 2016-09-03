app.factory('forecast', ['$http', function($http) { 
  return $http.get('http://api.wunderground.com/api/47be6887c60a72bf/forecast10day/q/CA/San_Francisco.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
