import { useEffect } from "react"
import { MotionText } from "./MotionText"
import styles from './PostPage.module.css'
import { motion } from 'framer-motion'
import { useRouter } from "next/router"

const backdropVariants = {
  transparent: {
    opacity: 0
  },
  opaque: {
    opacity: 1
  }
}

interface Props {
  title: string
  description: string
}
export default function PostPage ({ title, description }: Props) {
  useEffect(() => {
    console.log('first render post page')
  }, [])
  const router = useRouter()
  console.log('router.pathname', router.pathname)
  return (
    <motion.div variants={backdropVariants} initial='transparent' animate='opaque' exit='transparent' className={styles.root}>
      <main className={styles.content}>
        <h1>
          <MotionText text={title} id={router.pathname} />
        </h1>
        <p>{description}</p>
      </main>
    </motion.div>
  )
}
