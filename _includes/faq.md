## FAQ

### Caveats

Things we are aware about and are on the list to fix.

  - `classNameBindings` and `attributeBindings` won't work properly on ListItemView after view's recycle. Using it should be avoided. [Demo](http://jsfiddle.net/SPZn4/2/).

### How it works

`Ember.ListView` will create enough rows to fill the visible area (as defined by the `height` property). It reacts to scroll events and reuses/repositions the rows as scrolled.

Please look at the [unit tests](https://github.com/emberjs/list-view/blob/master/packages/list-view/tests/list_view_test.js) for more information.
