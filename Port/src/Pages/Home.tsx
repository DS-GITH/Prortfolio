import '../App.css'
import Perfil from '../assets/Perfil.png'
import { FaInstagram } from 'react-icons/fa'


function Home() {
return (

<div className="flex bg-white w-screen h-screen">
  <div className="w-1/2 flex items-center  justify-center">
  <div className="flex flex-col text-gray-900 text-9xl font-bold">
    <span className='italic text-shadow-lg'>Hello</span>
    <span className='ml-10 italic text-shadow-lg'>World</span>
    <span className='text-gray-700  text-5xl ml-17'> I'm a Dev</span>
      <button className='w-40 h-16 !text-2xl text-blue-700 font-bold !bg-gray-200 mt-20 shadow-xl/20'> Contact </button>
        
        <div className="absolute bottom-5 ">
          // @ts-ignore
          <FaInstagram size={24} color='#2b6cb0' className="hover:text-blue-900 transition "/>
        </div>

        
  </div>

  <span className="ml-3 mt-25 text-[250px] font-bold transform origin-bottom scale-y-160 scale-x-150 text-blue-700 text-shadow-lg">!</span>
</div>
  <div className="w-1/2 flex flex-col relative items-center justify-center">
    <img src={Perfil} alt="Perfil" className='bg-blue-700  rounded-full max-w-150 shadow-xl/30'/>
    <span className="text-gray-900 absolute mt-150 text-8xl font-bold ">Name</span>
  </div>



</div>

)

    
}

export default Home
