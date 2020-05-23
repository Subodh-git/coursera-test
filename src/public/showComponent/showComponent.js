(function () {
"use strict";

angular.module('public')
.component('showItem', {
  templateUrl: 'src/public/showComponent/show.html',
  bindings: {
    menuItem: '<'
  },
  controller: ShowItemController
});


ShowItemController.$inject = ['ApiPath'];
function ShowItemController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
