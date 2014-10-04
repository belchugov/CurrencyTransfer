/**
 * Created by Dimitar Belchugov on 4.10.2014 г..
 */

function LiveQuotes($scope,$timeout){
    $scope.counter = 15;
    $scope.providers = [{
        'name': 'Sable',
        'sending': '20000',
        'sendingISO': 'GBP',
        'rate': 51.128,
        'receive': '35000',
        'receiveISO': 'USD',
        'saving': '110.20',
        'savingISO': "£"
    }, {
        'name': 'Infinity',
        'sending': '1000000',
        'sendingISO': 'GBP',
        'rate': 51.128,
        'receive': '173084568',
        'receiveISO': 'JPY',
        'saving': '110.20',
        'savingISO': "£"
    }, {
        'name': 'The FX firm',
        'sending': '50000000',
        'sendingISO': 'MMM',
        'rate': 51.128,
        'receive': '173084568',
        'receiveISO': 'MMM',
        'saving': '110.20',
        'savingISO': "£"
    }, {
        'name': 'Sable',
        'sending': '20000',
        'sendingISO': 'GBP',
        'rate': 51.128,
        'receive': '35000',
        'receiveISO': 'USD',
        'saving': '110.20',
        'savingISO': "£"
    }, {
        'name': 'Infinity',
        'sending': '50000000',
        'sendingISO': 'MMM',
        'rate': 51.128,
        'receive': '50000000',
        'receiveISO': 'MMM',
        'saving': '110.20',
        'savingISO': "£"
    }

    ];

    $scope.onTimeout = function(){
        $scope.counter--;
        mytimeout = $timeout($scope.onTimeout,1000);
        if($scope.counter === 0) {
            $timeout.cancel(mytimeout);
        }
    }
    var mytimeout = $timeout($scope.onTimeout,1000);

}
