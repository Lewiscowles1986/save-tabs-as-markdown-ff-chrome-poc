![The icon is of paper with a + symbol in the bottom right](src/icons/icon.png)

# save-tabs-as-markdown-ff-chrome-poc
A Browser addon for FireFox & Chrome to save active tabs as Markdown.

**Upgraded to Manifest V3** for modern browser compatibility and enhanced security.

## Privacy & Data Ownership
This extension is built for one purpose: **for you to save your own damn data.**
We collect zero data. Everything stays on your machine.
See our [Privacy Policy](PRIVACY.md) for more details.

## Download from public

* [Chrome Web Store](https://chrome.google.com/webstore/detail/save-tab-urls/ongnhfbnfbpfpcmnjahklmklncjblmmo)
* [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/save-tab-urls-to-markdown/)
* [Microsoft Edge (chromium) Add-ons](https://microsoftedge.microsoft.com/addons/detail/save-tab-urls/kpgnncjnhfgcjplbhapbdhnfgoglajof)

## Usage

After download / install you should notice a new icon to the right of the address bar ![The icon is of paper with a + symbol in the bottom right](src/icons/icon16.png)

Upon clicking the icon you should see popup window with a text-box with lines of markdown.

Below this is a button "Save as..." which will initiate a download of the contents as plain-text with todays ISO-8601 date in YYYY-MM-DD format, including a markdown extension.

Next to the save button is a link to my website with the text "LC"

## Development & Building

### Chrome, Firefox, and Edge
The extension is built using Manifest V3. The source code is located in the `src` directory.

**Testing:**
* **Chrome/Edge:** Go to `chrome://extensions`, enable "Developer mode", and "Load unpacked" the `src` folder.
* **Firefox:** Go to `about:debugging#/runtime/this-firefox` and "Load Temporary Add-on", selecting `src/manifest.json`.

**Building (CLI):**
Requires [Node.js](https://nodejs.org/).
```bash
# Package for distribution (.zip)
npx web-ext build --source-dir src --overwrite-dest
```

> [!NOTE]
> There are additional instructions to publish to firefox web-store and chrome web-store and edge web-store. These are omitted as I do not control any of these products.

### Safari (macOS & iOS)
The Safari version is a native wrapper around the web extension.

#### Setup

1. Requires a Mac with **Xcode** installed.
  - `xcodebuild -runFirstLaunch` 
2. Open `safari-extension/Save Tab URLs.xcodeproj` in Xcode.

#### Maintenance

It is intended that the maintenance of the safari extension, is simply rebuilding using the command

```shell
xcrun safari-web-extension-converter $(pwd)/src
```

Then having the directory changed to `safari-extension`.

#### Testing on macOS

1. Select the **Save Tab URLs (macOS)** scheme in the Xcode toolbar.
2. Click the **Run** button (play icon).
3. In Safari, go to **Settings > Advanced** and check **"Show features for web developers"**.
4. In the **Develop** menu, check **"Allow Unsigned Extensions"**.
5. In **Safari Settings > Extensions**, find and enable "Save Tab URLs".

#### Testing on iOS

1. Select the **Save Tab URLs (iOS)** scheme in the Xcode toolbar.
2. Select an **iOS Simulator** (e.g., iPhone 15) as the destination.
3. Click the **Run** button.
4. In the Simulator, go to **Settings > Safari > Extensions** and enable "Save Tab URLs".

#### Building (CLI)

```bash
xcodebuild -project "safari-extension/Save Tab URLs.xcodeproj" -scheme "Save Tab URLs (macOS)" build
```

#### Cleaning (CLI)

Removes build artifacts and un-registers the extension from Safari.
```bash
xcodebuild -project "safari-extension/Save Tab URLs.xcodeproj" -scheme "Save Tab URLs (macOS)" clean
```

## Troubleshooting
Sometimes the link to my website does not work in Google Chrome. Please do not send me an email, and instead file a bug in the [issues tab](https://github.com/Lewiscowles1986/save-tabs-as-markdown-ff-chrome-poc/issues) or contribute a [Pull Request](https://github.com/Lewiscowles1986/save-tabs-as-markdown-ff-chrome-poc/pulls)
