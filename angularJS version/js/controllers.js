/*
 * Package:       Flippen Lekka order calculator
 * Date:          Tue Oct 27 2015
 * Author:        Louis Cabano <www.louiscabano.com>
 * Description:
 *
 *  Louis Cabano <www.ghydesign.co.za>
 * Description:

Copyright (c) */

angular.module('orderCalculator.controllers', [])


orderCal.controller('PriceCtrl', function ($scope, $rootScope) {
    //Variables used in the controller
    var a = document.getElementById('agentPrice');
    var b = document.getElementById('sellingPrice');
    var c = document.getElementById('retailPrice');
    var d = document.getElementById('_100mlPrice');

    $rootScope.defaultPricing = $rootScope.agentPricing;

    $scope.selectPrice = function () {

        if (a.checked) {
            $rootScope.defaultPricing = $rootScope.agentPricing;
        } else if (b.checked) {
            $rootScope.defaultPricing = $rootScope.recommendedSellingPrice;
        } else if (c.checked) {
            $rootScope.defaultPricing = $rootScope.recommendedRetailPrice;
        }
    } // Select Pricing Option

});

orderCal.controller('CalculatorCtrl', function ($scope, $rootScope) {

    $scope.calculate = function() {

        $rootScope.orderValue = 10;
    }
});

orderCal.controller('ResultsCtrl', function ($scope) {




});


