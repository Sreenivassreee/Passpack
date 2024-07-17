chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'sendDataToTab') {
      const dynamicPath = message.dynamicPath; // Assuming dynamicPath is sent from your popup
  
      // Construct the URL with the dynamic path
      const url = `http://localhost:5173/${dynamicPath}`;
  
      // Open a new tab and pass data
      chrome.tabs.create({ url }, (tab) => {
        console.log(tab.id,"-----tab.id----")
        chrome.tabs.sendMessage("eText", { data: message.data });
      });
    }
  });

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'openNewTab') {
      const url = message.url; // Assuming message contains the URL
  
      // Open a new tab with the specified URL
      chrome.tabs.create({ url }, (tab) => {
        console.log('New tab created:', tab);
        // Optionally send a message to the new tab
        chrome.tabs.sendMessage(tab.id, { greeting: 'Hello from background script!' });
      });
    }
  });