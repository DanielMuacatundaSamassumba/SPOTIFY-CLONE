import { Home, Search, Library, ChevronLeft, ChevronRight, CircleArrowDown, Bell, SkipBack,SkipForward, CirclePause, Repeat, Shuffle, ListMinus, PcCase , Volume1} from 'lucide-react'
import img from './assets/img/fdfg.jpg'
export default function App() {
  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex flex-1">
        <aside className="bg-primary_color w-80 text-white rounded ">
          <nav className='ml-10 mt-8'>
            <a href="#" className='flex text-lg font-bold'>   <Home className='' /><span className='ml-6'>Início</span></a>
            <a href="#" className='flex mt-4 text-lg font-bold ' ><Search /><span className='ml-6'>Procurar</span></a>
            <a href="#" className='flex mt-4 text-lg font-bold' >   <Library /><span className='ml-6'>A tua Biblioteca</span></a>
          </nav>
        </aside>
        <main className="flex-1 text-white bg-primary_color ml-5 rounded">
          <div className=''>
            <div className=' flex flex-row items-center justify-between'>
              <div className='flex text-bold'>
                <div className='bg-black ml-2 rounded-full p-1 cursor-pointer mt-3'> <ChevronLeft /></div>
                <div className='bg-black ml-2 rounded-full p-1 cursor-pointer mt-3'>
                  <ChevronRight /></div>
              </div>
              <div className='w-1/3 flex items-center justify-center'>
                <button className='bg-white text-black p-1 rounded-full mt-3 font-bold w-1/3'>Explorar o Premium</button>
                <button className='flex bg-black p-2 w-1/3 rounded-full flex items-center justify-center ml-1 mt-3'> <CircleArrowDown className='ml-0' /> <span className='ml-2'> Instalar App </span>           </button>
                <button className='mt-3 ml-2 bg-black p-2 rounded-full'><Bell /></button>
                <img className='w-10 rounded-full p-100 cursor-pointer mt-3 ml-2' src={img} alt="" />
              </div>
            </div>
            <h2 className='text-2xl font-bold mt-10 ml-4  cursor-pointer hover:underline'>Artistas populares</h2>
            <div className='flex flex row gap-10 mt-10 ml-4'>
              <div className='hover:bg-hover cursor-pointer'>
                <img src={img} alt="" className='rounded-full w-56' />
                <h2 className='font-bold ml-3'>2PAC</h2>
                <p className='ml-3 text-paragrafo'>Artista</p>
              </div>
              <div className='hover:bg-hover cursor-pointer'>
                <img src={img} alt="" className='rounded-full w-56' />
                <h2 className='font-bold ml-3'>2PAC</h2>
                <p className='ml-3'>Artista</p>
              </div>
              <div className='hover:bg-hover cursor-pointer'>
                <img src={img} alt="" className='rounded-full w-56' />
                <h2 className='font-bold ml-3'>2PAC</h2>
                <p className='ml-3'>Artista</p>
              </div>
              <div className='hover:bg-hover cursor-pointer'>
                <img src={img} alt="" className='rounded-full w-56' />
                <h2 className='font-bold ml-3'>2PAC</h2>
                <p className='ml-3'>Artista</p>
              </div>
              <div className='hover:bg-hover cursor-pointer'>
                <img src={img} alt="" className='rounded-full w-56' />
                <h2 className='font-bold ml-3'>2PAC</h2>
                <p className='ml-3'>Artista</p>
              </div>
            </div>
          </div>
          <h2 className='text-2xl font-bold mt-6'>Álbums populares</h2>
          <div className='flex gap-4 mt-8'>
            <div>
              <img src={img} alt="" className='rounded-sm ' />
              <h2 className='font-bold ml-3'>2PAC</h2>
              <p className='ml-3'>Artista</p>
            </div>
            <div>
              <img src={img} alt="" />
              <h2 className='font-bold ml-3'>2PAC</h2>
              <p className='ml-3'>Artista</p>
            </div>
            <div>
              <img src={img} alt="" />
              <h2 className='font-bold ml-3'>2PAC</h2>
              <p className='ml-3'>Artista</p>
            </div>
            <div>
              <img src={img} alt="" />
              <h2 className='font-bold ml-3'>2PAC</h2>
              <p className='ml-3'>Artista</p>
            </div>
            <div>
              <img src={img} alt="" />
              <h2 className='font-bold ml-3'>2PAC</h2>
              <p className='ml-3'>Artista</p>
            </div>
            <div>
              <img src={img} alt="" />
              <h2 className='font-bold ml-3'>2PAC</h2>
              <p className='ml-3'>Artista</p>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-black p-4 text-white flex justify-around ">
<div className='flex flex-col justify-center items-center w-full'>
  <div className='flex gap-4 w-full  justify-center ml-80' >
   <div> <Shuffle className='cursor-pointer'/>   </div>
    <div> <SkipBack className='cursor-pointer'/></div>
    <div><CirclePause className='cursor-pointer'/ >  </div>
    <div>  <SkipForward className='cursor-pointer'/> </div>
    <div> <Repeat className='cursor-pointer'/> </div>


  </div>
  <div className='bg-sound h-1 w-1/3 rounded mt-5 ml-80'></div>
</div>
<div className=' h-20 w-1/4 flex jusify-center items-center gap-4'>
  <div>
  
  <ListMinus/>
  </div>
  <div>
  
  <PcCase/>
  </div>
   <div className='flex justify-center items-center w-40'>
   
   <Volume1 className='text-2xl'/>
   <div className='bg-sound h-1 w-1/2'></div>
   </div>
   
</div>
      </footer>

    </div>
  )
}
