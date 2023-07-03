import Header from './header'

export default function Layout({children}) {
    return (

            <main className="flex flex-col items-center justify-between">
                <Header />

            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
                {children}
              </div>
            </main>

    )
}
