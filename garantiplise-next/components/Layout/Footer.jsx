import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* За компанията */}
          <div>
            <div className="flex items-center mb-4">
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
              <h2 className="text-xl font-bold">Garanti Plise</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Специализирани в проектиране и производство на висококачествени плисе комарници и щори. 
              От 2024г. създаваме иновативни решения, които съчетават функционалност и стил.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61555679908553" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-[#FB5FAB] transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a 
                href="https://www.instagram.com/garanti.komarnici.bg/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-[#FB5FAB] transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Бързи линкове */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FB5FAB]">Бързи линкове</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Начало</Link></li>
              <li><Link href="/catalog" className="text-gray-300 hover:text-white transition-colors">Каталог</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">За нас</Link></li>
              <li><Link href="/contacts" className="text-gray-300 hover:text-white transition-colors">Контакти</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">Галерия</Link></li>
            </ul>
          </div>

          {/* Контакти */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FB5FAB]">Контакти</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 flex-shrink-0" />
                <a href="tel:+3595907441" className="hover:text-white transition-colors">+359 590 7441</a>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 flex-shrink-0" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=garantiplise@gmail.com" className="hover:text-white transition-colors">garantiplise@gmail.com</a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                <span>гр. Разград, Южна промишлена зона, ул. „Търговищко шосе“ 1</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Garanti Plise. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;