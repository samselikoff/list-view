## Installation

There's no distribution of ListView on Bower, so you'll need to grab a copy yourself. There's also currently no Ember CLI addon built.

**JS**

To install,

1. Grab the latest [development](http://builds.emberjs.com/list-view/list-view-latest.js) or [minified](http://builds.emberjs.com/list-view/list-view-latest.min.js) build. 

    Alternatively, follow the build instructions below to get a specific version.

2. Put the dist in your Ember CLI under

        /vendor/list-view/list-view.js

3. Add the line

        "list-view": "0.0.5"

    to the `devDependencies` hash of your project's `package.json` file.

Ember CLI will now import ListView into your project.

**CSS**

The project also has the following required CSS. Be sure to include it in your project.

{% highlight css %}
.ember-list-view {
  overflow: auto;
  position: relative;
}
.ember-list-item-view {
  position: absolute;
}
{% endhighlight %}
