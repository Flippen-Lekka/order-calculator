/*
 * Package:       Flippen Lekka order calculator
 * Date:          Tue Oct 27 2015
 * Author:        Louis Cabano <www.louiscabano.com>
 * Description:
 *
 *  Louis Cabano <www.ghydesign.co.za>
 * Description:

Copyright (c) */


// TO DO

// Collect form totals (Copy functions and complete html tags)




angular.module('orderCalculator.controllers', [])


orderCal.controller('PriceCtrl', function ($scope, $rootScope) {
    //Variables used in the controller
    var a = document.getElementById('agentPrice');
    var b = document.getElementById('sellingPrice');
    var c = document.getElementById('retailPrice');

    $rootScope.defaultPricing = $rootScope.agentPricing;

    $scope.selectPrice = function () {

            if (a.checked) {
                $rootScope.defaultPricing = $rootScope.agentPricing;
                $rootScope.pricingType = 'Agent Pricing';

            } else if (b.checked) {
                $rootScope.defaultPricing = $rootScope.recommendedSellingPrice;
                $rootScope.pricingType = 'Recommended Selling Prices';
            } else if (c.checked) {
                $rootScope.defaultPricing = $rootScope.recommendedRetailPrice;
                $rootScope.pricingType = 'Recommended Retail Pricing';
            }
        } // Select Pricing Option

});

