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

        // Reset Weights

        //Original
        $rootScope.total100mlDry = 0;
        $rootScope.total200mlDry = 0;
        $rootScope.total500gDry = 0;
        $rootScope.total750gDry = 0;
        $rootScope.total1kgVDry = 0;
        $rootScope.total1kgTDry = 0;

        //Clear Fields

        // $scope.x100ml = 0;
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

        // ng-IF varialbles to show only the required results

        //Original
        $rootScope.total100mlx = $rootScope.total100ml;
        $rootScope.total200mlx = $rootScope.total200ml;
        $rootScope.total500gx = $rootScope.total500g;
        $rootScope.total750gx = $rootScope.total750g;
        $rootScope.total1kgVx = $rootScope.total1kgV;
        $rootScope.total1kgTx = $rootScope.total1kgT;

        //Hot



        // ng-IF function to determine if there is a result

        if (
            $rootScope.total100ml |
            $rootScope.total200ml |
            $rootScope.total500g |
            $rootScope.total750g |
            $rootScope.total1kgV |
            $rootScope.total1kgT) {
            $rootScope.orderContents = true;
        }

        //Product Total Calculations
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

        //Dry Weight Calculations


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

        //Shipping Weight Calculations


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



        // Master Results -------------------------------------

        //Order Total
        $rootScope.orderValue = (
            $rootScope.total100mlPrice +
            $rootScope.total200mlPrice +
            $rootScope.total500gPrice +
            $rootScope.total750gPrice +
            $rootScope.total1kgVPrice +
            $rootScope.total1kgTPrice
        );
 console.log($rootScope.total100mlShip);
        //Total Shipping Weight
        $rootScope.totalWeight = (
            $rootScope.total100mlShip +
            $rootScope.total200mlShip +
            $rootScope.total500gShip +
            $rootScope.total750gShip +
            $rootScope.total1kgVShip +
            $rootScope.total1kgTShip
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

    }




});
