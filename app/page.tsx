import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className='bg-neutral-400 top-o fixed w-screen flex place-items-center p-6 justify-between shadow-lg rounded-bl-lg rounded -br-lg'>
          <h1 className='text-3xl font-extrabold'>Kabum</h1>

          <nav className="flex">
              <span className='px-3 py-1 hover:scale-110 cursor-pointer transition'> 
                Monte o seu
              </span>
              <span className='px-3 py-1 hover:scale-110 cursor-pointer transition'> 
                Loja
              </span>
              <span className='px-3 py-1 hover:scale-110 cursor-pointer transition'> 
                Suporte
              </span>
              <button className='group/enter flex gap-2 ml-10 rounded-2xl border-black shadow-lg px-4 py-1 font-light'>
                Meus pedidos
            </button> 
          </nav>
      </header>
      <section className='h-screen text-center text-8xl p-36'>
          <div>
             <h1>Monte seu </h1>
             <h2>computador</h2>
          </div>
          
      </section>
    </>
  )

}
