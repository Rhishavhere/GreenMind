import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className="flex justify-between m-4 bg-white/10 pl-4 pr-4 pt-2 pb-2 rounded-lg">
        <div className='hover:cursor-pointer'>ZoupAI</div>
        <div className='flex justify-center gap-10'>
          <p className='hover:cursor-pointer hover:scale-110 transition duration-300'>Home</p>
          <p className='hover:cursor-pointer'>Services</p>
          <p className='hover:cursor-pointer'>Contact</p>
        </div>
        <div className='hover:cursor-pointer'>Sign In</div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        ENERGY SOLUTIONS WITH ZOUP AI
      </div>

      </main>
    </>
  )
}
