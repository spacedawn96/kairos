import { IS_CHROMIUM } from '../../utils/browserUtils';

import { ChromeTabsService } from './chrome';
import { TabsService } from './types';

/**
 * Initialize service for interacting with browser tabs
 *
 * @returns `TabsService` object or `undefined` if the browser does not support
 * interactions with browser tabs.
 */
export function InitTabsService(): TabsService | undefined {
  switch (true) {
    case IS_CHROMIUM:
      return new ChromeTabsService();
    default:
      console.error(
        '[tabs-service] Only Chromium or Firefox based browsers are supported',
      );
      return undefined;
  }
}
