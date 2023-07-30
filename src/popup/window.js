const saveBtn = document.querySelector('.save'),
  urlText = document.querySelector('.urlText');

function listTabs() {
  try {
    const browserApi = typeof browser === 'object' ? browser : chrome;

    browserApi.tabs.query({ currentWindow: true }, tabs => {
      let urls = '';
      for (let tab of tabs) {
        urls += `* [${tab.title}](${tab.url})\n`;
      }
      urlText.value = urls;
    });
  } catch (exception) {
    alert("The extension couldn't be loaded.");
  }
}

function save() {
  const dl = document.createElement('a'),
    now = new Date(),
    date = now.toISOString().split('T')[0],
    dlfile = `URLs-${date}.txt`

  dl.download = dlfile; // filename
  dl.href = window.URL.createObjectURL(
    new Blob([urlText.value], {type: 'text/plain'}) // file content
  );
  dl.onclick = event => document.body.removeChild(event.target);
  dl.style.display = 'none';
  document.body.appendChild(dl);
  dl.click();
}

function setIcon() {
  const browserAPI = (typeof browser == "object") ? browser : chrome;
  if (matchMedia('(prefers-color-scheme: dark)').matches) {
    browserAPI.browserAction.setIcon({ 'path' : '/icons/icon32-dark.png'});
  } else {
    browserAPI.browserAction.setIcon({ 'path' : '/icons/icon32.png'});
  }
};

document.addEventListener('DOMContentLoaded', listTabs);
saveBtn.addEventListener('click', save);
document.addEventListener('DOMContentLoaded', setIcon);
setIcon();
