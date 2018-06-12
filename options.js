console.log('hi');
const options = ['urls'];

function save_options() {
  chrome.storage.sync.set({
    urls: document.getElementById('input').value
  }, function() {
    const status = document.getElementById('status');
    status.className = 'shown';
    setTimeout(function() {
      status.className = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({urls : ''}, function(items) {
      document.getElementById('input').value = items['urls'];
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('info-link').href = chrome.extension.getURL('info.html');
