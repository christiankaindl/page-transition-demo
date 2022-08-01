import { motion } from 'framer-motion'

export function MotionText ({ text, id }: { text: string, id: string }) {
  return (
    <>
      {text?.split(' ').map((word, index) => {
        return (
          <motion.span
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
            key={`${index}-${word}`}
            layout
            transition={{
              type: 'spring',
              delay: index * 0.025,
              duration: 0.75,
              bounce: 0
            }}
            layoutId={`${id}-${index}-${word}`}
          >
            {`${word} `}
          </motion.span>
        )
      })}
    </>
  )
}