import { config } from '@onflow/fcl'

config({
  'app.detail.title': process.env.NEXT_PUBLIC_APP_NAME,
  'app.detail.icon': process.env.NEXT_PUBLIC_APP_ICON,
  'accessNode.api': process.env.NEXT_PUBLIC_ACCESS_NODE_API,
  'discovery.wallet': process.env.NEXT_PUBLIC_DISCOVERY_WALLET,
  'flow.network': process.env.NEXT_PUBLIC_NETWORK,
  '0xProfile': process.env.NEXT_PUBLIC_CONTRACT_PROFILE,
})
