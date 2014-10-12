/**
 * Created by Dimitar Belchugov on 12.10.2014 г..
 */
'use strict';

myApp.factory('providers', function($http){
    return {
       list: function(callback){
           $http.get('providers.json').success(callback);
       }
    };
});


