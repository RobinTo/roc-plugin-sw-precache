# roc-plugin-sw-precache 

__sw-precache plugin for roc.__  
- [roc-plugin-sw-precache](/extensions/roc-plugin-sw-precache)

---
To be used together with [Roc](https://github.com/rocjs/roc).


# Usage

Created to be used along side roc web projects using webpack.

```
$ npm install -g roc@next
$ roc new your-app-name web-app-react
$ cd your-app-name
$ npm install
$ npm install roc-plugin-sw-precache --save
$ npm run build
```

You should now see a service-worker.js file inside your build/client folder. It wil automatically detect static files inside the directory.

To register the service worker the following script needs to be inserted inside the body of your page.

```$xslt
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
</script>
```

For a sample implementation see https://github.com/RobinTo/roc-test-web-app and see src/template/main.html where it is inserted.

# TODO:

* Find a way to add script to production server template via some hook, action or setting.
* Add more settings
    * ignore files
    * cache html for routes
    * custom prefix replacements