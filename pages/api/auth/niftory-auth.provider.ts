import { Provider } from 'next-auth/providers'

import { chainConfig } from '~/config/chain'
import { clientEnv } from '~/config/client'
import { serverEnv } from '~/config/server'

console.log(clientEnv.niftory, serverEnv.niftorySecret)

console.log(`${chainConfig.flowTestnet.niftoryAuth}/.well-known/openid-configuration`)

export const niftoryAuthProvider: Provider = {
  id: 'niftory',
  name: 'Niftory',
  type: 'oauth',
  wellKnown: `${chainConfig.flowTestnet.niftoryAuth}/.well-known/openid-configuration`,
  // We request offline_access and consent prompt because we need to get a refresh token
  authorization: {
    params: { scope: 'openid email profile offline_access', prompt: 'consent' },
  },
  clientId: clientEnv.niftory.clientId,
  clientSecret: serverEnv.niftorySecret,
  checks: ['pkce', 'state'],
  idToken: true,
  profile(profile) {
    return {
      id: profile.sub,
      name: profile.name,
      email: profile.email,
      image: profile.picture,
    }
  },
  httpOptions: {
    timeout: 10000,
  },
}
