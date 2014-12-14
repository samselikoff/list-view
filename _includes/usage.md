## Usage

### Basic

Suppose our index controller's model is a 10,000-item array:

{% highlight js %}
{% raw %}
//controllers/index.js
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

Here's how we could use ListView in our index template:

{% highlight handlebars %}
{% raw %}
{{!-- templates/index.hbs --}}
{{#collection Ember.ListView
    contentBinding="controller"
    height=500
    rowHeight=50
    width=500}}
  {{name}}
{{/collection}}
{% endraw %}
{% endhighlight %}

You should now have a fast scrollable area with 10,000 items in it.

### Params

<table class='table table-bordered table-hover'>
  <thead>
    <tr>
      <th>Name</th>
      <th>Required?</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>contentBinding</code></td>
      <td>Yes</td>
      <td>The content to display in the list</td>
    </tr>
    <tr>
      <td><code>height</code></td>
      <td>Yes</td>
      <td>Overall container height</td>
    </tr>
    <tr>
      <td><code>rowHeight</code></td>
      <td>Yes</td>
      <td>Height of each element in the list</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td></td>
      <td>Overall container width</td>
    </tr>
    <tr>
      <td><code>elementWidth</code></td>
      <td></td>
      <td>Width of each element in the list. For a multi-column list, specify both <code>width</code> and <code>elementWidth</code>.</td>
    </tr>
  </tbody>
</table>
Notes:

  - You **must** pass in the `height` and `rowHeight` params, as they are used in ListView's calculations.

