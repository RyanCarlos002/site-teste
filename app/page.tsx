import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className='bg- bg-purple-700 bg-gradient-to-t from-purple-950 p-5 flex  justify-between text-neutral-50 font-semibold place-items-center'>
        <h1 className='font-extrabold text-4xl'>Kabum </h1>

        <nav className=' flex gap-8 cursor-pointer place-items-center '>
          <a href="">Monte seu PC</a>
          <a href="">Loja</a>
          <a href="">Meus pedidos</a>

          <button className='border-double border-4 border-e-sky rounded-full p-2 '>login</button>
        </nav>
      </header>
      <section className="bg-[url('https://cdn.dooca.store/895/files/banner-loja-monte-seu-pc.jpg?v=1600799916')] h-screen bg-cover">
        <div>
          <h1>INICIAR CONFIG</h1>
        </div>
      </section>
      <section className='flex place-items-center'>
        <div className="p-24 grid place-items-center bg-[url('/banner2.png')] bg-cover w-[700px] h-[300px]]">
          <div className='flex items-center justify-center'>
              <h1>UBSUIBG</h1>
          </div>
        </div>
        <div>
          <h1>Placa de Vídeo</h1>
          <span>......................</span>
        </div>
      </section>
      <footer>
        <div>
          <h1>titulo</h1>
          <p>info</p>
          <p>info</p>
          <p>info</p>
        </div>
        <div>
          <h1>titulo</h1>
          <p>info</p>
          <p>info</p>
          <p>info</p>
        </div>
        <div>
          <h1>titulo</h1>
          <p>info</p>
          <p>info</p>
          <p>info</p>
        </div>
      </footer>
    </>
  )

}
