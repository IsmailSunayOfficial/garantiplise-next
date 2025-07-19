import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Контакти</h2>
        <div className="w-24 h-1 bg-[#FB5FAB] mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Контактна информация */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Свържете се с нас</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-[#FB5FAB] text-white p-3 rounded-full mr-4">
                <FaPhone size={18} />
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Телефон</h4>
                <a href="tel:+3595907441" className="text-gray-600 hover:text-[#FB5FAB] transition-colors text-lg">
                  +359 590 7441
                </a>
              </div>
            </div>

            <div className="flex items-start">
  <div className="bg-[#FB5FAB] text-white p-3 rounded-full mr-4">
    <FaEnvelope size={18} />
  </div>
  <div>
    <h4 className="font-medium text-gray-700">Имейл</h4>
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=garantiplise@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-[#FB5FAB] transition-colors text-lg"
    >
      garantiplise@gmail.com
    </a>
  </div>
</div>

            <div className="flex items-start">
              <div className="bg-[#FB5FAB] text-white p-3 rounded-full mr-4">
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Адрес</h4>
                <p className="text-gray-600 text-lg">
  гр. Разград, Южна промишлена зона, ул. „Търговищко шосе&quot; 1
</p>

              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#FB5FAB] text-white p-3 rounded-full mr-4">
                <FaClock size={18} />
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Работно време</h4>
                <p className="text-gray-600 text-lg">
                  Понеделник - Петък: 08:00 - 17:00<br />
                  Почивни дни: Събота и Неделя
                </p>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-medium text-gray-700 mb-4">Социални мрежи</h4>
              <div className="flex space-x-4 justify-center">
                <a 
                  href="https://www.facebook.com/profile.php?id=61555679908553" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-200 text-gray-700 p-3 rounded-full hover:bg-[#FB5FAB] hover:text-white transition-colors"
                >
                  <FaFacebookF size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/garanti.komarnici.bg/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-200 text-gray-700 p-3 rounded-full hover:bg-[#FB5FAB] hover:text-white transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

         {/* Google Maps интеграция */}
        <div className="h-full min-h-96 rounded-xl overflow-hidden shadow-md flex flex-col">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.693850365614!2d26.5336443154668!3d43.51955707912745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDMxJzEwLjQiTiAyNsKwMzInMTAuNCJF!5e0!3m2!1sen!2sbg!4v1620000000000!5m2!1sen!2sbg"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '400px' }}
            allowFullScreen
            loading="lazy"
            title="Местоположение на Garanti Plise"
            className="flex-grow"
          ></iframe>
          <div className="bg-white p-4 text-center border-t border-gray-200 flex justify-between items-center">
            <div className="text-left">
              <p className="text-gray-600 text-sm">гр. Разград, Южна промишлена зона</p>
              <p className="text-gray-800 font-medium">ул. &quot;Търговищко шосе&quot; 1</p>
            </div>
            <a 
              href="https://www.google.com/maps?q=43.519557,26.536229" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-[#FB5FAB] text-white rounded hover:bg-pink-700 transition-colors text-sm"
            >
              <FaMapMarkerAlt className="mr-2" />
              Отвори в Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;