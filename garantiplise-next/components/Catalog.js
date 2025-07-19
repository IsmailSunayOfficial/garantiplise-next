import Link from 'next/link';
import Image from 'next/image';
import { windowProducts, doorProducts } from '/components/productData';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const shutterProducts = [];

const Catalog = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('windows');

  useEffect(() => {
    if (router.query.tab) {
      const validTabs = ['windows', 'doors', 'shutters'];
      const tabFromQuery = router.query.tab;

      if (validTabs.includes(tabFromQuery)) {
        setActiveTab(tabFromQuery);
      }
    }
  }, [router.query.tab]);

  const activeProducts = activeTab === 'windows' ? windowProducts : activeTab === 'doors' ? doorProducts : shutterProducts;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Каталог плисе</h2>
          <div className="w-24 h-1 bg-[#FB5FAB] mx-auto mt-4"></div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab('windows')}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg focus:outline-none ${
                activeTab === 'windows'
                  ? 'bg-[#FB5FAB] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Комарници за прозорци (18 мм)
            </button>
            <button
              onClick={() => setActiveTab('doors')}
              className={`px-6 py-3 text-sm font-medium focus:outline-none ${
                activeTab === 'doors'
                  ? 'bg-[#FB5FAB] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Комарници за врати (28 мм)
            </button>
            <button
              onClick={() => setActiveTab('shutters')}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg focus:outline-none ${
                activeTab === 'shutters'
                  ? 'bg-[#FB5FAB] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Щори
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeProducts.length > 0 ? (
            activeProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/product/${product.id}`}>
                  <Image 
                    src={product.images[0]} 
                    alt={product.name} 
                    width={500}
                    height={500}
                    className="w-full h-[500px] object-cover"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-product.jpg';
                    }}
                  />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    <Link href={`/product/${product.id}`} className="hover:text-[#FB5FAB]">
                      {product.name}
                    </Link>
                  </h3>
                  <div className="mb-3">
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-gray-500 mt-1"><span className="font-medium">Цвят:</span> {product.color}</p>
                    <p className="text-gray-500"><span className="font-medium">Рамка:</span> {product.frame}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/product/${product.id}`}
                      className="px-6 py-2 bg-[#FB5FAB] text-white font-medium rounded hover:bg-pink-700 transition-colors text-center flex-1"
                    >
                      Виж повече
                    </Link>
                    <a 
                      href="tel:+3595907441" 
                      className="px-6 py-2 bg-white text-[#FB5FAB] font-medium rounded border border-[#FB5FAB] hover:bg-pink-50 transition-colors text-center flex-1"
                    >
                      Запитване
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : activeTab === 'shutters' ? (
            <div className="col-span-full">
              <div className="bg-white rounded-lg shadow-md p-6 mx-auto max-w-2xl text-center flex items-center justify-center min-h-[500px]">
                <div>
                  <p className="text-gray-800 text-lg mb-4 mx-auto max-w-lg">
                    В момента на сайта не разполагаме със снимки на щори, но сме тук, за да ви помогнем! Свържете се с нас и ще ви подпомогнем с избора на плисирани щори, подходящи за вашия дом. Очаквайте скоро каталог с нашите щори!
                  </p>
                  <a 
                    href="tel:+3595907441" 
                    className="px-6 py-2 bg-[#FB5FAB] text-white font-medium rounded hover:bg-pink-700 transition-colors inline-block"
                  >
                    Свържете се с нас
                  </a>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Catalog;