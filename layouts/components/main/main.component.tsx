export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 p-2">
      <div className="mb-20">{children}</div>
    </main>
  )
}
