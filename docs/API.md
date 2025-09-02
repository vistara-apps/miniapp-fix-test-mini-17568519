# API Documentation

## Overview

This document outlines the API endpoints and integration details for the Miniapp Fix Test application. The application is built using Next.js, OnchainKit, and Farcaster Mini App SDK.

## Authentication

The application uses wallet-based authentication through OnchainKit's ConnectWallet component.

## Farcaster Mini App Integration

### SDK Initialization

```typescript
import MiniAppSDK from '@farcaster/miniapp-sdk';

const miniApp = new MiniAppSDK();
miniApp.setFrameReady();
```

### Frame Configuration

The Farcaster frame configuration is defined in `public/.well-known/farcaster.json` with the following properties:

- **version**: The frame version (currently "1")
- **name**: The name of the mini app
- **subtitle**: A brief subtitle for the mini app
- **description**: A detailed description of the mini app
- **iconUrl**: URL to the mini app's icon
- **homeUrl**: The main URL of the mini app
- **splashImageUrl**: URL to the splash image
- **splashBackgroundColor**: Background color for the splash screen
- **heroImageUrl**: URL to the hero image
- **tagline**: A short tagline for the mini app
- **screenshotUrls**: Array of URLs to screenshots of the mini app
- **primaryCategory**: The primary category of the mini app
- **tags**: Array of tags associated with the mini app
- **webhookUrl**: URL for the webhook endpoint

## Wallet Integration

The application integrates with Web3 wallets using OnchainKit and Wagmi.

### Configuration

```typescript
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { WagmiProvider } from 'wagmi';
import { base } from 'viem/chains';
import { createConfig, http } from 'wagmi';

const config = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(),
  },
});

// Usage in providers.tsx
<WagmiProvider config={config}>
  <QueryClientProvider client={queryClient}>
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
      chain={base}
      config={{
        appearance: {
          mode: 'dark',
          theme: 'default',
          name: 'My Base Mini App',
        },
      }}
    >
      {props.children}
    </OnchainKitProvider>
  </QueryClientProvider>
</WagmiProvider>
```

### Wallet Connection

The application uses the ConnectWallet component from OnchainKit to handle wallet connections:

```typescript
import { ConnectWallet } from '@coinbase/onchainkit/wallet';

// Usage in components
<ConnectWallet />
```

## API Endpoints

### Webhook Endpoint

**URL**: `/api/webhook`
**Method**: POST
**Description**: Handles webhook events from Farcaster

**Request Body**:
```json
{
  "event": "string",
  "data": {}
}
```

**Response**:
```json
{
  "success": true,
  "message": "Webhook received"
}
```

## Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: API key for OnchainKit
- `FARCASTER_DEVELOPER_MNEMONIC`: Mnemonic for Farcaster developer account (for frame signing)
- `FARCASTER_DEVELOPER_FID`: Farcaster ID for the developer account

## Error Handling

API errors are returned with appropriate HTTP status codes and error messages in the following format:

```json
{
  "error": true,
  "message": "Error message",
  "code": "ERROR_CODE"
}
```

