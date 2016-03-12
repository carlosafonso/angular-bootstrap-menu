(function() {
  'use strict';

  angular
  .module('caMenu')
  .service('caMenuService', CaMenuService);

  /** @ngInject */
  function CaMenuService($log) {
    var menu = {
      default: []
    };

    return {
      add: add,
      getMenu: getMenu
    };

    function add(item, category) {
      if (item.constructor === Array) {
        for (var i in item) {
          add(item[i]);
        }
      } else {
        if (! category) {
          menu.default.push(item);
        } else {
          if (! menu.hasOwnProperty(category)) {
            menu[category] = [];
          }
          menu[category].push(item);
        }
      }
    }

    function getMenu(category) {
      if (! category) {
        category = 'default';
      }

      if (! menu.hasOwnProperty(category)) {
        $log.error('No such category found in menu: ' + category);
        return;
      }

      return menu[category].sort(function(a, b) {
        var aHasIt = a.hasOwnProperty('order');
        var bHasIt = b.hasOwnProperty('order');

        if (aHasIt && bHasIt) {
          if (a.order < b.order) {
            return -1;
          }
          if (a.order > b.order) {
            return 1;
          }
          return 0;
        }

        if (! aHasIt && ! bHasIt) {
          return 0;
        }

        if (aHasIt) {
          return -1;
        }

        return 1;
      });
    }
  }
})();
