import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { MotionText } from './MotionText'
import styles from './PageTransition.module.css'

const backdropVariants = {
  transparent: {
    opacity: 0
  },
  opaque: {
    opacity: 1
  }
}

export default function PageTransition () {
  const router = useRouter()

  return (
    <div className={styles.root}>
      <motion.div variants={backdropVariants} initial='transparent' animate='opaque' exit='transparent' className={styles.backdrop} />
      <h1 className={styles.text}>
        <MotionText text={router.query.text as string} id={router.pathname} />
      </h1>
    </div>
  )
}

export function usePageTransition () {
  const router = useRouter()
  const [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
    let timeoutPending = false
    let routePending = false

    const start = (): void => {
      console.log('setting show true')
      setIsShowing(true)
      routePending = true
      timeoutPending = true

      window.setTimeout(() => {
        console.log('in timeout() handler')
        timeoutPending = false
        if (!routePending) {
          console.log('setting false in timeout()')
          // The route has already done, but waited on the minimum timeout
          setIsShowing(false)
        }
      }, 800)
    }

    const done = (): void => {
      console.log('in done() handler')
      routePending = false
      if (!timeoutPending) {
        // The minimum time has already passed
        console.log('setting false in done()')
        setIsShowing(false)
      }
    }

    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', done)
    router.events.on('routeChangeError', done)
    return () => {
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', done)
      router.events.off('routeChangeError', done)
    }
  }, [router.events])

  return [isShowing]
}