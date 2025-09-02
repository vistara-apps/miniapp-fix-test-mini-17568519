'use client';

import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import MiniAppSDK from '@farcaster/miniapp-sdk';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const miniApp = new MiniAppSDK();
    miniApp.setFrameReady();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-bold mb-8">Welcome to Base Mini App</h1>
      <ConnectWallet />
    </main>
  );
}
