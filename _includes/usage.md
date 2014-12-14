## Usage

**Basic**

Suppose we have a controller whose model is a 10,000 item array:

{% highlight js %}
{% raw %}
// create Ember application
App = Ember.Application.create();

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
{% endraw %}
{% endhighlight %}

Here's a bare-bones example of a template using ListView:

{% highlight html %}
{% raw %}
<script type="ext/x-handlebars" data-template-name="index">
  {{#collection Ember.ListView contentBinding="controller" height=500 rowHeight=50 width=500}}
    {{name}}
  {{/collection}}
</script>
{% endraw %}
{% endhighlight %}

You should be able to see a scrollable area with 10,000 items in it.

Notes:

  - You **must** pass in the `height` and `rowHeight` params, as they are required for ListView's calculations.

