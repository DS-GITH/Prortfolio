import '../App.css'


function Header() {
    return(

        <header className="absolute top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center bg-transparent text-white">
      <h1 className="text-2xl font-bold !text-gray-500">About me</h1>
      <nav className="flex gap-6 text-lg">
        <a href="#" className="hover:text-blue-500 transition">Home</a>
        <a href="#" className="hover:text-blue-500 transition">Projetos</a>
        <a href="#" className="hover:text-blue-500 transition">Contato</a>
      </nav>
    </header>

    )
}

export default Header