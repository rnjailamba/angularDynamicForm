(function () {
  'use strict';
  angular
      .module('starterApp')
      .controller('DemoCtrl', DemoCtrl);
  function DemoCtrl($mdDialog,$mdToast) {
    var self = this;
    self.openDialog = function($event) {
      $mdDialog.show({
        controller: DialogCtrl,
        controllerAs: 'ctrl',
        templateUrl: '/app/src/users/view/dialog.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: $event,
        clickOutsideToClose:true
      })
    }
  }


})();
