(function () {
"use strict";

angular.module('public')
.component('letItem', {
  templateUrl: 'src/public/showComponent/let.html',
  bindings: {
    menuItem: '<'
  },
  controller: letItemController
});


letItemController.$inject = ['ApiPath'];
function letItemController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
