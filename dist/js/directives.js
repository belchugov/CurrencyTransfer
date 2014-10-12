/**
 * Created by Dimitar Belchugov on 11.10.2014 г..
 */
'use strict';

myApp.directive('timer', function(){
    return {
        restrict: 'E',
        template: '<div class="expire">Quotes expires in: ' +
                  '<span> {{ counter }} ' +
                  '{{counter !== 1 ? "seconds" : "second"}}</span></div>',
        link: function linkFn(scope, lElements, attrs){
            scope.startTime = attrs.startTime;
            scope.counter = attrs.startTime;
            scope.statusStyle = "status-" + attrs.startTime;
        },
        replace: true
    }
});

