// create Ember application
App = Ember.Application.create({
  rootElement: '#demo'
});

var content = [];
for (var i = 0; i < 10000; i++) {
  content.push({name: "Item " + i});
}

// create Ember.ArrayController
App.IndexController = Ember.ArrayController.extend({
  content: []
});

App.ExtendedVirtualList = Ember.VirtualListView.extend({
  content: content,
  height: 500,
  rowHeight: 50,
  itemViewClass: Ember.ReusableListItemView.extend({
    templateName: "row_item"
  })
});

// define default index route and pushing some data to content
App.IndexRoute = Ember.Route.extend({
  model: function() {
    var items = [];
    for (var i = 0; i < 10000; i++) {
      items.push({name: "Item " + i});
    }
    return items;
  }
});
