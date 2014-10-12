/**
 * Created by Dimitar Belchugov on 4.10.2014 г..
 */
'use strict';

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'content.html',
            controller: 'LiveQuotes'
        }).
        when('/:providerName', {
            templateUrl: 'provider-detail.html',
            controller: 'providerDetailCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
});


