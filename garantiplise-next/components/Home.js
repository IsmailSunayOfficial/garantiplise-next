import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Home = () => {
  const benefits = [
    {
      title: 'Безплатна Консултация',
      description: 'Професионален съвет за вашия проект'
    },
    {
      title: 'Високо Качество',
      description: 'Използваме само сертифицирани материали'
    },
    {
      title: 'Гаранция',
      description: 'Дългосрочна гаранция за всички продукти'
    },
    {
      title: '98% Доволни Клиенти',
      description: 'Доказано качество от реални оценки'
    }
  ];

  // Динамично зареждане на снимки (замени с реалните пътища)
  const doorImages = [
    '/images/products/door/door_white.png',
    '/images/products/door/door_oreh.png',
    '/images/products/door/door_venge3.png', // Добави всички налични PNG файлове
  ];
  const windowImages = [
    '/images/products/window/window_white3.png',
    '/images/products/window/window_zlatendib4.png',
    '/images/products/window/window_antracit4.png', // Добави всички налични PNG файлове
  ];

  // Състояние за текущо изображение
  const [currentDoorImageIndex, setCurrentDoorImageIndex] = useState(0);
  const [currentWindowImageIndex, setCurrentWindowImageIndex] = useState(0);

  // Автоматично превключване на изображенията
  useEffect(() => {
    const doorInterval = setInterval(() => {
      setCurrentDoorImageIndex((prev) => (prev + 1) % doorImages.length);
    }, 4000); // Смяна на всеки 4 секунди
    const windowInterval = setInterval(() => {
      setCurrentWindowImageIndex((prev) => (prev + 1) % windowImages.length);
    }, 4000);

    // Почистване на интервалите при размонтиране на компонента
    return () => {
      clearInterval(doorInterval);
      clearInterval(windowInterval);
    };
  }, [doorImages.length, windowImages.length]);

  return (
    <>
      {/* Херо секция с локален фон */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/home.png" 
            alt="Фонова снимка на Garanti Plise"
            fill
            className="object-cover object-center"
            quality={90}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-md">
              Перфектна защита и комфорт за вашия дом
            </h1>
            <p className="mt-6 text-xl text-white max-w-xl drop-shadow-md">
              Специализирани в производство и монтаж на висококачествени плисе комарници и плисе щори
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                href="/catalog" 
                className="px-8 py-4 bg-[#FB5FAB] text-white font-semibold rounded-lg shadow-lg hover:bg-pink-700 transition-colors"
              >
                Разгледайте продуктите
              </Link>
              <Link 
                href="/contacts" 
                className="px-8 py-4 bg-white text-[#FB5FAB] font-semibold rounded-lg shadow-md hover:bg-gray-50 transition-colors"
              >
                Безплатна консултация
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Секция с каталози */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Открийте нашите решения за вашия дом</h2>
            <div className="w-24 h-1 bg-[#FB5FAB] mx-auto mt-4"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Изберете от елегантни плисе комарници и щори, проектирани за комфорт и стил.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Секция за прозорци */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative group">
              <div className="h-[600px] overflow-hidden relative"> {/* Увеличена височина до 600px */}
                <Image 
                  src={windowImages[currentWindowImageIndex]} 
                  alt="Плисе комарници за прозорци"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = '/images/placeholder-product.jpg';
                    e.target.onerror = null;
                  }}
                />
                <div className="absolute top-4 left-4 bg-[#FB5FAB] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Прозорци
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Плисе за прозорци</h3>
                <p className="mt-2 text-gray-600">Елегантна защита за вашите прозорци</p>
                <Link 
                  href="/catalog?tab=windows" 
                  className="mt-4 inline-block text-[#FB5FAB] font-semibold hover:text-pink-800 transition-colors"
                >
                  Вижте повече →
                </Link>
              </div>
            </div>

            {/* Секция за врати */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative group">
              <div className="h-[600px] overflow-hidden relative"> {/* Увеличена височина до 600px */}
                <Image 
                  src={doorImages[currentDoorImageIndex]} 
                  alt="Плисе комарници за врати"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = '/images/placeholder-product.jpg';
                    e.target.onerror = null;
                  }}
                />
                <div className="absolute top-4 left-4 bg-[#FB5FAB] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Врати
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Плисе за врати</h3>
                <p className="mt-2 text-gray-600">Идеална защита за вашите входове</p>
                <Link 
                  href="/catalog?tab=doors" 
                  className="mt-4 inline-block text-[#FB5FAB] font-semibold hover:text-pink-800 transition-colors"
                >
                  Вижте повече →
                </Link>
              </div>
            </div>

            {/* Секция за щори (с изображение вместо текст) */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative group">
              <div className="h-[600px] overflow-hidden relative flex items-center justify-center">
                <Image 
                  src="/images/products/stori/coming-soon.png" 
                  alt="Плисе щори – Скоро на разположение"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = '/images/placeholder-product.jpg';
                    e.target.onerror = null;
                  }}
                />
                <div className="absolute top-4 left-4 bg-[#FB5FAB] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Щори
                </div>
              </div>
              <div className="p-6 text-center">
                <Link 
                  href="/catalog?tab=shutters" 
                  className="mt-4 inline-block text-[#FB5FAB] font-semibold hover:text-pink-800 transition-colors"
                >
                  Научете повече, когато бъдат достъпни →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция защо да изберат нас */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Защо да изберете нашите комарници и щори?</h2>
            <p className="mt-4 text-xl text-gray-600">
              Комбинация от качество, изтънчен дизайн и доказана ефективност
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-[#FB5FAB] font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-center text-gray-800">Нашата мисия</h3>
            <p className="mt-4 text-gray-600 text-center">
              "Създаваме иновативни решения за защита от насекоми и контрол на светлината, които съчетават функционалност и естетика. Нашите плисе комарници и щори са проектирани да предлагат перфектен баланс между вентилация, естествена светлина и ефективна преграда против дразнещи насекоми, както и стилен дизайн за вашия дом."
            </p>
            <div className="flex justify-center mt-6">
              <Link 
                href="/about" 
                className="px-6 py-3 bg-[#FB5FAB] text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors"
              >
                Повече за нашата философия →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;