'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
	console.log('previousVersion', details.previousVersion);
});


chrome.browserAction.onClicked.addListener(function () {

	function updateCallback() {

	}

	function pinAllTabs(tabs) {
		for (var ii in tabs) {
			chrome.tabs.update(tabs[ii].id, { pinned: true }, updateCallback);
		}
	}

	// query all tabs in currentwindow
	chrome.tabs.query({currentWindow: true}, pinAllTabs);

});