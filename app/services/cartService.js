/*#######################################################################

  Juan Urtazun

  #######################################################################*/


app.service('CartService', function () {

  var orders, user, that = this;

  init();

  function init(){
    orders = _emptyOrders();
    user = _nullUser();
  }


  function _nullUser(){
    return {name:null, lastName:null, address:null, phone:null, email:null };
  }

  function _emptyOrders(){
    return [];
  }

  function _getOrderFor(product){
    return _.find(orders, function(order){ return parseInt(order.product.id) === parseInt(product.id); });
  }

  this.pushIfNOtExistInCart = function(order){
    var matchOrder;
     matchOrder = _.find(orders, function(a_order){ return   parseInt(order.product.id) === parseInt(a_order.product.id); });
    if(!matchOrder){
      that._push(order);
    }
  }

  function _findOrCreateOrderFor(product){
    var order = _getOrderFor(product);
    if(!order){
      order = {product: product, cant: 0, subtotal:0.00};
      orders.push(order);
    }
    return order;
  }

  function getEmptyOrders(){
    return _.find(orders, function(order){ return parseInt(order.cant) === 0 || order.cant == undefined; })
  }

  this.getOrders = function(){
    return orders;
  };

  this.getUser = function(){
    return user;
  };

  this._push = function(order){
    orders.push(order);
  };

  this.deleteOrder = function(order){
    var index = orders.indexOf(order);
    orders.splice(index,1);
  };

  this.addProduct = function(product) {
    var  order =  _findOrCreateOrderFor(product);
    order.cant += 1;
    order.subtotal = order.cant * product.price;
  };

  this.getTotal = function(){
    return _.reduce(orders, function(memo, order){ return memo + (order.subtotal); }, 0);
  };

  this.cleanEmptyOrders= function(){
    var emptyOrders = getEmptyOrders();
    orders = _.without(orders, emptyOrders);
  };

  this.reset = function(){
    orders = [];
    user = {name:null, lastName:null, address:null, phone:null, email:null };
  };

  this.isEmptyCart = function(){
    if(orders.length){
      if(that.getTotal() == 0){
        return true;
      }else{
        return false;
      }
    }
    //no tengo ordenes
    return true;
  };

  this.package = function(){
    that.cleanEmptyOrders();
    return {orders:orders,user : user, total: that.getTotal()};
  };
});
