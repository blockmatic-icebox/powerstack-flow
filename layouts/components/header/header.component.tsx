import React from 'react'

import { NiftoryAuth } from './niftory-auth.component'

export function Header() {
  return (
    <header className="flex justify-between px-3 py-2">
      Logo
      <div className="flex justify-end pt-1 h-30 lg:pr-7">
        <NiftoryAuth />
      </div>
    </header>
  )
}
