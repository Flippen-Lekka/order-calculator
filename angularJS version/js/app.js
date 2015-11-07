/*
 * Package:       Flippen Lekka order calculator
 * Date:          Tue Oct 27 2015
 * Author:        Louis Cabano <www.louiscabano.com>
 * Description:
 *
 *  Louis Cabano <www.ghydesign.co.za>
 * Description:

Copyright (c) */

var orderCal = angular.module("orderCalculator", ['orderCalculator.controllers']);

orderCal.run(function ($rootScope) {

    //Dynamic Text Scopes

    $rootScope.pricingType = 'Agent Pricing';

    //Global Product values in rootScope

    $rootScope.agentPricing = {
        original: {
            _100ml: 11,
            _200ml: 18,
            _500g: 45,
            _750g: 60,
            _1kgB: 80,
            _1kgT: 85
        },
        hot: {
            _100ml: 11,
            _200ml: 18,
            _500g: 45,
            _750g: 60,
            _1kgB: 80,
            _1kgT: 85
        },
        wS: {
            _100ml: 11,
            _200ml: 18,
            _500g: 45,
            _750g: 60,
            _1kgB: 80,
            _1kgT: 85
        },
        cM: {
             _250ml: 18,
             _500g: 60,
             _1kgB: 80,
        }
    };                  //Agent Prices
    $rootScope.recommendedSellingPrice = {
        original: {
            _100ml: 20,
            _200ml: 30,
            _500g: 45,
            _750g: 60,
            _1kgB: 80,
            _1kgT: 85
        },
        hot: {
            _100ml: 20,
            _200ml: 30,
            _500g: 45,
            _750g: 60,
            _1kgB: 80,
            _1kgT: 85
        },
        wS: {
            _100ml: 11,
            _200ml: 18,
            _500g: 45,
            _750g: 60,
            _1kgB: 80,
            _1kgT: 85
        },
        cM: {
             _250ml: 18,
          _500g: 60,
            _1kgB: 80,
        }
    };       //Selling Prices
    $rootScope.recommendedRetailPrice = {
        original: {
            _100ml: 20,
            _200ml: 30,
            _500g: 45,
            _750g: 60,
            _1kgB: 80,
            _1kgT: 85
        },
        hot: {
            _100ml: 20,
            _200ml: 30,
            _500g: 45,
            _750g: 60,
            _1kgB: 80,
            _1kgT: 85
        },
        wS: {
            _100ml: 28,
            _200ml: 18,
            _500g: 45,
            _750g: 60,
            _1kgB: 80,
            _1kgT: 85
        },
        cM: {
             _250ml: 18,
          _500g: 60,
            _1kgB: 90,
        }
    };        //Retail Prices

        //Product Weights

    $rootScope.weight = {
    dry: {
        original: {
            _100ml: 0.095,
            _200ml: 0.180,
            _500g: 0.500,
            _750g: 0.750,
            _1kgB: 1.0,
            _1kgT: 1.0
        },
        hot: {
            _100ml: 0.095,
            _200ml: 0.180,
            _500g: 0.500,
            _750g: 0.750,
            _1kgB: 1.0,
            _1kgT: 1.0
        },
        wS: {
            _100ml: 0.095,
            _200ml: 0.180,
            _500g: 0.500,
            _750g: 0.750,
            _1kgB: 1.0,
            _1kgT: 1.0
        },
        cM: {
            _250ml: 0.180,
            _500g: 0.500,
            _1kgB: 1.0,
        }
    },
    ship: {
        original: {
            _100ml: 0.125,
            _200ml: 0.215,
            _500g: 0.510,
            _750g: 0.800,
            _1kgB: 1.010,
            _1kgT: 1.050
        },
        hot: {
            _100ml: 0.125,
            _200ml: 0.215,
            _500g: 0.510,
            _750g: 0.800,
            _1kgB: 1.010,
            _1kgT: 1.050
        },
        wS: {
            _100ml: 0.125,
            _200ml: 0.215,
            _500g: 0.510,
            _750g: 0.800,
            _1kgB: 1.010,
            _1kgT: 1.050
        },
        cM: {
            _250ml: 0.215,
            _500g: 0.510,
            _1kgB: 1.020,
        }
    }
};


    //Empty Product Order Values

    //Prices

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

    //Weights

    //Dry
     //Original
    $rootScope.total100mlDry = 0;
    $rootScope.total200mlDry = 0;
    $rootScope.total500gDry = 0;
    $rootScope.total750gDry = 0;
    $rootScope.total1kgVDry = 0;
    $rootScope.total1kgTDry = 0;

     //Hot
    $rootScope.total100mlHDry = 0;
    $rootScope.total200mlHDry = 0;
    $rootScope.total500gHDry = 0;
    $rootScope.total750gHDry = 0;
    $rootScope.total1kgVHDry = 0;
    $rootScope.total1kgTHDry = 0;

    //Ws
    $rootScope.total100mlWsDry = 0;
    $rootScope.total200mlWsDry = 0;
    $rootScope.total500gWsDry = 0;
    $rootScope.total750gWsDry = 0;
    $rootScope.total1kgVWsDry = 0;
    $rootScope.total1kgTWsDry = 0;

    //Curry Mix
    $rootScope.total250mlCDry = 0;
    $rootScope.total500gCDry = 0;
    $rootScope.total1kgCDry = 0;

    //Shipping
     //Original
    $rootScope.total100mlShip = 0;
    $rootScope.total200mlShip = 0;
    $rootScope.total500gShip = 0;
    $rootScope.total750gShip = 0;
    $rootScope.total1kgVShip = 0;
    $rootScope.total1kgTShip = 0;

    //Hot
    $rootScope.total100mlHShip = 0;
    $rootScope.total200mlHShip = 0;
    $rootScope.total500gHShip = 0;
    $rootScope.total750gHShip = 0;
    $rootScope.total1kgVHShip = 0;
    $rootScope.total1kgTHShip = 0;

    //Ws
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

    //Stock Values

    $rootScope.flsStock = 0;
    $rootScope.flsHStock = 0;
    $rootScope.wsStock = 0;
    $rootScope.cmStock = 0;


})



