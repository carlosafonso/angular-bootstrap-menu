(function() {
  'use strict';

  angular
  .module('caMenu')
  .directive('caMenu', CaMenu);

  /** @ngInject */
  function CaMenu(caMenuService) {
    var directive = {
      restrict: 'E',
      templateUrl: 'ca-menu/menu.html',
      scope: {
        category: '@',
        header: '@'
      },
      link: function(scope, element, attributes) {
        scope.menu = caMenuService.getMenu(attributes.category);
      }
    };

    return directive;
  }
})();
