import Typewriter from './components/Typewriter'
import { Braces, Gamepad2, Mail, Paintbrush, Phone, Presentation } from 'lucide-react'
import { motion, useAnimate } from "motion/react"
import { Carousel, Timeline } from 'antd';
import ImageMasonry from './components/ImageMasonry';
import Section from './components/Section';

const artworks = [
    '/images/DigitalArt/Goblin Alchemist - Rendered Colors.jpg',
    '/images/DigitalArt/Jester Ginny Di.jpg',
    '/images/DigitalArt/jojo pose colour.jpg',
    '/images/DigitalArt/Mighty Nein.jpg',
    '/images/DigitalArt/Pirate Woman.jpg',
    '/images/DigitalArt/Profile.jpg',
    '/images/DigitalArt/Sunset Med.jpg',
    '/images/DigitalArt/Vex\'ahlia color.png',
    '/images/DigitalArt/Bleeding Naga.jpg',
    '/images/DigitalArt/Gargoyle.jpg',
]

// const designs = [
//     '/images/ClubsAndEvents/ImPress20  - FB Cover.jpg',
// ]

const examplePhrases = [
    "a Software Engineer",
    "a Fullstack Developper",
    "an avid Graphic Designer",
    "a hobbiest Digital Painter",
    "a TTRPG enthousiast",
]

