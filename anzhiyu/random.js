var posts=["p/18330.html","p/40896.html","p/10134.html","p/9e1c86cc.html","p/162f2ead.html","p/79f55f62.html","p/c6b59e99.html","p/54354.html","p/5fe81f22.html","p/ad2adac5.html","p/50373.html","p/35124.html","p/fe7f4a08.html","p/3cc49a3.html","p/b97f2775.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };