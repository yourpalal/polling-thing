polling-thing
=============

This is a simple client-side app built with [angularjs](http://angularjs.org) and [twitter bootstrap](http://getbootstrap.com/).

It polls the github issues on [yourpalal/polling-thing](https://github.com/yourpalal/polling-thing/) once per second.

It is implemented in three files:

 * index.html: which handles displaying the issues using angular templates
 * issues.js: a simple angular controller that uses the $timeout and $http angular service to fetch the github issue data
 * style.css: a bit of custom styling


### running
You can try this out on your own computer by running ```python -m SimpleHTTPServer```
