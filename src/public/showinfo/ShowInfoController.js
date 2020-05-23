(function () {
"use strict";

angular.module('public')
.controller('ShowInfoController', ShowInfoController);

ShowInfoController.$inject = ['showItems','$stateParams'];
function ShowInfoController(showItems,$stateParams) {
  var $ctrl = this;
  $ctrl.showItems = showItems;
  $ctrl.pass = $stateParams.pass;
  console.log('checking..'+$stateParams.pass);
}

})();