orderCal.controller('CalculatorCtrl', function ($scope, $rootScope) {

    $scope.restart = function () {

        $rootScope.orderContents = false;


        // Reset Prices

        //Original
        $rootScope.total100mlPrice = 0;
        $rootScope.total200mlPrice = 0;
        $rootScope.total500gPrice = 0;
        $rootScope.total750gPrice = 0;
        $rootScope.total1kgVPrice = 0;
        $rootScope.total1kgTPrice = 0;

        //Hot
        $rootScope.total100mlHPrice = 0;
        $rootScope.total200mlHPrice = 0;
        $rootScope.total500gHPrice = 0;
        $rootScope.total750gHPrice = 0;
        $rootScope.total1kgVHPrice = 0;
        $rootScope.total1kgTHPrice = 0;

        //WS
        $rootScope.total100mlWsPrice = 0;
        $rootScope.total200mlWsPrice = 0;
        $rootScope.total500gWsPrice = 0;
        $rootScope.total750gWsPrice = 0;
        $rootScope.total1kgVWsPrice = 0;
        $rootScope.total1kgTWsPrice = 0;

        //Curry Mix
        $rootScope.total250mlCPrice = 0;
        $rootScope.total500gCPrice = 0;
        $rootScope.total1kgCPrice = 0;

        // Reset Weights

        //Original
        $rootScope.total100mlDry = 0;
        $rootScope.total200mlDry = 0;
        $rootScope.total500gDry = 0;
        $rootScope.total750gDry = 0;
        $rootScope.total1kgVDry = 0;
        $rootScope.total1kgTDry = 0;
        $rootScope.total100mlShip = 0;
        $rootScope.total200mlShip = 0;
        $rootScope.total500gShip = 0;
        $rootScope.total750gShip = 0;
        $rootScope.total1kgVShip = 0;
        $rootScope.total1kgTShip = 0;

        //Hot
        $rootScope.total100mlHDry = 0;
        $rootScope.total200mlHDry = 0;
        $rootScope.total500gHDry = 0;
        $rootScope.total750gHDry = 0;
        $rootScope.total1kgVHDry = 0;
        $rootScope.total1kgTHDry = 0;
        $rootScope.total100mlHShip = 0;
        $rootScope.total200mlHShip = 0;
        $rootScope.total500gHShip = 0;
        $rootScope.total750gHShip = 0;
        $rootScope.total1kgVHShip = 0;
        $rootScope.total1kgTHShip = 0;

        //WS
        $rootScope.total100mlWsDry = 0;
        $rootScope.total200mlWsDry = 0;
        $rootScope.total500gWsDry = 0;
        $rootScope.total750gWsDry = 0;
        $rootScope.total1kgVWsDry = 0;
        $rootScope.total1kgTWsDry = 0;
        $rootScope.total100mlWsShip = 0;
        $rootScope.total200mlWsShip = 0;
        $rootScope.total500gWsShip = 0;
        $rootScope.total750gWsShip = 0;
        $rootScope.total1kgVWsShip = 0;
        $rootScope.total1kgTWsShip = 0;

        //Curry Mix
        $rootScope.total250mlCShip = 0;
        $rootScope.total500gCShip = 0;
        $rootScope.total1kgCShip = 0;

        //Clear Fields

        //Original
        $scope.x100ml = '';
        $scope.x200ml = '';
        $scope.x500g = '';
        $scope.x750g = '';
        $scope.x1kgV = '';
        $scope.x1kgT = '';

        //Hot
        $scope.x100mlH = '';
        $scope.x200mlH = '';
        $scope.x500gH = '';
        $scope.x750gH = '';
        $scope.x1kgVH = '';
        $scope.x1kgTH = '';

        //WS
        $scope.x100mlWs = '';
        $scope.x200mlWs = '';
        $scope.x500gWs = '';
        $scope.x750gWs = '';
        $scope.x1kgVWs = '';
        $scope.x1kgTWs = '';

        //Curry Mix
        $scope.x250mlC = '';
        $scope.x500gC = '';
        $scope.x1kgC = '';
    }



    $scope.calculate = function () {


        //Collect Form Totals into scope

        //Original
        $rootScope.total100ml = $scope.x100ml;
        $rootScope.total200ml = $scope.x200ml;
        $rootScope.total500g = $scope.x500g;
        $rootScope.total750g = $scope.x750g;
        $rootScope.total1kgV = $scope.x1kgV;
        $rootScope.total1kgT = $scope.x1kgT;

        //Hot
        $rootScope.total100mlH = $scope.x100mlH;
        $rootScope.total200mlH = $scope.x200mlH;
        $rootScope.total500gH = $scope.x500gH;
        $rootScope.total750gH = $scope.x750gH;
        $rootScope.total1kgVH = $scope.x1kgVH;
        $rootScope.total1kgTH = $scope.x1kgTH;

        //WS
        $rootScope.total100mlWs = $scope.x100mlWs;
        $rootScope.total200mlWs = $scope.x200mlWs;
        $rootScope.total500gWs = $scope.x500gWs;
        $rootScope.total750gWs = $scope.x750gWs;
        $rootScope.total1kgVWs = $scope.x1kgVWs;
        $rootScope.total1kgTWs = $scope.x1kgTWs;

        //Curry Mix
        $rootScope.total250mlC = $scope.x250mlC;
        $rootScope.total500gC = $scope.x500gC;
        $rootScope.total1kgC = $scope.x1kgC;

        // ng-IF varialbles to show only the required results

        //Original
        $rootScope.total100mlx = $rootScope.total100ml;
        $rootScope.total200mlx = $rootScope.total200ml;
        $rootScope.total500gx = $rootScope.total500g;
        $rootScope.total750gx = $rootScope.total750g;
        $rootScope.total1kgVx = $rootScope.total1kgV;
        $rootScope.total1kgTx = $rootScope.total1kgT;

        //Hot
        $rootScope.total100mlHx = $rootScope.total100mlH;
        $rootScope.total200mlHx = $rootScope.total200mlH;
        $rootScope.total500gHx = $rootScope.total500gH;
        $rootScope.total750gHx = $rootScope.total750gH;
        $rootScope.total1kgVHx = $rootScope.total1kgVH;
        $rootScope.total1kgTHx = $rootScope.total1kgTH;

        //WS
        $rootScope.total100mlWsx = $rootScope.total100mlWs;
        $rootScope.total200mlWsx = $rootScope.total200mlWs;
        $rootScope.total500gWsx = $rootScope.total500gWs;
        $rootScope.total750gWsx = $rootScope.total750gWs;
        $rootScope.total1kgVWsx = $rootScope.total1kgVWs;
        $rootScope.total1kgTWsx = $rootScope.total1kgTWs;

        //Curry Mix
        $rootScope.total250mlCx = $rootScope.total250mlC;
        $rootScope.total500gCx = $rootScope.total500gC;
        $rootScope.total1kgCx = $rootScope.total1kgC;


        // ng-IF function to determine if there is a result

        if (
            $rootScope.total100ml |
            $rootScope.total200ml |
            $rootScope.total500g |
            $rootScope.total750g |
            $rootScope.total1kgV |
            $rootScope.total1kgT |
            $rootScope.total100mlH |
            $rootScope.total200mlH |
            $rootScope.total500gH |
            $rootScope.total750gH|
            $rootScope.total1kgVH |
            $rootScope.total1kgTH |
            $rootScope.total100mlWs |
            $rootScope.total200mlWs |
            $rootScope.total500gWs |
            $rootScope.total750gWs |
            $rootScope.total1kgVWs |
            $rootScope.total1kgTWs |
            $rootScope.total250mlC |
            $rootScope.total500gC |
            $rootScope.total1kgC
        ) {
            $rootScope.orderContents = true;
        }

        //Product Total Calculations

        //Original
        if ($rootScope.total100ml) {
            $rootScope.total100mlPrice = ($scope.total100ml * $rootScope.defaultPricing.original._100ml);
        }
        if ($rootScope.total200ml) {
            $rootScope.total200mlPrice = ($scope.total200ml * $rootScope.defaultPricing.original._200ml);
        }
        if ($rootScope.total500g) {
            $rootScope.total500gPrice = ($scope.total500g * $rootScope.defaultPricing.original._500g);
        }
        if ($rootScope.total750g) {
            $rootScope.total750gPrice = ($scope.total750g * $rootScope.defaultPricing.original._750g);
        }
        if ($rootScope.total1kgV) {
            $rootScope.total1kgVPrice = ($scope.total1kgV * $rootScope.defaultPricing.original._1kgB);
        }
        if ($rootScope.total1kgT) {
            $rootScope.total1kgTPrice = ($scope.total1kgT * $rootScope.defaultPricing.original._1kgT);
        }

        //Hot
        if ($rootScope.total100mlH) {
            $rootScope.total100mlHPrice = ($scope.total100mlH * $rootScope.defaultPricing.hot._100ml);
        }
        if ($rootScope.total200mlH) {
            $rootScope.total200mlHPrice = ($scope.total200mlH * $rootScope.defaultPricing.hot._200ml);
        }
        if ($rootScope.total500gH) {
            $rootScope.total500gHPrice = ($scope.total500gH * $rootScope.defaultPricing.hot._500g);
        }
        if ($rootScope.total750gH) {
            $rootScope.total750gHPrice = ($scope.total750gH * $rootScope.defaultPricing.hot._750g);
        }
        if ($rootScope.total1kgVH) {
            $rootScope.total1kgVHPrice = ($scope.total1kgVH * $rootScope.defaultPricing.hot._1kgB);
        }
        if ($rootScope.total1kgTH) {
            $rootScope.total1kgTHPrice = ($scope.total1kgTH * $rootScope.defaultPricing.hot._1kgT);
        }

        //Ws
        if ($rootScope.total100mlWs) {
            $rootScope.total100mlWsPrice = ($scope.total100mlWs * $rootScope.defaultPricing.wS._100ml);
        }
        if ($rootScope.total200mlWs) {
            $rootScope.total200mlWsPrice = ($scope.total200mlWs * $rootScope.defaultPricing.wS._200ml);
        }
        if ($rootScope.total500gWs) {
            $rootScope.total500gWsPrice = ($scope.total500gWs * $rootScope.defaultPricing.wS._500g);
        }
        if ($rootScope.total750gWs) {
            $rootScope.total750gWsPrice = ($scope.total750gWs * $rootScope.defaultPricing.wS._750g);
        }
        if ($rootScope.total1kgVWs) {
            $rootScope.total1kgVWsPrice = ($scope.total1kgVWs * $rootScope.defaultPricing.wS._1kgB);
        }
        if ($rootScope.total1kgTWs) {
            $rootScope.total1kgTWsPrice = ($scope.total1kgTWs * $rootScope.defaultPricing.wS._1kgT);
        }

        //Curry Mix
        if ($rootScope.total250mlC) {
            $rootScope.total250mlCPrice = ($scope.total250mlC * $rootScope.defaultPricing.cM._250ml);
        }
        if ($rootScope.total500gC) {
            $rootScope.total500gCPrice = ($scope.total500gC * $rootScope.defaultPricing.cM._500g);
        }
        if ($rootScope.total1kgC) {
            $rootScope.total1kgCPrice = ($scope.total1kgC * $rootScope.defaultPricing.cM._1kgB);
        }

        //Dry Weight Calculations


        //Original
        if ($rootScope.total100ml) {
            $rootScope.total100mlDry = ($scope.total100ml * $rootScope.weight.dry.original._100ml);
        }
        if ($rootScope.total200ml) {
            $rootScope.total200mlDry = ($scope.total200ml * $rootScope.weight.dry.original._200ml);
        }
        if ($rootScope.total500g) {
            $rootScope.total500gDry = ($scope.total500g * $rootScope.weight.dry.original._500g);
        }
        if ($rootScope.total750g) {
            $rootScope.total750gDry = ($scope.total750g * $rootScope.weight.dry.original._750g);
        }
        if ($rootScope.total1kgV) {
            $rootScope.total1kgVDry = ($scope.total1kgV * $rootScope.weight.dry.original._1kgB);
        }
        if ($rootScope.total1kgT) {
            $rootScope.total1kgTDry = ($scope.total1kgT * $rootScope.weight.dry.original._1kgT);
        }

        //Hot
        if ($rootScope.total100mlH) {
            $rootScope.total100mlHDry = ($scope.total100mlH * $rootScope.weight.dry.hot._100ml);
        }
        if ($rootScope.total200mlH) {
            $rootScope.total200mlHDry = ($scope.total200mlH * $rootScope.weight.dry.hot._200ml);
        }
        if ($rootScope.total500gH) {
            $rootScope.total500gHDry = ($scope.total500gH * $rootScope.weight.dry.hot._500g);
        }
        if ($rootScope.total750gH) {
            $rootScope.total750gHDry = ($scope.total750gH * $rootScope.weight.dry.hot._750g);
        }
        if ($rootScope.total1kgVH) {
            $rootScope.total1kgVHDry = ($scope.total1kgVH * $rootScope.weight.dry.hot._1kgB);
        }
        if ($rootScope.total1kgTH) {
            $rootScope.total1kgTHDry = ($scope.total1kgTH * $rootScope.weight.dry.hot._1kgT);
        }

        //WS
        if ($rootScope.total100mlWs) {
            $rootScope.total100mlWsDry = ($scope.total100mlWs * $rootScope.weight.dry.wS._100ml);
        }
        if ($rootScope.total200mlWs) {
            $rootScope.total200mlWsDry = ($scope.total200mlWs * $rootScope.weight.dry.wS._200ml);
        }
        if ($rootScope.total500gWs) {
            $rootScope.total500gWsDry = ($scope.total500gWs * $rootScope.weight.dry.wS._500g);
        }
        if ($rootScope.total750gWs) {
            $rootScope.total750gWsDry = ($scope.total750gWs * $rootScope.weight.dry.wS._750g);
        }
        if ($rootScope.total1kgVWs) {
            $rootScope.total1kgVWsDry = ($scope.total1kgVWs * $rootScope.weight.dry.wS._1kgB);
        }
        if ($rootScope.total1kgTWs) {
            $rootScope.total1kgTWsDry = ($scope.total1kgTWs * $rootScope.weight.dry.wS._1kgT);
        }

        //Curry Mix
        if ($rootScope.total250mlC) {
            $rootScope.total250mlCDry = ($scope.total250mlC * $rootScope.weight.dry.cM._250ml);
        }
        if ($rootScope.total500gC) {
            $rootScope.total500gCDry = ($scope.total500gC * $rootScope.weight.dry.cM._500g);
        }
        if ($rootScope.total1kgC) {
            $rootScope.total1kgCDry = ($scope.total1kgC * $rootScope.weight.dry.cM._1kgB);
        }


        //Shipping Weight Calculations

        //Original
        if ($rootScope.total100ml) {
            $rootScope.total100mlShip = ($scope.total100ml * $rootScope.weight.ship.original._100ml);
        }
        if ($rootScope.total200ml) {
            $rootScope.total200mlShip = ($scope.total200ml * $rootScope.weight.ship.original._200ml);
        }
        if ($rootScope.total500g) {
            $rootScope.total500gShip = ($scope.total500g * $rootScope.weight.ship.original._500g);
        }
        if ($rootScope.total750g) {
            $rootScope.total750gShip = ($scope.total750g * $rootScope.weight.ship.original._750g);
        }
        if ($rootScope.total1kgV) {
            $rootScope.total1kgVShip = ($scope.total1kgV * $rootScope.weight.ship.original._1kgB);
        }
        if ($rootScope.total1kgT) {
            $rootScope.total1kgTShip = ($scope.total1kgT * $rootScope.weight.ship.original._1kgT);
        }


        //Hot
        if ($rootScope.total100mlH) {
            $rootScope.total100mlHShip = ($scope.total100mlH * $rootScope.weight.ship.hot._100ml);
        }
        if ($rootScope.total200mlH) {
            $rootScope.total200mlHShip = ($scope.total200mlH * $rootScope.weight.ship.hot._200ml);
        }
        if ($rootScope.total500gH) {
            $rootScope.total500gHShip = ($scope.total500gH * $rootScope.weight.ship.hot._500g);
        }
        if ($rootScope.total750gH) {
            $rootScope.total750gHShip = ($scope.total750gH * $rootScope.weight.ship.hot._750g);
        }
        if ($rootScope.total1kgVH) {
            $rootScope.total1kgVHShip = ($scope.total1kgVH * $rootScope.weight.ship.hot._1kgB);
        }
        if ($rootScope.total1kgTH) {
            $rootScope.total1kgTHShip = ($scope.total1kgTH * $rootScope.weight.ship.hot._1kgT);
        }


                //WS
        if ($rootScope.total100mlWs) {
            $rootScope.total100mlWsShip = ($scope.total100mlWs * $rootScope.weight.ship.wS._100ml);
        }
        if ($rootScope.total200mlWs) {
            $rootScope.total200mlWsShip = ($scope.total200mlWs * $rootScope.weight.ship.wS._200ml);
        }
        if ($rootScope.total500gWs) {
            $rootScope.total500gWsShip = ($scope.total500gWs * $rootScope.weight.ship.wS._500g);
        }
        if ($rootScope.total750gWs) {
            $rootScope.total750gWsShip = ($scope.total750gWs * $rootScope.weight.ship.wS._750g);
        }
        if ($rootScope.total1kgVWs) {
            $rootScope.total1kgVWsShip = ($scope.total1kgVWs * $rootScope.weight.ship.wS._1kgB);
        }
        if ($rootScope.total1kgTWs) {
            $rootScope.total1kgTWsShip = ($scope.total1kgTWs * $rootScope.weight.ship.wS._1kgT);
        }

        //Curry Mix
        if ($rootScope.total250mlC) {
            $rootScope.total250mlCShip = ($scope.total250mlC * $rootScope.weight.ship.cM._250ml);
        }
        if ($rootScope.total500gC) {
            $rootScope.total500gCShip = ($scope.total500gC * $rootScope.weight.ship.cM._500g);
        }
        if ($rootScope.total1kgC) {
            $rootScope.total1kgCShip = ($scope.total1kgC * $rootScope.weight.ship.cM._1kgB);
        }


        // Master Results -------------------------------------

        //Order Total
        $rootScope.orderValue = (
            $rootScope.total100mlPrice +
            $rootScope.total200mlPrice +
            $rootScope.total500gPrice +
            $rootScope.total750gPrice +
            $rootScope.total1kgVPrice +
            $rootScope.total1kgTPrice +
            $rootScope.total100mlHPrice +
            $rootScope.total200mlHPrice +
            $rootScope.total500gHPrice +
            $rootScope.total750gHPrice +
            $rootScope.total1kgVHPrice +
            $rootScope.total1kgTHPrice +
            $rootScope.total100mlWsPrice +
            $rootScope.total200mlWsPrice +
            $rootScope.total500gWsPrice +
            $rootScope.total750gWsPrice +
            $rootScope.total1kgVWsPrice +
            $rootScope.total1kgTWsPrice +
            $rootScope.total250mlCPrice +
            $rootScope.total500gCPrice +
            $rootScope.total1kgCPrice
        );


        //Total Shipping Weight
        $rootScope.totalWeight = (
            $rootScope.total100mlShip +
            $rootScope.total200mlShip +
            $rootScope.total500gShip +
            $rootScope.total750gShip +
            $rootScope.total1kgVShip +
            $rootScope.total1kgTShip +
            $rootScope.total100mlHShip +
            $rootScope.total200mlHShip +
            $rootScope.total500gHShip +
            $rootScope.total750gHShip +
            $rootScope.total1kgVHShip +
            $rootScope.total1kgTHShip +
            $rootScope.total100mlWsShip +
            $rootScope.total200mlWsShip +
            $rootScope.total500gWsShip +
            $rootScope.total750gWsShip +
            $rootScope.total1kgVWsShip +
            $rootScope.total1kgTWsShip +
            $rootScope.total250mlCShip +
            $rootScope.total500gCShip +
            $rootScope.total1kgCShip
        );


        //Stock Required

        //FLS Original
        $rootScope.flsStock = (
            $rootScope.total100mlDry +
            $rootScope.total200mlDry +
            $rootScope.total500gDry +
            $rootScope.total750gDry +
            $rootScope.total1kgVDry +
            $rootScope.total1kgTDry
        );
        $rootScope.flsHStock = (
            $rootScope.total100mlHDry +
            $rootScope.total200mlHDry +
            $rootScope.total500gHDry +
            $rootScope.total750gHDry +
            $rootScope.total1kgVHDry +
            $rootScope.total1kgTHDry
        );
        $rootScope.wsStock = (
            $rootScope.total100mlWsDry +
            $rootScope.total200mlWsDry +
            $rootScope.total500gWsDry +
            $rootScope.total750gWsDry +
            $rootScope.total1kgVWsDry +
            $rootScope.total1kgTWsDry
        );


        $rootScope.cmStock = (
            $rootScope.total250mlCDry +
            $rootScope.total500gCDry +
            $rootScope.total1kgCDry
        );
    }




});
