import { signIn, signOut, useSession } from 'next-auth/react'

import { Button } from '~/components/button'

export function NiftoryAuth() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <Button onClick={signOut} label=" Sign out" />
      </>
    )
  }
  return <Button onClick={signIn} label="Sign in" variant="primary" />
}
