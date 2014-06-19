/*#######################################################################

  Juan Urtazun

  #######################################################################*/




//This controller retrieves data from the deliveriesService and CartService,  and associates it with the $scope
//The $scope is bound to the deliveries partial view
app.controller('DeliveriesController', function ($scope, deliveriesService, CartService){
  init();
  function init() {
    $scope.deliveries = deliveriesService.getDeliveries();
    CartService.reset();
  }
});


//This controller retrieves data from the deliveriesService and CartService,  and associates it with the $scope
//The $scope is bound to the partial delivery view
//@params deliveryID from routeParams

app.controller('DeliveryController', function ($scope, $routeParams, deliveriesService, CartService){
  $scope.orders = CartService.getOrders();
  $scope.user = CartService.getUser();
  $scope.total =  CartService.getTotal() || 0.00;
  init();

  function init() {
    $scope.delivery = deliveriesService.getDelivery($routeParams.deliveryID);
  }

  $scope.hideNext = function(){
    return CartService.isEmptyCart();
  };

  $scope.addProductToCart = function(product) {
    CartService.addProduct(product);
    $scope.total  = CartService.getTotal();
  };

  $scope.deleteOrderInCart = function(order){
    CartService.deleteOrder(order);
    $scope.total  = CartService.getTotal();
    $scope.orders = CartService.getOrders();
  };

  $scope.changeCantProductInCart = function(cant, order){
   var aOrder;
   if(_.isNumber(cant)){
      CartService.pushIfNOtExistInCart(order);
     order.subtotal = order.cant * order.product.price;
  }else{
    //debido a que order.cant esta bindiado con el imput
    //cant del carrito, no puedo dejarlo en cero, por que dejaria siempre cero en el input.
    order.cant = null;
    order.subtotal = 0;
  }
  $scope.total  = CartService.getTotal();
};

$scope.cleanEmptyOrders = function(){
  CartService.cleanEmptyOrders();
};

});


//This controller retrieves data from the deliveriesService and CartService, and associates it with the $scope
//The $scope is bound to the partial makeOrder view
//@params deliveryID from routeParams

app.controller('MakeOrderController', function ($scope, deliveriesService, CartService) {
  $scope.orders = CartService.getOrders();
  $scope.user = CartService.getUser();
  $scope.total =  CartService.getTotal() || 0.00;

  init();
  function init() {
    $scope.deliveries = deliveriesService.getDeliveries();
  }

  $scope.hideNext = function(){
    return CartService.isEmptyCart();
  };

  $scope.cleanEmptyOrders = function(){
    CartService.cleanEmptyOrders();
  };

});

//This controller retrieves de url from $location and set class for progress bar
//Is bound with navBar partial view

app.controller('NavbarController', function ($scope, $location) {
  $scope.getClass = function (path) {
    var locationPath = $location.path();
    if (locationPath.substr(0, path.length) == path) {
      return true
    } else {
      return false;
    }
  }
});

//This controller retrieves a modal
//Is bound in makeOrder partial view


app.controller('ModalController', function ($scope, $modal) {
  $scope.open = function () {
    var modalInstance = $modal.open({
      templateUrl: 'cartAsJson.html',
      controller: ModalInstanceController
    });
  };
});

//This controller retrieves data of CartService and  bound to a modal instance
//for show a json of cart data

var ModalInstanceController = function ($scope, $modalInstance, CartService) {
  $scope.orderPackage = CartService.package();
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};
