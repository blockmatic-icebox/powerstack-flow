import { useState } from 'react'

import { Button } from '~/components/button'
import { createNFTSet, getNiftoryApps } from '~/services/niftory'

export function HomeMain() {
  const [data, setData] = useState({})
  return (
    <div>
      <br /> <br />
      <Button onClick={async () => setData(await createNFTSet())} label="create set" />
      <Button onClick={async () => setData(await getNiftoryApps())} label="get apps" />
      <br /> <br />
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  )
}
