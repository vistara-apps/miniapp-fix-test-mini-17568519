import MiniAppSDK from '@farcaster/miniapp-sdk';

/**
 * Initialize the Farcaster Mini App SDK
 * @returns The initialized MiniAppSDK instance
 */
export function initializeFarcaster(): MiniAppSDK {
  const miniApp = new MiniAppSDK();
  return miniApp;
}

/**
 * Set the frame as ready for Farcaster
 * @param miniApp The MiniAppSDK instance
 */
export function setFrameReady(miniApp: MiniAppSDK): void {
  miniApp.setFrameReady();
}

/**
 * Get the current user's Farcaster information
 * @param miniApp The MiniAppSDK instance
 * @returns Promise resolving to the user's Farcaster information
 */
export async function getCurrentUser(miniApp: MiniAppSDK): Promise<any> {
  try {
    const user = await miniApp.getCurrentUser();
    return user;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

/**
 * Check if the app is running in a Farcaster frame
 * @param miniApp The MiniAppSDK instance
 * @returns Boolean indicating if the app is running in a frame
 */
export function isInFrame(miniApp: MiniAppSDK): boolean {
  return miniApp.isInFrame();
}

/**
 * Handle frame button click events
 * @param miniApp The MiniAppSDK instance
 * @param buttonIndex The index of the button that was clicked
 * @param handler The function to call when the button is clicked
 */
export function handleFrameButtonClick(
  miniApp: MiniAppSDK,
  buttonIndex: number,
  handler: (buttonIndex: number) => void
): void {
  miniApp.onButtonClick((event) => {
    if (event.buttonIndex === buttonIndex) {
      handler(buttonIndex);
    }
  });
}

