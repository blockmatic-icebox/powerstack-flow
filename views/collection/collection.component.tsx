import { CollectionProps } from './collection.type'

export function Collection({ collection }: CollectionProps) {
  return (
    <div>
      <pre>{JSON.stringify(collection, null, 2)}</pre>
    </div>
  )
}
