(function () {
  'use strict';

  angular.module('myApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider) {

 $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
      url:'/',
      templateUrl:'home.html'

    })

    .state('menuList',{
      url:'/menu-list',
      templateUrl:'mycategories1.html'

    })

    .state ('itemList',{
      url:'/item-list',
      params:{ id: null,},
      templateUrl:'myitem1.html',
      controller:function ($scope,$stateParams) {
        $scope.id = $stateParams.id;
        console.log($stateParams.id);

      }



    });

  }

})();
