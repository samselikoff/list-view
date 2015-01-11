---
layout: default
---

<p class='lead'>Large HTML lists kill performance.</p>

By only rendering what's currently visible, **ListView** lets you use large lists without slowing down your app.

<div class="Main-demo">
  <p>Here's a demo with <strong>10,000 items</strong>. Scroll away!</p>
  
  <div class='panel panel-default clearfix Main-demo__wrapper'>
    <div class="panel-heading">List View</div>
    <div class="Main-demo__demo mobile-demo"></div>

    <!-- TODO: Add mobile/virtuallistview and desktop/listview examples -->
    <!-- <div class="Main-demo__demo mobile-demo visible-xs-block visible-sm-block"></div>
    <div class="Main-demo__demo visible-md-block visible-lg-block"></div> -->
  </div>
</div>

<h3 class='callout'>Important</h3>
While the rest of these docs will reference `Ember.ListView`, this library also contains `Ember.VirtualListView`.
The APIs of the two views are the same, but you should use the latter when on mobile.

{% include markdownify.html page="requirements.md" %}

{% include markdownify.html page="installation.md" %}

{% include markdownify.html page="usage.md" %}

{% include markdownify.html page="development.md" %}

{% include markdownify.html page="faq.md" %}

{% include markdownify.html page="thanks.md" %}
