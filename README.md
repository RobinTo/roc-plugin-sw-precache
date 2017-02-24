# roc-plugin-sw-precache 

__sw-precache plugin for roc.__  
- [roc-plugin-sw-precache](/extensions/roc-plugin-sw-precache)

---
To be used together with [Roc](https://github.com/rocjs/roc).


# Notes

Currently the action works by setting a timeout when ran, so if your build takes longer than the timeout it will fail. Working on finding a hook which runs on build completion. Additionally need to find a way to inject the service worker script into the html body.

```$xslt
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
</script>
```

Needs to be inserted somewhere in body.