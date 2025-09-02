'use client';

import { useEffect, useState } from 'react';
import { ConnectButton } from './components/ConnectButton';
import { WalletInfo } from './components/WalletInfo';
import { initializeFarcaster, setFrameReady, isInFrame, getCurrentUser } from './utils/farcaster';
import { useWallet } from './hooks/useWallet';

export default function Home() {
  const { isConnected } = useWallet();
  const [farcasterUser, setFarcasterUser] = useState<any>(null);
  const [isFrameEnvironment, setIsFrameEnvironment] = useState<boolean>(false);

  useEffect(() => {
    // Initialize Farcaster Mini App SDK
    const miniApp = initializeFarcaster();
    
    // Set frame as ready
    setFrameReady(miniApp);
    
    // Check if running in a frame
    setIsFrameEnvironment(isInFrame(miniApp));
    
    // Get current Farcaster user if available
    getCurrentUser(miniApp).then((user) => {
      if (user) {
        setFarcasterUser(user);
      }
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Miniapp Fix Test
          {isFrameEnvironment && <span className="ml-2 text-green-500">• Frame</span>}
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <ConnectButton />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Base Mini App</h1>
        <p className="text-xl mb-8">
          A simple Next.js app using OnchainKit and Farcaster Mini App SDK
        </p>
        
        {!isConnected && (
          <div className="mt-8 mb-8">
            <p className="text-lg mb-4">Connect your wallet to get started</p>
            <ConnectButton />
          </div>
        )}
      </div>

      {isConnected && (
        <div className="w-full max-w-md mt-8">
          <WalletInfo />
          
          {farcasterUser && (
            <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Farcaster User</h2>
              <p className="text-sm">
                <span className="font-medium text-gray-400">Username:</span>{' '}
                {farcasterUser.username}
              </p>
              <p className="text-sm">
                <span className="font-medium text-gray-400">FID:</span>{' '}
                {farcasterUser.fid}
              </p>
            </div>
          )}
        </div>
      )}

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left gap-4">
        <a
          href="https://docs.base.org/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Base{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Base, the secure, low-cost, builder-friendly Ethereum L2.
          </p>
        </a>

        <a
          href="https://docs.farcaster.xyz/learn/what-is-farcaster"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Farcaster{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore Farcaster, a sufficiently decentralized social network.
          </p>
        </a>

        <a
          href="https://docs.onchainkit.xyz/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            OnchainKit{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Discover OnchainKit, a toolkit for building onchain apps.
          </p>
        </a>
      </div>
    </main>
  );
}
