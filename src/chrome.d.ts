// declare namespace chrome {
//     namespace runtime {
//       function sendMessage(
//         message: any,
//         callback?: (response: any) => void
//       ): void;
//       // Add other methods you intend to use from chrome.runtime
//     }
  
//     namespace tabs {
//       function create(
//         createProperties: chrome.tabs.CreateProperties,
//         callback?: (tab: chrome.tabs.Tab) => void
//       ): void;
//       function sendMessage(
//         tabId: number,
//         message: any,
//         callback?: (response: any) => void
//       ): void;
//     }
  
//   }
declare namespace chrome.browserAction {
  interface BrowserAction {
    openPopup(): void;
    setBadgeText(details: chrome.browserAction.BadgeTextDetails): void;
    // Define other methods and properties as needed
  }

  interface BadgeTextDetails {
    text: string;
    tabId?: number;
  }

  // Add more interfaces for other methods and properties if necessary

  // Expose browserAction object in global Chrome namespace
  const browserAction: BrowserAction;
}