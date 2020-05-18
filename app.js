(function () {

  'use strict'

  angular.module("myApp",[])


  .controller("NarrowItDownController" , NarrowItDownController )
  .service("MenuSearchService",MenuSearchService)
  .directive('foundItems',FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl : 'itemsloaderindicator.template.html',
//    scope:{
  //    foundItems : '<',
    //  onRemove: '='

    //},
    //controller: NarrowItDownController,
    //controllerAs: 'menu',
    //bindToController:true
  }
  return ddo;
}

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {

    var menu = this;



    menu.searchTerm = undefined;



    menu.butt = function () {

    var promise =  MenuSearchService.getMatchedMenuItems(menu.searchTerm);

      promise.then(function (temp) {

        menu.categories = temp;
        console.log(menu.categories);
            console.log(menu.categories[0].name);



      })
      .catch(function (error) {
        console.log("Something is wrong");

      });

    }

    menu.remove1 = function (Index,pass) {

      MenuSearchService.remove(Index,pass);

    };

  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;



    service.getMatchedMenuItems = function (abc) {


      return $http({
        method : 'GET',
        url : ('https://davids-restaurant.herokuapp.com/menu_items.json')
      }).then(function (response) {

        var found = [];
    var temp = [];

    temp = response.data.menu_items;
    // console.log(temp[i].name);
    for(var i=0;i<=218;i++)
  {

    if (temp[i].name.toLowerCase().indexOf(abc)=== -1)
     {

    }
    else {
      found.push(temp[i])
    }

    }
    return found;
});

  };

service.remove = function (index,prod) {
  prod.splice(index,1);
};

  }


})();
