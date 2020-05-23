(function () {
"use strict";

angular.module('public')
.controller('LetInfoController', LetInfoController);

LetInfoController.$inject = ['letItems','letVal'];
function LetInfoController(letItems,letVal) {
  var $ctrl = this;
  $ctrl.letItems = letItems;
  $ctrl.letVal = letVal;
  console.log("val of letItems"+$ctrl.letItems);


}

})();
