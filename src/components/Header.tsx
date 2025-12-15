import { useState } from 'react'
import { useMotionValueEvent, useScroll } from 'motion/react'
import NavigationMenu from './NavigationMenu'
import { SquareChevronUp } from 'lucide-react'


export default function Header() {
  const [isOnTop, setIsOnTop] = useState(true)

  const { scrollY } = useScroll({axis: 'y'})

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) setIsOnTop(false);
    else setIsOnTop(true);
  })


  return (<>
    <header className={`p-4 flex items-center justify-between transition-all duration-300 ease-in ${isOnTop ? 'bg-transparent text-white text-shadow-lg' : 'bg-parchement/80 text-shadow-grey'} ${isOnTop ? '' : 'shadow-lg'} sticky top-0 z-999 h-20 -mb-20`}>
      <button className="ml-4 text-3xl font-semibold flex items-center gap-3" onClick={() => window?.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img src='/Logo.png' className='w-10 h-10 inline drop-shadow-lg drop-shadow-shadow-grey/50' alt='Logo'/>
        <span><b>Chadi</b> Fendri</span>
      </button>
      <NavigationMenu/>
    </header>
    <button
      className={"ml-4 text-3xl font-semibold flex items-center gap-3 fixed bottom-10 right-10 z-20 text-white bg-rich-cerulean hover:bg-rich-cerulean/40 hover:scale-110 cursor-pointer transition-all duration-300 p-1 rounded-xl drop-shadow-lg drop-shadow-shadow-grey/40 " + (isOnTop ? 'opacity-0' : 'opacity-100')}
      onClick={() => window?.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <SquareChevronUp className='w-10 h-10'/>
    </button>
  </>)
}
