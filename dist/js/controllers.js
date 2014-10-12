/**
 * Created by Dimitar Belchugov on 11.10.2014 г..
 */
'use strict';

myApp.controller('LiveQuotes', function($scope, $http, $timeout, $location, providers) {

    $scope.counter;

    providers.list(function(providers){
        $scope.providers = providers;
    });

    $scope.onTimeout = function(){
        $scope.counter--;
        myTimeOut = $timeout($scope.onTimeout,1000);
        if($scope.counter === 0) {
            $timeout.cancel(myTimeOut);
        }
    };

    $scope.counterStop = function(){
        $timeout.cancel(myTimeOut);
    };

    var myTimeOut = $timeout($scope.onTimeout,1000);

    $scope.increaseRates = function(){

        function addRate(element){
            element.rate = ((element.rate * 1000) + (_.random(1, 6) * 10)) / 1000 ;
        }
        $scope.providers.map(addRate);
    };

    $scope.refreshQuote = function(){
        $scope.counter = $scope.startTime;
        $scope.statusStyle = "";
        var animateTimeout = $timeout(function(){
            $scope.statusStyle = "status-" + $scope.startTime;
        }, 300);

        $scope.increaseRates();

        myTimeOut = $timeout($scope.onTimeout,1000);
    };

    $scope.bookProvider = function(name){
        $scope.counterStop();
        $scope.bookOverlay = true;
        $timeout(function(){
            $location.path('/' + name);
            $location.replace();
        },3000);

    };
});

myApp.controller('providerDetailCtrl', function($scope, $routeParams){
    $scope.name = $routeParams.providerName;
});