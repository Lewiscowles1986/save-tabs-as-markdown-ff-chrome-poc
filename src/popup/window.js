const saveBtn = document.querySelector('.save'),
  urlText = document.querySelector('.urlText');

function listTabs() {
  const browserAPI = (typeof browser == "object") ? browser : chrome;
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

document.addEventListener('DOMContentLoaded', listTabs);
saveBtn.addEventListener('click', save);
