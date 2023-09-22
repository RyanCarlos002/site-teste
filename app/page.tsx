import Image from 'next/image'

export default function Home() {
  return (
    <>
      <title>Site Teste</title>
      <header className='bg- bg-purple-700 bg-gradient-to-t from-purple-950 p-5 flex fixed w-full justify-between text-neutral-50 font-semibold place-items-center'>
        <h1 className='font-extrabold text-4xl'>Kabum </h1>

        <nav className=' flex gap-8 cursor-pointer place-items-center '>
          <a href="">Monte seu PC</a>
          <a href="">Loja</a>
          <a href="">Meus pedidos</a>
          <button className='border-double border-4 border-e-sky rounded-full p-2 '>login</button>
        </nav>
      </header>

      {/* banner principal */}
      <section className="bg-[url('https://cdn.dooca.store/895/files/banner-loja-monte-seu-pc.jpg?v=1600799916')] h-screen w-full bg-cover mb-1">
      </section>

      {/* banner processador */}
      <section className=' bg-orange-600 bg-gradient-to-t mb-1 from-purple-950'>
          <div className='flex items-center justify-center p-32'>
            <Image alt='' height={700} width={500} src="/banner2.png"/>
            <h1 className='font-extrabold text-white  text-4xl m-20'> 
            Os Melhores Processadores
            </h1>
          </div>
      </section >

      {/* banner placa de vídeo */}
      <section className='bg-purple-950 bg-gradient-to-t mb-1 from-orange-600'>
          <div className='flex items-center p-32'>
              <h1 className='font-extrabold text-white  text-4xl m-20 text-left'>
                  As Melhores Placas de Vídeo 
              </h1>
              <Image alt='' height={700} width={500} src="/pvideo.png "/>
          </div>
      </section>

      {/* footer */}
      <footer className='bg-orange-600 bg-gradient-to-t from-orange-800 flex justify-around gap-8 p-20 text-lg font-black text-white'>
        <div className=''>
          <h1 className=' underline pb-4 text-xl'>Contato</h1>
          <p className='cursor-pointer'>Redes Socias</p>
          <p className='cursor-pointer'>Telefone</p>
          <p className='cursor-pointer'>(47)xxxx-xxxx</p>
        </div>
        <div>
          <h1 className=' underline pb-4 text-xl'>
            Trabalho conosco
          </h1>
          <p className='cursor-pointer'>Quem somos</p>
          <p className='cursor-pointer'>Cadastro</p>
          <p className='cursor-pointer'>Vagas</p>
        </div>
        <div>
          <h1 className=' underline pb-4 text-xl'>Suporte</h1>
          <p className='cursor-pointer'>Chat Online</p>
          <p className='cursor-pointer'>(47)xxxx-xxxx</p>
          <p className='cursor-pointer'>Posso te ajudar?</p>
        </div>
      </footer>
    </>
  )

}
