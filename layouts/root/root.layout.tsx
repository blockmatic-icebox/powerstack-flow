import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Main } from '../components/main'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col content-center w-screen h-screen sm:content-start">
      <Header />
      <Main>{children}</Main>

      <Footer />
    </div>
  )
}