export default function Dashboard() {
    const [scope, animate] = useAnimate()

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { clientX, clientY } = e
        const moveX = clientX - window.innerWidth / 2
        const moveY = clientY - window.innerHeight / 2
        animate("#chadi-img", {
            x: moveX * .01,
            y: moveY * .01,
        })
        animate("#title", {
            x: -moveX * .01,
        })
        animate("#background", {
            x: -moveX * .05,
            y: -moveY * .005,
        })
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const { touches } = e
        const {clientX, clientY} = touches[0];
        const moveX = clientX - window.innerWidth / 2
        const moveY = clientY - window.innerHeight / 2
        animate("#chadi-img", {
            x: moveX * .01,
            y: moveY * .01,
        })
        animate("#title", {
            x: -moveX * .01,
        })
        animate("#background", {
            x: -moveX * .05,
            y: -moveY * .005,
        })
    }

    return <div className='min-h-screen'>
        <div className='h-dvh overflow-clip' ref={scope}>
            <motion.div transition={{ type: "spring" }} className='bg-[url(/background.jpg)] bg-cover bg-center w-full h-full scale-110 fixed inset-0 -z-90' id='background'/>
            <motion.div
                className='w-full h-full backdrop-blur-xs absolute inset-0 z-10 lg:flex items-center justify-start overflow-x-clip'
                onMouseMove={e => handleMouseMove(e)}
                onTouchMove={e => handleTouchMove(e)}
            >
                <motion.div
                    transition={{ type: "spring" }}
                    id='title'
                    className='flex flex-col w-full gap-0 lg:gap-2 p-6 lg:p-12 lg:px-64 scale-105 bg-parchement/20 backdrop-blur-xs mt-24 lg:mt-0 shadow-2xl'
                >
                    <h1 className='text-4xl lg:text-8xl font-black text-parchement text-shadow-lg'>Welcome!</h1>
                    <h3 className='text-3xl lg:text-7xl font-light text-rich-cerulean'>I'm <b className='font-bold'>Chadi</b></h3>
                    <Typewriter className='text-xl lg:text-4xl font-light ' phrases={examplePhrases} keyPrefix='dashboard' prefix="I'm"/>
                </motion.div>
                <motion.div
                    id='chadi-img'
                    transition={{ type: "spring" }}
                    className='w-full lg:w-fit  h-150 lg:h-full absolute -bottom-20 lg:-bottom-56 -right-32 lg:right-64 z-10 scale-150 lg:scale-125'
                >
                  <motion.img
                      src='/Profile.png'
                      alt='chadi'
                      className='w-full h-full object-cover object-bottom drop-shadow-lg drop-shadow-orange/10'
                  />
                  <div className="bg-linear-to-b from-transparent to-white via-white/90 via-80% w-full absolute -bottom-1 inset-x-0 h-44 z-20"></div>
                </motion.div>
            </motion.div>
            <div className="absolute bottom-10 inset-x-10 flex flex-col items-start gap-8 z-10">
                <div className="flex gap-2 items-center -mb-5 text-shadow-lg text-shadow-shadow-grey/50 text-parchement">
                    <p className='text-7xl font-black stroke-black '>{new Date().getFullYear() - 2020}</p>
                    <div className='flex flex-col items-start justify-end gap-0 font-semibold'>
                        <p className='text-4xl uppercase -mb-1'>Years</p>
                        <p className='text-xl uppercase'>of Experience</p>
                    </div>
                </div>
                <span className='bg-parchement/60 backdrop-blur-xs text-sm text-shadow-grey w-fit px-4 py-2 rounded-xl shadow-xl shadow-shadow-grey/50 flex flex-col gap-1 items-start'>
                    <button onClick={() => globalThis.location.href = 'mailto:chadi.fendri@gmail.com'} className='transition-opacity opacity-100 hover:opacity-55 duration-200 cursor-pointer'>
                        <Mail className='inline mr-2.5 w-5 text-saga-green' />
                        chadi.fendri@gmail.com
                    </button> 
                    <button onClick={() => globalThis.location.href = 'tel:+21655252896'} className='transition-opacity opacity-100 hover:opacity-55 duration-200 cursor-pointer'>
                        <Phone className='inline mr-2.5 w-5 text-saga-green' />
                        +216 55 252 896
                    </button>
                </span>
            </div>
        </div>
        <div className="min-h-screen h-full bg-white relative p-24 flex flex-col gap-24 items-center">
            <div className="absolute top-0 inset-x-0 h-4 bg-orange shadow-xl shadow-shadow-grey/50 z-0"/>
            <div className='mx-auto max-w-360 w-full absolute inset-x-0 top-40 z-90'>
              <div className='rounded-4xl overflow-clip h-120 w-full text-center bg-parchement/80 shadow-xl flex flex-col gap-12 items-center justify-center text-shadow-grey'>
                <p className='text-center w-full font-bold text-saga-green text-6xl'>My Skills</p>
                <div className="flex justify-between items-center divide-x-2 divide-saga-green w-full">
                  <div className='flex flex-col gap-5 items-center justify-center w-full'>
                    <Paintbrush className='w-24 h-24 text-orange' />
                    <p className='text-3xl font-semibold'>Graphic<br/>Design</p>
                  </div>
                  <div className='flex flex-col gap-5 items-center justify-center w-full'>
                    <Braces className='w-24 h-24 text-orange' />
                    <p className='text-3xl font-semibold'>Fullstack<br/>Development</p>
                  </div>
                  <div className='flex flex-col gap-5 items-center justify-center w-full'>
                    <Gamepad2 className='w-24 h-24 text-orange' />
                    <p className='text-3xl font-semibold'>Game<br/>Development</p>
                  </div>
                  <div className='flex flex-col gap-5 items-center justify-center w-full'>
                    <Presentation className='w-24 h-24 text-orange' />
                    <p className='text-3xl font-semibold'>Project<br/>Management</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-120"></div>

            <Section title='My Work Experience' id='work-exp'>
              <Timeline
                mode='start'
                titleSpan="25%"
                classNames={{
                  root: '',
                  itemContent: 'text-xl!',
                  itemTitle: 'text-xl!',
                  itemIcon: 'border-saga-green! scale-175 mt-2.5! bg-white!',
                }}
                items={[
                  {
                    title: <span>
                      <p className='font-bold'>Hope Horizon</p>
                      <p className='text-lg italic'>(Tunisian Startup)</p>
                      <p className='text-sm'>March 2022 &mdash; Current</p>
                    </span>,
                    content: <span>
                      <p className='font-bold'>Fullstack Engineer & Project Manager</p>
                      <p className='pb-10'>
                        From working on the Graphic design <i>(Logo, graphical charter, and UI/UX with Photoshop & Figma)</i> of a number of medical platforms along with social media posts, advertisement flyers and promotional videos, to organizing work with a small team of 3 to 4 developers, to mentoring multiple small teams of interns (composed of around 4 interns) on small scale projects, to working Fullstack on Hope Horizon's main platform: <a href='https://smartcare.tn' target='_blank'><b className='text-[#f0787a]'>Smart</b><b className='text-[#4d6466]'>Care</b>.tn</a>
                      </p>
                    </span>,
                  },
                  {
                    title: <span>
                      <p className='font-bold'>Hope Horizon</p>
                      <p className='text-lg italic'>(Tunisian Startup)</p>
                      <p className='text-sm'>February 2021 &mdash; October 2021</p>
                    </span>,
                    content: <span>
                      <p className='font-bold'>Intern for an End of Studies Project</p>
                      <p className='pb-10'>
                        Design and development of a platform for hospital emergency patients’ diagnosis prediction using machine learning
                          Fullstack development using Vue JS and Python (FastAPI) of a dedicated data collection platform for partner hospitals
                          Analysis of collected data and model training for diagnosis prediction 
                      </p>
                    </span>,
                  },
                  {
                    title: <span>
                      <p className='font-bold'>Hope Horizon</p>
                      <p className='text-lg italic'>(Tunisian Startup)</p>
                      <p className='text-sm'>July 2020</p>
                    </span>,
                    content: <span>
                      <p className='font-bold'>Intern for a Summer Internship</p>
                      <p className='pb-10'>
                        Design and development of Anna: a platform for COVID-19 positivity prediction using machine learning (Anna.tn)
                          Graphic design (Logo, graphical charter, and UI mock-up with Photoshop) of Anna
                          Frontend development using Vue JS of the Anna
                          Data collection from various sources of COVID-19 affections in Tunisia
                      </p>
                    </span>,
                  },
                  {
                    title: <span>
                      <p className='font-bold'>Las Media's</p>
                      <p className='text-lg italic'>(Tunisian Company)</p>
                      <p className='text-sm'>August 2019</p>
                    </span>,
                    content: <span>
                      <p className='font-bold'>Intern for a Summer Internship</p>
                      <p className='pb-10'>
                        Design and implementation of a behavioural AI system with pathfinding functionality for NPCs (non-player characters) in a game developed in Unity
                      </p>
                    </span>,
                  },
                  {
                    title: <span>
                      <p className='font-bold'>Imagination Production</p>
                      <p className='text-lg italic'>(Tunisian Company)</p>
                      <p className='text-sm'>Fedruary 2018 &mdash; June 2018</p>
                    </span>,
                    content: <span>
                      <p className='font-bold'>Intern for an End of Studies Project</p>
                      <p className='pb-10'>
                        Design and implementation of a Machine Learning assets to simulate the player’s actions in a game developed in Unity
                      </p>
                    </span>,
                  },
                ]}
              />
            </Section>
            
            <Section title='My Work Portfolio' id='work-portfolio'>
              <Carousel className='w-full rounded-2xl bg-shadow-grey overflow-clip text-white p-10' adaptiveHeight arrows>
                <div className="w-full flex flex-col items-center justify-center gap-8">
                  <iframe
                    className='w-full max-w-5xl h-150 rounded-xl m-auto'
                    src="https://www.youtube.com/embed/fT3vIizsGT4?si=6MDSb4h6vD6TILUd"
                    title="Shattering our Sanity - First Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
                  <h1 className='font-bold text-2xl m-auto w-fit mt-6!'>Shattering our Sanity</h1>
                  <div className='mt-6! text-lg max-w-3xl m-auto text-center'>
                    <p>A <b>top-down cooperative</b> game with a <b>cosmic horror</b> theme. Focused on cooperative puzzle solving between the two players in order to survive their ordeal and escape their nightmare</p>
                  </div>
                </div>
                <div className="w-full p-8 h-150">
                </div>
                <div className="w-full p-8 h-150">
                </div>
              </Carousel>
            </Section>
            
            
            <Section title='My Graphic Design Portfolio' id='design-portfolio'>
              <></>
            </Section>
            
            <Section title='Some Digital Artworks' id='artworks'>
              <ImageMasonry className='max-w-7xl w-full m-auto' images={artworks}/>
            </Section>
        </div>
    </div>
}
