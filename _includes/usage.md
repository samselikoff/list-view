## Usage

First, let's create a template:

{% highlight html %}
{% raw %}
<script type="ext/x-handlebars" data-template-name="index">
  {{#collection Ember.ListView contentBinding="controller" height=500 rowHeight=50 width=500}}
    {{name}}
  {{/collection}}
</script>
{% endraw %}
{% endhighlight %}

Next, let's feed our template with some data:

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

Shazam! You should be able to see a scrollable area with 10,000 items in it.
