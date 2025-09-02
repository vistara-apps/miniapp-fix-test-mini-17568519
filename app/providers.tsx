'use client';

import { OnchainKitProvider } from '@coinbase/onchainkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { base } from 'viem/chains';
import { createConfig, http } from 'wagmi';
import { type ReactNode, useState } from 'react';

// Create Wagmi config with Base chain
const config = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(),
  },
});

export function Providers(props: { children: ReactNode }) {
  // Initialize React Query client
  const [queryClient] = useState(() => 
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000, // 1 minute
          refetchOnWindowFocus: false,
          retry: 1,
        },
      },
    })
  );

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
          chain={base}
          config={{
            appearance: {
              mode: 'dark',
              theme: 'default',
              name: 'Miniapp Fix Test',
              accentColor: '#3B82F6', // Blue accent color
              borderRadius: 'md',
            },
            connect: {
              showQrModal: true,
              disableUDC: false,
              disableEIP6963: false,
              disableInjected: false,
              preferredWallets: ['coinbase', 'metamask', 'rainbow', 'walletconnect'],
            },
            language: {
              connectWallet: 'Connect Wallet',
              disconnect: 'Disconnect',
              learnMore: 'Learn More',
              poweredBy: 'Powered by OnchainKit',
            },
          }}
        >
          {props.children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
