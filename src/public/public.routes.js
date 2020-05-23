(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.signup' , {
      templateUrl:'src/public/signup/signup.html',

    })
    .state('public.showinfo', {
      templateUrl :'src/public/showinfo/showinfo.html',
       params:{ pass: null,},
      controller:'ShowInfoController',
      controllerAs:'showCtrl',
        resolve: {
      showItems :['$stateParams','MenuService',function ($stateParams, MenuService) {
        console.log('vale of pass'+ $stateParams.pass.firstname)
        var bepass = $stateParams.pass;
        console.log('vale of pass'+ bepass)
        return MenuService.getMethod(bepass);


      }]
     }
   })

   .state('public.letshow',{
     templateUrl : 'src/public/showinfo/letshow.html',
     controller:'LetInfoController',
     controllerAs:'letCtrl',

       resolve: {
     letItems :['MenuService',function (MenuService) {
       console.log('vale of store'+ MenuService.store)


       return MenuService.store;

   }],
   letVal : ['MenuService',function (MenuService) {
     console.log('vale of store'+ MenuService.store)


     return MenuService.got;

 }]
 }
});



}
})();
