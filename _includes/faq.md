## FAQs

### How does it work?

ListView creates enough rows to fill the visible area, according to the `height` property. It then reuses and repositions these rows as the user scrolls/swipes.

Take a look at the [unit tests](https://github.com/emberjs/list-view/blob/master/packages/list-view/tests/list_view_test.js) for more information.

### What's VirtualListView, and why do I need it?

Touch-based mobile devices have different scrolling APIs than traditional browsers: `touchstart`, `touchmove` and `touchend` vs `onscroll`. Also, when a swipe is used to scroll content, many mobile devices simulate momentum by decelerating the swiped content slowly. During this momentum phase, no DOM events are emitted.

For these reasons, a separate implementation of ListView is needed for mobile devices. VirtualListView combines 3D CSS transforms with momentum-based JavaScript animation to simulate scrolling behavior. In addition, it will often outperform the browser's native scroll.

### Why do we use the `collection` helper?

### What are the required params?

### What's browser support like?

IE9+

### Is horizontal rendering/scrolling supported?

Not currently, though we hope to eventually support horizontal scrolling.

### Caveats

Things we are aware about and are on the list to fix.

  - `classNameBindings` and `attributeBindings` won't work properly on ListItemView after view's recycle. Using it should be avoided. [Demo](http://jsfiddle.net/SPZn4/2/).

