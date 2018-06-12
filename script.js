const url = window.location.href;
if(!new RegExp("^https://outline.com/.*$").test(url)){
  chrome.storage.sync.get({urls: ""}, function(options) {
    const tests = options.urls.split("\n")
    const test = tests.map((t) => { return new RegExp("^" + t.split("*").join(".*") + "$").test(url) }).find((r) => { return r })
    if (test){
      window.location.href = "https://outline.com/" + url
    }
  });
}
