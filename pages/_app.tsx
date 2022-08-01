import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PageTransition, { usePageTransition } from '../components/PageTransition'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  const [isTransition] = usePageTransition()
  return (
    <>
      <AnimatePresence>
        {!isTransition && <Component {...pageProps} />}
      </AnimatePresence>
      <AnimatePresence>
        {isTransition && <PageTransition />}
      </AnimatePresence>
    </>
  )
}

export default MyApp
