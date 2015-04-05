# Pin All Tabs -- Chrome Extension

Sometime, we open too many tabs in one window that we may accidentally click the close button of the tab. Also too many tabs in one window cost too much space and annoying. 

Since chrome does not provide keyboard shortcut to pin a tab and pinning a tab requires you to right click on it and click `Pin Tab`, this process is exhausted. That's why Pin-All-Tabs Chrome Extension comes in handy.

Pin All Tabs With Just A Simple Click or A Keyboard Shortcut.


# Features

* Pin All Tabs With Just A Simple Click
* Quick access with `Command+E` for Mac and `Alt+E` for other systems


# Developement Environment Setup

* `git clone https://github.com/githubutilities/pin-all-tabs.git`
* `cd pin-all-tabs && npm install`
* Visit `chrome://extensions` and enable `Developer mode`
* Click `Load unpacked extension` and select `app` folder under the local repository that you just clone
* run `grunt debug` and it will reload the extension when you change file

> Remember to reload the extensions when you change the `manifest.json` file.


# Reference

* [chrome developer extensions](https://developer.chrome.com/extensions)
* [manifest format](https://developer.chrome.com/extensions/manifest)