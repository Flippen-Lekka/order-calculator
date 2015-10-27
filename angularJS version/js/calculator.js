/*
 * Package:       Flippen Lekka order calculator
 * Date:          Tue Oct 27 2015
 * Author:        Louis Cabano <www.louiscabano.com>
 * Description:
 *
 *  is Cabano <www.ghydesign.co.za>
 * Description:

Copyright (c) */

var orderCal = angular.module("orderCalculator",[]);

orderCal.controller('CalculatorCtrl', function ($scope) {
 $scope.orderValue = '';

    $scope.calculate = function() {
        $scope.orderValue = 'aa';
        console.log('it works');
    }
});

orderCal.controller('ResultsCtrl', function ($scope) {
    $scope.orderValue = '3';

    $scope.calculate = function() {
        $scope.orderValue = 'aa';
    }

});




