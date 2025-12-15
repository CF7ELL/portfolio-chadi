import { Button } from 'antd'
import { Facebook, FileUser, Linkedin, Mail, Phone, Twitter, Youtube } from 'lucide-react'


export default function Footer() {
  return (
    <footer className={`p-32 flex flex-col gap-4 items-center justify-center bg-shadow-grey text-parchement shadow-xl shadow-shadow-grey`}>
      <h1 className='font-bold text-4xl'>Resume</h1>
      <Button
        onClick={() => window.open('/CV - Chadi Fendri.pdf')}
        size='large'
        shape='round'
        title='Chadi CV'
        className='bg-rich-cerulean! text-white! text-4xl! p-8! mb-8! hover:bg-rich-cerulean/80! border-4! border-transparent! hover:border-rich-cerulean! hover:drop-shadow-2xl hover:scale-110'
        icon={<FileUser className='-mb-1 w-12 h-12'/>}
        type='link'
      />
      <h1 className='font-bold text-4xl'>Contact Me</h1>
      <div className='text-center font-light'>
        <p>Mustpha Hjeyej Street</p>
        <p>New Ariana, Tunisia 2080</p>
      </div>
      <span className='text-sm w-fit px-4 py-2 rounded-xl shadow-xl shadow-shadow-grey/50 flex flex-col gap-1 items-start'>
          <button onClick={() => globalThis.location.href = 'mailto:chadi.fendri@gmail.com'} className='transition-opacity opacity-100 hover:opacity-55 duration-200 cursor-pointer'>
              <Mail className='inline mr-2.5 w-5 text-saga-green' />
              <p className='w-44 inline-block text-center'>chadi.fendri@gmail.com</p>
          </button> 
          <button onClick={() => globalThis.location.href = 'tel:+21655252896'} className='transition-opacity opacity-100 hover:opacity-55 duration-200 cursor-pointer'>
              <Phone className='inline mr-2.5 w-5 text-saga-green' />
              <p className='w-44 inline-block text-center'>+216 55 252 896</p>
          </button>
      </span>
      <h1 className='font-bold text-4xl mt-8'>Social Media</h1>
      <div className='text-center font-light flex gap-4 justify-center items-center'>
        <a href="https://linkedin.com/in/chadi-fendri" target="_blank"><Linkedin className='w-10 h-10'/></a>
        <a href="https://www.facebook.com/CF7ELL" target="_blank"><Facebook className='w-10 h-10'/></a>
        <a href="https://twitter.com/CF7ELL" target="_blank"><Twitter className='w-10 h-10'/></a>
        <a href="https://www.youtube.com/user/CFELL1412" target="_blank"><Youtube className='w-10 h-10'/></a>
      </div>
      <div className="w-64 m-auto mt-16! pt-4 border-t border-parchement text-sm font-light text-center">
        Chadi Fendri &mdash; {new Date().getFullYear()}
      </div>
    </footer>
  )
}
