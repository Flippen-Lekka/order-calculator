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
    };  //Agent Prices
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
    }; //Selling Prices
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
    }; //Retail Proces

    $rootScope.orderValue = '';


})



