/*#######################################################################

  Juan Urtazun

  #######################################################################*/

app.service('deliveriesService', function () {
  this.getDeliveries = function () {
    return deliveries;
  };

  this.getDelivery = function (id) {
    var delivery = _.find(deliveries, function(delivery){ return parseInt(delivery.id)  === parseInt(id); });
    return delivery;
  };

  var deliveries = [
  {
    id: 1, name: 'Bar BQ', description: 'Comida Americana, Comida International, Parrilla, Ensaladas',
    menues: [
    {
      name:'Pizzas',
        products:[
          {id:1,name:'Pizza cuatro quesos',description:'salsa, muzzalerella, roquefort, provolone, sardo', price:60.00},
          {id:2,name:'Pizza de muzzalerella', description:'salsa, muzzalerella,  orégano y aceitunas', price:45},
          {id:3,name:'Pizza de panceta', description:'salsa, panceta, muzzalerella, orégano y aceitunas', price:50},
          {id:4,name:'Pizza de palmitos',description:'salsa, palmitos, muzzalerella, orégano y aceitunas', price:72}
        ]
    },
    {
      name:'Pastas',
        products:[
        {id:5,name:'Ravioles de verdura con mixta',description:'acelga, aceite de oliva',  price:38.00},
        {id:6,name:'Ravioles de verdura con fileto',description:'acelga, aceite de oliva y salsa fileto', price:64.00},
        {id:7,name:'Ravioles de verdura al pesto', description:'acelga, aceite de oliva y pesto', price:44.00},
        {id:8,name:'Ravioles de ricota con mixta',description:'acelga, aceite de oliva', price:28.00},
        {id:9,name:'Ravioles de ricota con fileto', description:'acelga, aceite de oliva  y salsa fileto',price:30.00},
        {id:10,name:'Ravioles de ricota al pesto', description:'acelga, aceite de oliva  y pesto', price:34.00}
        ]
    },
    {
      name:'Sandwiths',
      products:[
        {id:11,name:'Sandwith Jamón y Queso',description:'jamón, queso', price:22.00},
        {id:12,name:'Sandwith Jamón crudo ', description:'jamón crudo', price:33.00},
        {id:13,name:'Sandwith Milanesa de pollo', description:'milanesa de pollo, tomate, lechuga', price:40.00},
        {id:14,name:'Sandwith Milanesa de ternera', description:'ternera de pollo, tomate, lechuga', price:46.00}
        ]
    },
    {
      name:'Bebidas',
        products:[
          {id:15, name:'CocaCola de 600cc', description:'envase de  600cc', price:12.00},
          {id:16, name:'Pepsi de 600cc', description:'envase de  600cc', price: 11.00 },
          {id:17, name:'Vino Los Arboles', description:'bodega Navarro Correas', price:110},
          {id:18, name:'Agua', description:'agua sin gas por 750cc', price:9.00}
          ]
    }
    ]
  },

  {

  id: 2, name: 'Asador criollo', description: 'Pastas, Parrilla',
  menues: [
    {
      name:'Pastas',
        products:[
          {id:18, name:'Ravioles de verdura con mixta',description:'acelga, aceite de oliva',  price:38.00},
          {id:19, name:'Ravioles de verdura con fileto',description:'acelga, aceite de oliva y salsa fileto', price:64.00},
          {id:20, name:'Ravioles de verdura al pesto', description:'acelga, aceite de oliva y pesto', price:44.00},
          {id:21, name:'Ravioles de ricota con mixta',description:'acelga, aceite de oliva', price:28.00},
          {id:22, name:'Ravioles de ricota con fileto', description:'acelga, aceite de oliva  y salsa fileto',price:30.00},
          {id:23, name:'Ravioles de ricota al pesto', description:'acelga, aceite de oliva  y pesto', price:34.00}
        ]
    },
    {
      name:'Parrilla',
        products:[
          {id:24, name:'Parrilla para 4 personas',description:'vacio,tapa de asado, chorizos', price:222.00},
          {id:25, name:'Parrilla para 4 personas', description:'vacio,tapa de asado, chorizos', price:122.00}
          ]
    },
    {
      name:'Bebidas',
        products:[
          {id:26, name:'CocaCola de 600cc', description:'envase de  600cc',price:12.00},
          {id:27, name:'Pepsi de 600cc', description:'envase de  600cc',price: 11.00 },
          {id:28, name:'Vino Los Arboles', description:'bodega Navarro Correas',price:110},
          {id:29, name:'Agua', description:'agua sin gas por 750cc', price:9.00}
          ]
    }
    ]
  },

  {

  id: 3, name: 'Rico el pollo', description: 'Parrilla',
  menues: [
    {
      name:'Parrilla',
        products:[
          {id:30, name:'Parrilla para 4 personas',description:'vacio,tapa de asado, chorizos', price:222.00},
          {id:31, name:'Parrilla para 2 personas', description:'vacio,tapa de asado, chorizos', price:122.00},
          {id:32, name:'Pollo con fritas', description:'pollo, papas fritas', price:180.00},
          {id:33, name:'Pollo con rusa', description:'pollo, ensalada rusa(papa, zanahoria, arvejas)', price:170.00},
          {id:34, name:'Matambre arrollado', description:'pollo x kg', price:120.00}
          ]
    },
    {
      name:'Bebidas',
        products:[
          {id:35, name:'CocaCola de 600cc', description:'envase de  600cc',price:12.00},
          {id:36, name:'Pepsi de 600cc', description:'envase de  600cc',price: 11.00 },
          {id:37, name:'Vino Los Arboles', description:'bodega Navarro Correas',price:110},
          {id:38, name:'Vino Las Perdices', description:'100% Malbec de Agrelo, Luján de Cuyo',price:160},
          {id:39, name:'Vino Nicasia', description:'Malbec Blend Cabernet Blend',price:190},
          {id:40, name:'Agua', description:'agua sin gas por 750cc', price:9.00}
          ]
    }
    ]
  },
  {

  id: 4, name: 'Pastas de La Nona', description: 'Pastas',
  menues: [
    {
      name:'Pastas',
        products:[
          {id:41, name:'Ravioles de verdura con mixta',description:'acelga, aceite de oliva',  price:38.00},
          {id:42, name:'Ravioles de verdura con fileto',description:'acelga, aceite de oliva y salsa fileto', price:64.00},
          {id:43, name:'Ravioles de verdura al pesto', description:'acelga, aceite de oliva y pesto', price:44.00},
          {id:44, name:'Ravioles de ricota con mixta',description:'acelga, aceite de oliva', price:28.00},
          {id:45, name:'Ravioles de ricota con fileto', description:'acelga, aceite de oliva  y salsa fileto',price:30.00},
          {id:46, name:'Canelones de ricota al pesto', description:'acelga, aceite de oliva  y pesto', price:34.00},
          {id:47, name:'Canelones de ricota fileto', description:'acelga,fileto', price:34.00}
        ]
    }
    ]
  },

  {
    id: 5, name: 'Como en casa', description: 'Comida casera, pastas, ensaladas, empanadas, pizzas',
    menues: [
    {
      name:'Pizzas',
        products:[
          {id:48,name:'Pizza cuatro quesos',description:'salsa, muzzalerella, roquefort, provolone, sardo', price:60.00},
          {id:49,name:'Pizza de muzzalerella', description:'salsa, muzzalerella,  orégano y aceitunas', price:45},
          {id:50,name:'Pizza de panceta', description:'salsa, panceta, muzzalerella, orégano y aceitunas', price:50},
          {id:51,name:'Pizza de palmitos',description:'salsa, palmitos, muzzalerella, orégano y aceitunas', price:72}
        ]
    },

    {
      name:'Empanadas',
        products:[
          {id:52,name:'Empanada cuatro quesos',description:'muzzalerella, roquefort, provolone, sardo', price:12.00},
          {id:53,name:'Empanada de carne', description:'carne de ternera, aceitunas, huevo ', price:9.5},
          {id:54,name:'Empanada de panceta', description:' panceta, muzzalerella, orégano y aceitunas', price:14.00},
          {id:55,name:'Empanada de palmitos',description:' palmitos, muzzalerella, orégano y aceitunas', price:13.00}
        ]
    },

    {
      name:'Pastas',
        products:[
        {id:56,name:'Ravioles de verdura con mixta',description:'acelga, aceite de oliva',  price:38.00},
        {id:57,name:'Ravioles de verdura con fileto',description:'acelga, aceite de oliva y salsa fileto', price:64.00},
        {id:58,name:'Ravioles de verdura al pesto', description:'acelga, aceite de oliva y pesto', price:44.00},
        {id:59,name:'Ravioles de ricota con mixta',description:'acelga, aceite de oliva', price:28.00},
        {id:60,name:'Ravioles de ricota con fileto', description:'acelga, aceite de oliva  y salsa fileto',price:30.00},
        {id:61,name:'Ravioles de ricota al pesto', description:'acelga, aceite de oliva  y pesto', price:34.00}
        ]
    },
    {
      name:'Sandwiths',
      products:[
        {id:62,name:'Sandwith Jamón y Queso',description:'jamón, queso', price:22.00},
        {id:63,name:'Sandwith Jamón crudo ', description:'jamón crudo', price:33.00},
        {id:64,name:'Sandwith Milanesa de pollo', description:'milanesa de pollo, tomate, lechuga', price:40.00},
        {id:65,name:'Sandwith Milanesa de ternera', description:'ternera de pollo, tomate, lechuga', price:46.00}
        ]
    },
    {
      name:'Bebidas',
        products:[
          {id:66, name:'CocaCola de 600cc', description:'envase de  600cc', price:12.00},
          {id:67, name:'Pepsi de 600cc', description:'envase de  600cc', price: 11.00 },
          {id:68, name:'Vino Los Arboles', description:'bodega Navarro Correas', price:110},
          {id:69, name:'Agua', description:'agua sin gas por 750cc', price:9.00}
          ]
    }
    ]
  },

  {

  id: 6, name: 'Pastas de La Nona', description: 'Pastas',
  menues: [
    {
      name:'Pastas',
        products:[
          {id:70, name:'Ravioles de verdura con mixta',description:'acelga, aceite de oliva',  price:38.00},
          {id:71, name:'Ravioles de verdura con fileto',description:'acelga, aceite de oliva y salsa fileto', price:64.00},
          {id:72, name:'Ravioles de verdura al pesto', description:'acelga, aceite de oliva y pesto', price:44.00},
          {id:73, name:'Ravioles de ricota con mixta',description:'acelga, aceite de oliva', price:28.00},
          {id:74, name:'Ravioles de ricota con fileto', description:'acelga, aceite de oliva  y salsa fileto',price:30.00},
          {id:75, name:'Canelones de ricota al pesto', description:'acelga, aceite de oliva  y pesto', price:34.00},
          {id:76, name:'Canelones de ricota fileto', description:'acelga,fileto', price:34.00}
        ]
    }
    ]
  },

  {
    id: 7, name: 'Con Oliva', description: 'Pizzas y empanadas',
    menues: [
    {
      name:'Pizzas',
        products:[
          {id:77,name:'Pizza cuatro quesos',description:'salsa, muzzalerella, roquefort, provolone, sardo', price:60.00},
          {id:78,name:'Pizza de muzzalerella', description:'salsa, muzzalerella,  orégano y aceitunas', price:45},
          {id:79,name:'Pizza de panceta', description:'salsa, panceta, muzzalerella, orégano y aceitunas', price:50},
          {id:80,name:'Pizza de palmitos',description:'salsa, palmitos, muzzalerella, orégano y aceitunas', price:72}
        ]
    },

    {
      name:'Empanadas',
        products:[
          {id:81,name:'Empanada cuatro quesos',description:'muzzalerella, roquefort, provolone, sardo', price:12.00},
          {id:82,name:'Empanada de carne', description:'carne de ternera, aceitunas, huevo ', price:9.5},
          {id:83,name:'Empanada de panceta', description:' panceta, muzzalerella, orégano y aceitunas', price:14.00},
          {id:84,name:'Empanada de palmitos',description:' palmitos, muzzalerella, orégano y aceitunas', price:13.00}
        ]
    }
    ]
  }
];

});
