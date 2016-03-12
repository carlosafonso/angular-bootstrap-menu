(function() {
  'use strict';

  angular
  .module('caMenu')
  .directive('caMenu', CaMenu);

  /** @ngInject */
  function CaMenu() {
    var directive = {
      restrict: 'E',
      templateUrl: 'ca-menu/menu.html',
      scope: {
        category: '@',
        header: '@'
      },
      controller: CaMenuController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function CaMenuController(caMenuService) {
      var vm = this;
      vm.menu = caMenuService.getMenu(vm.category);
    }
  }
})();
