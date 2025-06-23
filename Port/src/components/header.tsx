import { House, Laptop, Phone, Github, Linkedin, Mail, Menu } from 'lucide-react';
import { useState } from 'react';
import '../App.css'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-white/90 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo/Nome */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfólio
          </span>
        </div>

        {/* Navegação Principal - Desktop */} 
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink href="#home" icon={<House />} text="Início" />
          <NavLink href="#projects" icon={<Laptop />} text="Projetos" />
          <NavLink href="#contact" icon={<Phone />} text="Contato" />
        </nav>

        {/* Redes Sociais */}
        <div className="hidden md:flex gap-4">
          <SocialIcon href="https://github.com/DS-GITH" icon={<Github />} platform="GitHub" />
          <SocialIcon href="https://linkedin.com/in/seuuser" icon={<Linkedin />} platform="LinkedIn" />
          <SocialIcon href="mailto:david.tecds@gmail.com" icon={<Mail />} platform="Email" />
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Menu Mobile Expandido */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6 border-t">
            <nav className="flex flex-col gap-4">
              <MobileNavLink href="#home" icon={<House />} text="Início" />
              <MobileNavLink href="#projects" icon={<Laptop />} text="Projetos" />
              <MobileNavLink href="#contact" icon={<Phone />} text="Contato" />
            </nav>
            <div className="flex gap-4 mt-4 justify-center">
              <SocialIcon href="https://github.com/DS-GITH" icon={<Github />} platform="GitHub" />
              <SocialIcon href="https://linkedin.com/in/seuuser" icon={<Linkedin />} platform="LinkedIn" />
              <SocialIcon href="mailto:david.tecds@gmail.com" icon={<Mail />} platform="Email" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// Componentes auxiliares para melhor organização
function NavLink({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <a 
      href={href} 
      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group"
    >
      <span className="group-hover:scale-110 transition-transform">{icon}</span>
      <span className="font-medium">{text}</span>
    </a>
  );
}

function MobileNavLink({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <a 
      href={href} 
      className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50"
    >
      <span>{icon}</span>
      <span className="font-medium">{text}</span>
    </a>
  );
}

function SocialIcon({ href, icon, platform }: { href: string; icon: React.ReactNode; platform: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-blue-600 transition-colors"
      aria-label={platform}
    >
      {icon}
    </a>
  );
}

export default Header;