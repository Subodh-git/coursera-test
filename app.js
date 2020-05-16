(function () {

  'use strict'

  angular.module("myApp",[])

  .controller("ToBuyController" , ToBuyController)
  .controller("AlreadyBoughtController" , AlreadyBoughtController)
  .service("ShoppingListCheckOffService",ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {

    var itemadd = this;
    var c = 0 ;

    itemadd.IsVisible1 = 1;
    itemadd.IsVisible2 = 1;
    itemadd.IsVisible3 = 1;
    itemadd.IsVisible4 = 1;
    itemadd.IsVisible5 = 1;
    itemadd.IsVisible6 = 0;
        itemadd.IsVisible7 = 1;


    itemadd.name1 = "Cookies";
    itemadd.quantity1 = 10;

    itemadd.name2 = "Chips";
    itemadd.quantity2 = 15;

    itemadd.name3 = "IceCream";
    itemadd.quantity3 = 25;

    itemadd.name4 = "Choco";
    itemadd.quantity4 = 5;

    itemadd.name5 = "Maggi";
    itemadd.quantity5 = 10;




    itemadd.addItem = function (a,b) {

        c++
      ShoppingListCheckOffService.addItem(a,b);
      switch (a) {
        case "Cookies":
                  itemadd.IsVisible1 = 0;
          break;
          case "Chips":
                    itemadd.IsVisible2 = 0;
            break;
            case "IceCream":
                      itemadd.IsVisible3 = 0;
              break;
              case "Choco":
                        itemadd.IsVisible4 = 0;
                break;
                case "Maggi":
                          itemadd.IsVisible5 = 0;
                  break;
        default:

      }

if(c>=5){

  itemadd.IsVisible6 = 1;
}


    }

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
var showList = this;



showList.items = ShoppingListCheckOffService.getItems();


  }

  function ShoppingListCheckOffService()
  {
    var service = this;

    var items = [];

    service.addItem = function (itemName,quantity) {

      var item = {
        name: itemName,
        quantity: quantity


      };
      items.push(item);



  };
      service.getItems = function () {
          return items;
      };


    }

})();
