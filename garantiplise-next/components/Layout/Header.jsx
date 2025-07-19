import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaFacebookF, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-[#FB5FAB] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Лого */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Garanti Plise Logo" 
              width={48}
              height={48}
              className="h-12 mr-3"
              onError={(e) => {
                e.target.src = '/images/logo-placeholder.png';
              }}
            />
            <h1 className="text-2xl font-bold">Garanti Plise</h1>
          </Link>

          {/* Навигация */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" pathname={pathname}>Начало</NavLink>
            <NavLink to="/catalog" pathname={pathname}>Каталог</NavLink>
            <NavLink to="/about" pathname={pathname}>За нас</NavLink>
            <NavLink to="/contacts" pathname={pathname}>Контакти</NavLink>
            <NavLink to="/gallery" pathname={pathname}>Галерия</NavLink>
          </nav>

          {/* Социални мрежи */}
          <div className="hidden md:flex space-x-4">
            <SocialIcon 
              href="https://www.facebook.com/profile.php?id=61555679908553" 
              icon={<FaFacebookF size={20} />}
            />
            <SocialIcon 
              href="https://www.instagram.com/garanti.komarnici.bg/" 
              icon={<FaInstagram size={20} />}
            />
          </div>

          {/* Мобилно меню бутон */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Мобилно меню */}
        {isMenuOpen && (
          <MobileMenu setIsMenuOpen={setIsMenuOpen} pathname={pathname} />
        )}
      </div>
    </header>
  );
};

// Helper components
const NavLink = ({ to, children, pathname }) => (
  <Link 
    href={to} 
    className={`hover:text-pink-200 text-lg font-medium ${pathname === to ? 'text-pink-200 font-bold' : 'text-white'}`}
  >
    {children}
  </Link>
);

const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-pink-200 transition-colors"
  >
    {icon}
  </a>
);

const MobileMenu = ({ setIsMenuOpen, pathname }) => (
  <div className="md:hidden bg-pink-600 mt-4 rounded-lg p-4">
    <nav className="flex flex-col space-y-3">
      <MobileNavLink to="/" setIsMenuOpen={setIsMenuOpen} isActive={pathname === '/'}>Начало</MobileNavLink>
      <MobileNavLink to="/catalog" setIsMenuOpen={setIsMenuOpen} isActive={pathname === '/catalog'}>Каталог</MobileNavLink>
      <MobileNavLink to="/about" setIsMenuOpen={setIsMenuOpen} isActive={pathname === '/about'}>За нас</MobileNavLink>
      <MobileNavLink to="/contacts" setIsMenuOpen={setIsMenuOpen} isActive={pathname === '/contacts'}>Контакти</MobileNavLink>
      <MobileNavLink to="/gallery" setIsMenuOpen={setIsMenuOpen} isActive={pathname === '/gallery'}>Галерия</MobileNavLink>
    </nav>
    <div className="flex space-x-6 mt-4 pt-3 justify-center border-t border-pink-500">
      <SocialIcon href="https://www.facebook.com/profile.php?id=61555679908553" icon={<FaFacebookF size={20} />} />
      <SocialIcon href="https://www.instagram.com/garanti.komarnici.bg/" icon={<FaInstagram size={20} />} />
    </div>
  </div>
);

const MobileNavLink = ({ to, children, setIsMenuOpen, isActive }) => (
  <Link 
    href={to} 
    className={`hover:text-pink-200 py-2 border-b border-pink-500 ${isActive ? 'text-pink-200 font-bold' : 'text-white'}`}
    onClick={() => setIsMenuOpen(false)}
  >
    {children}
  </Link>
);

export default Header;