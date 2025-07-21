import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-10" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* За компанията */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="Garanti Plise - Плисе комарници и щори"
                width={48}
                height={48}
                className="h-12 mr-3"
              />
              <h2 className="text-xl font-bold">Garanti Plise</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Специализирани в проектиране и производство на висококачествени плисе комарници и щори. От 2024г.
              създаваме иновативни решения, които съчетават функционалност и стил.
            </p>
            <div className="flex space-x-4" role="navigation" aria-label="Социални мрежи">
              <a
                href="https://www.facebook.com/profile.php?id=61555679908553"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FB5FAB] transition-colors"
                aria-label="Посетете нашата Facebook страница"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/garanti.komarnici.bg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FB5FAB] transition-colors"
                aria-label="Посетете нашия Instagram профил"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Бързи линкове */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FB5FAB]">Бързи линкове</h3>
            <nav role="navigation" aria-label="Бързи линкове">
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Начало
                  </Link>
                </li>
                <li>
                  <Link href="/catalog" className="text-gray-300 hover:text-white transition-colors">
                    Каталог
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    За нас
                  </Link>
                </li>
                <li>
                  <Link href="/contacts" className="text-gray-300 hover:text-white transition-colors">
                    Контакти
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                    Галерия
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Контакти */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FB5FAB]">Контакти</h3>
            <address className="not-italic">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <FaPhone className="mt-1 mr-3 flex-shrink-0" aria-hidden="true" />
                  <a href="tel:+3595907441" className="hover:text-white transition-colors">
                    +359 590 7441
                  </a>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="mt-1 mr-3 flex-shrink-0" aria-hidden="true" />
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=garantiplise@gmail.com"
                    className="hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    garantiplise@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span>гр. Разград, Южна промишлена зона, ул. „Търговищко шосе" 1</span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {currentYear} Garanti Plise. Всички права запазени.</p>
        </div>
      </div>

      {/* Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Garanti Plise",
            url: "https://garantiplise.com",
            logo: "https://garantiplise.com/images/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+359590744",
              contactType: "customer service",
              availableLanguage: "Bulgarian",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: 'ул. „Търговищко шосе" 1, Южна промишлена зона',
              addressLocality: "Разград",
              addressRegion: "Разград",
              postalCode: "7200",
              addressCountry: "BG",
            },
            sameAs: [
              "https://www.facebook.com/profile.php?id=61555679908553",
              "https://www.instagram.com/garanti.komarnici.bg/",
            ],
          }),
        }}
      />
    </footer>
  )
}

export default Footer
