export const chainConfig = {
  flowMainnet: {
    chainNamespace: 'flow',
    grpc: 'https://api.mainnet-beta.flow.com',
    niftory: 'https://graphql.api.niftory.com',
    niftoryAuth: 'https://auth.niftory.com',
    blockExplorer: 'https://flowscan.org/',
    chainId: '',
    displayName: 'Flow Mainnet',
    ticker: 'FLOW',
    tickerName: 'Flow',
  },
  flowTestnet: {
    chainNamespace: 'flow',
    grpc: '',
    niftory: 'https://graqphql.api.staging.niftory.com',
    niftoryAuth: 'https://auth.staging.niftory.com',
    blockExplorer: 'https://testnet.flowscan.org/',
    chainId: '',
    displayName: 'Flow Testnet',
    ticker: 'FLOW',
    tickerName: 'Flow',
  },
} as const
