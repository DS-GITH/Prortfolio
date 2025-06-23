import '../App.css';
import Perfil from '../assets/Perfil.png';

function Home() {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen bg-white overflow-hidden mt-15 sm:mt-15 md:mt-10 lg:mt-5 ">
      
      {/* Texto à esquerda */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-20">
        <div className="flex flex-col text-left">
          <h1 className="text-gray-900 font-bold italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none text-shadow-lg">
            Hello
          </h1>
          <h1 className="text-gray-900 font-bold italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none text-shadow-lg md:ml-10">
            World
          </h1>
          <p className="text-gray-700 mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            I'm a Dev
          </p>
          <button className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 w-32 sm:w-36 md:w-40 h-12 sm:h-14 md:h-16 text-lg sm:text-xl md:text-2xl text-blue-700 font-bold bg-gray-200 shadow-xl">
            Contact
          </button>
        </div>
        {/* Excluído o “!” pois polui visualmente em dispositivos menores */}
      </div>

      {/* Imagem à direita */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-20">
        <div className="relative text-center">
          <img 
            src={Perfil} 
            alt="Perfil" 
            className="bg-blue-700 rounded-full object-cover shadow-xl 
                      w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
          />
          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
            Name
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
