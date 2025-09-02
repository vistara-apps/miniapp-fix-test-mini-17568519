'use client';

import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { useWallet } from '../hooks/useWallet';

export function ConnectButton() {
  const { isConnected, shortAddress, disconnect } = useWallet();

  if (isConnected && shortAddress) {
    return (
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium">{shortAddress}</span>
        <button
          onClick={disconnect}
          className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <ConnectWallet
      buttonClassName="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
    />
  );
}

