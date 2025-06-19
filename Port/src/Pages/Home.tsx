import '../App.css'
import Perfil from '../assets/Perfil.png'

function Home() {

return (

<div className="flex bg-white w-screen h-screen">
  <div className="w-1/2 flex items-center text-gray-900 text-9xl font-bold justify-center">
  <div className="flex flex-col">
    <span className='italic'>Hello</span>
    <span className='ml-10 italic'>World</span>
    <span className='text-gray-700  text-5xl ml-17'> I'm a Dev</span>
  </div>
  <span className="ml-3 text-[250px] transform origin-bottom scale-y-150 scale-x-150 text-blue-700">!</span>
</div>
  <div className="w-1/2 flex flex-col items-center justify-center">
    <img src={Perfil} alt="Perfil" className='bg-blue-700  rounded-full max-w-150 shadow-xl/30'/>
  </div>
</div>

)

    
}

export default Home
