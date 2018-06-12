const input = document.getElementById('input');
const save = document.getElementById('save');
const cancel = document.getElementById('cancel');
const options = document.getElementById('options');
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  input.value = "*://" + tabs[0].url.split("/")[2] + "/*"
});
save.addEventListener('click', () => {
  const new_url = input.value
  chrome.storage.sync.get({urls: ''}, function(items) {
    chrome.storage.sync.set({
      urls: new_url + "\n" + items['urls']
    }, function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
      });
      window.close();
    });
  });
});
cancel.addEventListener('click', () => {
  window.close();
})
options.addEventListener('click', () => {
  chrome.runtime.openOptionsPage()
})
