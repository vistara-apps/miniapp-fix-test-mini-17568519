'use client';

import { useWallet } from '../hooks/useWallet';

export function WalletInfo() {
  const { isConnected, address, balance } = useWallet();

  if (!isConnected || !address) {
    return null;
  }

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Wallet Information</h2>
      <div className="space-y-2">
        <p className="text-sm">
          <span className="font-medium text-gray-400">Address:</span>{' '}
          <span className="font-mono">{address}</span>
        </p>
        {balance && (
          <p className="text-sm">
            <span className="font-medium text-gray-400">Balance:</span>{' '}
            {parseFloat(balance.formatted).toFixed(4)} {balance.symbol}
          </p>
        )}
      </div>
    </div>
  );
}

