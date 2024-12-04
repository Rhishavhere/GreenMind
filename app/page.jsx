import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className="flex justify-between m-4 bg-white/10 pl-4 pr-4 pt-2 pb-2 rounded-lg">
        <div className='hover:cursor-pointer'>ZoupAI</div>
        <div className='flex justify-center gap-10'>
          <p className='hover:cursor-pointer hover:scale-110 transition duration-300'>Home</p>
          <p className='hover:cursor-pointer hover:scale-110 transition duration-300'>Services</p>
          <p className='hover:cursor-pointer hover:scale-110 transition duration-300'>Contact</p>
        </div>
        <div className='hover:cursor-pointer'>Sign In</div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="relative flex place-items-center">
        <p className='font-bold text-6xl text-center'>
          ENERGY SOLUTIONS <br/>WITH <span className='italic'>ZOUP AI</span></p>
      </div>

      </main>
    </>
  )
}
