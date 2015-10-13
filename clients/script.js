var storeApp = angular.module('storeApp', ['ngRoute']);

      // the .controller() method adds a controller to the module

storeApp.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: '/partials/customers.html',
        })
        .when('/Orders',{
            templateUrl: '/partials/orders.html',            
        })
        .when('/Products',{
            templateUrl: '/partials/products.html',            
        })
        .otherwise({
          redirectTo: '/'
        });
    });