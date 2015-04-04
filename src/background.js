function pinAllTabs(tabs) { 
	for (ii in tabs) {
		chrome.tabs.update(tabs[ii].id, { pinned: true }, function () {});
	}
}

chrome.browserAction.onClicked.addListener(function () {
	// query all tabs in currentwindow
	chrome.tabs.query({currentWindow: true}, pinAllTabs);
});