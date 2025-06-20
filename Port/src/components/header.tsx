import '../App.css'
import { House, Laptop, Phone } from 'lucide-react'


function Header() {
    return(

        <header className="absolute top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center bg-transparent text-white">
      <h1 className="text-2xl font-bold">About me</h1>
      <nav className="flex  gap-6 text-lg items-center ">
        <a href="#" className="hover:text-blue-500 transition "> <House /> Home</a>
        <a href="#" className="hover:text-blue-500 transition">  <Laptop/> Projects</a>
        <a href="#" className="hover:text-blue-500 transition"> <Phone/> Contact</a>
      </nav>
    </header>

    )
}

export default Header