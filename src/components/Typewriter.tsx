import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const LETTER_DELAY = 0.05
const BOX_FADE_DURATION = 0.07
const FADE_DELAY = 5
const MAIN_FADE_DURATION = 0.25
const SWAP_DELAY_IN_MS = 5500

type LetterDisplayProps = {
    letter: string,
    className: string,
    keyPrefix: string,
    index: number,
}
function LetterDisplay({ letter, className, keyPrefix, index }: Readonly<LetterDisplayProps>){
    return <motion.span
        className={'relative ' + className}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
            delay: FADE_DELAY,
            duration: MAIN_FADE_DURATION,
            ease: "easeInOut",
        }}
        key={`${keyPrefix}-${index}`}
    >
        <motion.span
            className='text-balance '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                delay: index * LETTER_DELAY,
                duration: 0,
            }}
        >
            {letter === ' ' ? <>&nbsp;</>: letter}
        </motion.span>

        
        <motion.span
            className='absolute top-0.75 right-0 bottom-0.75 left-px bg-shadow-grey'
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
                delay: index * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
            }}
        />
    </motion.span>
}


type TypewriterProps = {
    phrases: Array<string>,
    className: string,
    keyPrefix: string,
    prefix?: string,
}
export default function Typewriter({ phrases, className, keyPrefix, prefix = undefined }: Readonly<TypewriterProps>) {
    const [phraseIndex, setPhraseIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setPhraseIndex((pv) => (pv + 1) % phrases.length);
        }, SWAP_DELAY_IN_MS);

        return () => clearInterval(intervalId);
    }, []);

    return <div className="inline-flex">
        {prefix && <div className={className}>{prefix}&nbsp;</div>}
        {phrases[phraseIndex].split('').map((l, i) => (<LetterDisplay className={className} letter={l} index={i} keyPrefix={keyPrefix} key={`${keyPrefix}-${phraseIndex}-${i}`} />))}
    </div>
}
