'use client';

import { useAccount, useBalance, useDisconnect } from 'wagmi';
import { useCallback, useEffect, useState } from 'react';

export function useWallet() {
  const { address, isConnected, isConnecting, isDisconnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [shortAddress, setShortAddress] = useState<string>('');
  
  // Get balance for the connected wallet
  const { data: balance } = useBalance({
    address,
  });

  // Format address for display (0x1234...5678)
  useEffect(() => {
    if (address) {
      setShortAddress(
        `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
      );
    } else {
      setShortAddress('');
    }
  }, [address]);

  // Handle wallet disconnection
  const handleDisconnect = useCallback(() => {
    disconnect();
  }, [disconnect]);

  return {
    address,
    shortAddress,
    balance,
    isConnected,
    isConnecting,
    isDisconnected,
    disconnect: handleDisconnect,
  };
}

