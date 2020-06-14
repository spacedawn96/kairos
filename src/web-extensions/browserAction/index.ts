import { IS_CHROMIUM } from '../../utils/browserUtils';

import { ChromeBrowserActionService } from './chrome';
import { BrowserActionService } from './types';

/**
 * Initialize service for interacting with browser action events
 *
 * @returns `BrowserActionService` object or `undefined` if the browser does not support
 * interactions with browser idle state & events.
 */
export function InitBrowserActionService(): BrowserActionService | undefined {
  switch (true) {
    case IS_CHROMIUM:
      return new ChromeBrowserActionService();
    default:
      console.error(
        '[idle-service] Only Chromium or Firefox based browsers are supported',
      );
      return undefined;
  }
}
