import Image from 'next/image'
import React from 'react'

import { ImageAssetProps } from './image-component.type'

export function ImageAsset({ src, alt }: ImageAssetProps) {
  const [loading, setLoading] = React.useState(true)

  return (
    <picture className="asset-image-wrapper">
      <Image
        src={src}
        alt={alt || ''}
        width={180}
        height={320}
        sizes="x2"
        className={loading ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'}
        onLoadingComplete={() => setLoading(false)}
      />
    </picture>
  )
}
