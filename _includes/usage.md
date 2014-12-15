## Usage and Examples

### Overview

There are two classes that come with ListView: `Ember.ListView`, and `Ember.ListItemView`.

  - `ListView` is a container view. It manages the content array, creating or repositioning items when necessary.
  - `ListItemView` is the view that backs each individual item.
  - (`ReusableListItemView`?)

(elaborate...)

Here are the params...

<span class='required'></span> denotes a required param.

<dl class='dl-horizontal'>
  <dt class='required'>contentBinding</dt>
  <dd>
    <em>array</em>
    <p>The content to display in the list</p>
  </dd>

  <dt class='required'>height</dt>
  <dd>
    <em>number</em>
    <p>Overall container height</p>
  </dd>

  <dt class='required'>rowHeight</dt>
  <dd>
    <em>number</em>
    <p>Height of each element in the list</p>
  </dd>

  <dt>width</dt>
  <dd>
    <em>number</em>
    <p>Overall container width</p>
  </dd>

  <dt>elementWidth</dt>
  <dd>
    <em>number</em>
    <p>Width of each element in the list. For a multi-column list, specify both <code>width</code> and <code>elementWidth</code>.</p>
  </dd>

  <dt>itemViewClass</dt>
  <dd>
    <em>[subclass of Ember.ListItemView]</em>
    <p>The template to used to render each item in the list. See the example below for details.</p>
  </dd>
</dl>

### Basic example

Suppose our index controller's model is a 10,000-item array:

{% highlight js %}
{% raw %}
//routes/index.js
export default Ember.Route.extend({
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

[js bin]

### Basic grid example

explanation

[js bin]

### List with groups example

explanation

[js bin]

### List with various heights example

explanation

[js bin]

### Grid with various heights example (coming soon)

explanation

[js bin]

### Customizing each item's template

As shown above, you can pass in a block to the `collection` helper and customize the appearance of each row item directly in your template.

However, you can also define your own view. (Why would someone want to do this?). First, create a new template

{% highlight handlebars %}
{% raw %}
{{!-- templates/my-row-item.js --}}
<div>
  <p><strong>{{name}}</strong></p>  
  <p>{{description}}</p>
</div>
{% endraw %}
{% endhighlight %}

then create a new view that extends `Ember.ListView`, specifying the template via the following:

{% highlight js %}
//views/my-list-view
export default Ember.ListView.extend({
  height: 500,
  rowHeight: 50,
  itemViewClass: Ember.ListItemView.extend({templateName: "my-row-item"})
});
{% endhighlight %}

Note that `itemViewClass` must be an extension of `Ember.ListItemView`, and its `templateName` property must be set to your new desired template.

### Changing height and width of `Ember.ListView` during runtime

The height and width of the entire ListView can be adjusted at run-time. Existing row items will automatically be repositioned, and any new items that are needed will be created.

To change (does user need to implement adjustLayout?)

{% highlight js %}
//views/my-list-view
export default Ember.ListView.extend({
  height: 500,
  width: 960,
  adjustLayout: function(new_width, new_height) {
    this.set('width', new_width);
    this.set('height', new_height);
  }
});
{% endhighlight %}

### Full table example (maybe this should be an independent addon)

### Autosizing parentView example

### Link to addepars select box as it uses list-view
