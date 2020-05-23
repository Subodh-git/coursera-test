(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.store = [];

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMethod = function (bepass) {
    var config = {};
    service.got = bepass;
    if (bepass.favmenu) {
      config.params = {'category': bepass.favmenu};
      console.log("bepass"+bepass);
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      service.store = response.data;
      console.log('store value'+service.store)
      return response.data;
    });


  };

}



})();
