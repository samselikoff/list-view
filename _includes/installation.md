Installation
------------

The dist isn't stored in bower, so you'll need to grab it yourself. There's also currently no Ember CLI addon built for this.

1. Grab the latest [development](http://builds.emberjs.com/list-view/list-view-latest.js) or [minified](http://builds.emberjs.com/list-view/list-view-latest.min.js) build. 

    Alternatively, for a specific version, follow the [build](#build) instructions below.

2. In your Ember CLI project, `mkdir vendor/list-view`, then put the build in that folder.

    You'll end up with `vendor/list-view/list-view.js`.

3. Add the line

        "list-view": "0.0.5"

    to your `devDependencies` hash in your project's `package.json` file. Ember CLI will now import ListView into your project.

