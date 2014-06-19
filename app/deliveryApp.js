/*#######################################################################

  Juan Urtazun

  #######################################################################*/

/// <reference path="../Scripts/angular.min.js"  /> AngularJS v1.2.9


/*#######################################################################

  /app
      /controllers
      /directives
      /services
      /partials
      /views
      /filters

  #######################################################################*/


var app = angular.module('myDeliveryApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ui.bootstrap.showErrors', 'angular-underscore']);


//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/deliveries',
            {
                controller: 'DeliveriesController',
                templateUrl: 'deliveries.html'
            })
        //Define a route that has a route parameter in it (:deliveryID)
        .when('/delivery/:deliveryID',
            {
                controller: 'DeliveryController',
                templateUrl: 'delivery.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/makeOrderForDelivery/:deliveryID',
            {
                controller: 'DeliveryController',
                templateUrl: 'makeOrder.html'
            })
        .otherwise({ redirectTo: '/deliveries' });
});




