(function () {

  'use strict'

  angular.module("myApp",['ui.router'])

  .service("MenuDataService",MenuDataService )
  .component('myCategories',{
templateUrl: 'mycategories.html',
controller: CategoriesController,
bindings:{

}
})
.component('myItems',{
  templateUrl:'myitem.html',
  controller: ItemsController,
  bindings:{

  }
})

CategoriesController.$inject = ['MenuDataService'];
function CategoriesController(MenuDataService) {

  var $ctrl = this;


  var promise =  MenuDataService.getAllCategories();

        promise.then(function (abc) {

          $ctrl.categories = abc;
          console.log($ctrl.categories);

        })
        .catch(function (error) {
          console.log("Something is wrong");

        });

        var pro = function (xy) {
          console.log('short value = '+xy);

        }
}

ItemsController.$inject = ['MenuDataService','$scope','$stateParams'];
function ItemsController(MenuDataService,$scope,$stateParams) {
  var $ctrl = this;


console.log($stateParams.id);
  var promise =  MenuDataService.getItemsForCategory($stateParams.id);

        promise.then(function (abc) {

          $ctrl.categories = abc;
          console.log($ctrl.categories);

        })
        .catch(function (error) {
          console.log("Something is wrong");

        });


}

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {

 var service = this;

 service.getAllCategories  = function () {

   return $http({
        method : 'GET',
        url : ('https://davids-restaurant.herokuapp.com/categories.json')
      }).then(function (response) {

        var found = [];


    found = response.data;
    console.log("value"+found);

    return found;

  });

  }

  service.getItemsForCategory = function (pass) {
    return $http({
      method : 'GET',
      url : ('https://davids-restaurant.herokuapp.com/menu_items.json?category=')
    }).then(function (response) {

      var next =[];
      var last = [];

      next = response.data.menu_items;
      console.log('items='+next);
      console.log('value of pass='+pass);
      console.log('name='+next[2].short_name);
      var newpass = pass.toLowerCase();



      for(var i=0;i<=218;i++){
        if(next[i].short_name.toLowerCase().indexOf(newpass)===-1)
        {

        }
        else {
          last.push(next[i]);
          console.log('new value = '+last);
        }
      }


return last;
    })

  }

}


})();
