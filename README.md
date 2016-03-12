# angular-bootstrap-menu
A simple menu directive for AngularJS built with Bootstrap.

![screenshot](http://i.imgur.com/SayWNaK.png)

## Installation
### Bower
```
$ bower install ca-angular-bootstrap-menu
```

## Usage
Define your menu first:

```javascript
caMenuService.add({
  route: 'root.main.dashboard',   // UI Router state for this item link
  text: 'Dashboard',              // text to be displayed
  icon: 'dashboard',              // Font Awesome icon name (will be prepended wih 'fa-')
  order: 1                        // display order
});

/* Multiple items can be added at once */
caMenuService.add([{
  route: 'root.main.dashboard',
  text: 'Dashboard',
  icon: 'dashboard',
  order: 1
}, {
  route: 'root.main.products',
  text: 'Products',
  icon: 'shopping-cart',
  order: 2
}]);
```

Then use the Angular directive `ca-menu` wherever you wish:

```html
<ca-menu header="Main menu"></ca-menu>

<!-- skip the header attribute to hide the header -->
<ca-menu></ca-menu>
```

Different menus can be defined using categories:

```javascript
caMenuService.add({/* ... */}, 'special-menu');
```

```html
<ca-menu header="Main menu" category="special-menu"></ca-menu>
```
