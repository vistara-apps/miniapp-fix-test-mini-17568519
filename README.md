# Miniapp Fix Test

A Next.js Base mini app using OnchainKit and Farcaster Mini App SDK.

## Overview

Miniapp Fix Test is a simple but powerful mini app built for the Base blockchain and Farcaster ecosystem. It demonstrates the integration of OnchainKit for wallet connections and Farcaster Mini App SDK for frame interactions.

## Features

- **Wallet Connection**: Connect your Web3 wallet using OnchainKit
- **Farcaster Integration**: Seamless integration with Farcaster frames
- **Responsive Design**: Works on all devices and screen sizes
- **Dark Mode Support**: Optimized for dark mode viewing
- **Base Blockchain**: Built for the Base L2 ecosystem

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- A Web3 wallet (MetaMask, Coinbase Wallet, etc.)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vistara-apps/miniapp-fix-test-mini-17568519.git
   cd miniapp-fix-test-mini-17568519
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_onchainkit_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── api/              # API routes
│   │   └── webhook/      # Webhook endpoint for Farcaster
│   ├── components/       # React components
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Home page component
│   └── providers.tsx     # Provider components
├── docs/                 # Documentation
│   ├── API.md            # API documentation
│   ├── TECHNICAL_SPECS.md # Technical specifications
│   └── UI_UX_REQUIREMENTS.md # UI/UX requirements
├── public/               # Static assets
│   ├── .well-known/      # Well-known directory for Farcaster
│   │   └── farcaster.json # Farcaster frame configuration
│   └── manifest.json     # Web app manifest
├── .gitignore            # Git ignore file
├── next.config.mjs       # Next.js configuration
├── package.json          # Project dependencies
├── postcss.config.mjs    # PostCSS configuration
├── README.md             # Project documentation
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Farcaster Frame

The app includes a Farcaster frame configuration in `public/.well-known/farcaster.json`. This allows the app to be embedded as a frame in Farcaster clients.

## API Documentation

See [API.md](docs/API.md) for detailed API documentation.

## Technical Specifications

See [TECHNICAL_SPECS.md](docs/TECHNICAL_SPECS.md) for detailed technical specifications.

## UI/UX Requirements

See [UI_UX_REQUIREMENTS.md](docs/UI_UX_REQUIREMENTS.md) for detailed UI/UX requirements.

## Deployment

The app is deployed on Vercel at [https://miniapp-fix-test.vistara.dev](https://miniapp-fix-test.vistara.dev).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [OnchainKit](https://docs.onchainkit.xyz/)
- [Farcaster](https://www.farcaster.xyz/)
- [Base](https://base.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Wagmi](https://wagmi.sh/)
- [Viem](https://viem.sh/)

