import { InitBrowserActionService } from '../web-extensions/browserAction/';
import { InitExtensionService } from '../web-extensions/extension';
import { InitTabsService } from '../web-extensions/tabs';
import { Tab } from '../web-extensions/tabs/types';

export function RegisterBrowserActions(): void {
  const browserActionService = InitBrowserActionService();
  const extensionService = InitExtensionService();
  const tabsService = InitTabsService();

  if (browserActionService && extensionService && tabsService) {
    browserActionService.onClicked.addListener((tab: Tab) => {
      const extensionUrl = new URL(extensionService.getURL('index.html'));
      const tabUrl = new URL(tab.url || '');

      if (tab.id && tabUrl.origin !== extensionUrl.origin) {
        tabsService.update(tab.id, { active: true, url: extensionUrl.href });
      }
    });
  }
}
