import Link from 'next/link';
import Image from 'next/image';
import { FaQuoteLeft, FaCheck } from 'react-icons/fa';

const About = () => {
  const values = [
    { title: 'Качество', description: 'Ние гарантираме високо качество на всички наши продукти и услуги.' },
    { title: 'Надеждност', description: 'Нашите клиенти могат да разчитат на нас във всяка ситуация.' },
    { title: 'Иновации', description: 'Постоянно търсим нови начини да подобрим нашите услуги.' },
    { title: 'Клиентски фокус', description: 'Вашите нужди са в центъра на нашата работа.' },
  ];

  const teamMembers = [
    { name: 'Хасан Исмаил', position: 'Управител', photo: '/images/team/hasan.jpg' },
    { name: 'Ахмет', position: 'Управител', photo: '/images/team/ahmet.png' },
    { name: 'Исмаил Сунай', position: 'Подръжка сайт', photo: '/images/team/ismail.png' },
  ];

  const testimonials = [
    { text: 'Работим с GarantiPlise от 5 години и винаги сме доволни от професионализма и качеството на услугите.', author: 'Петър Славов, "Строителни проекти"' },
    { text: 'Бърза реакция, коректни консултации и изключително отзивчив екип. Препоръчвам ги с две ръце!', author: 'Анна Георгиева, "Архитектурно бюро"' },
    { text: 'Качеството на продуктите отговаря напълно на обещаното, а екипът винаги е на разположение.', author: 'Димитър Павлов, "Инвеститор"' },
  ];

  const faqs = [
    { question: 'От колко години работи вашата компания?', answer: 'Ние работим на пазара от 2024 година и имаме богат опит в сферата.' },
    { question: 'Какви гаранции предлагате?', answer: 'Предлагаме гаранция от 2 години за всички нашите продукти и услуги.' },
    { question: 'Работите ли в цялата страна?', answer: 'Да, изпълняваме проекти в цяла България и чужбина.' },
    { question: 'Как мога да получа оферта?', answer: 'Можете да се свържете с нас по телефона.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Херо секция */}
      <div className="relative h-96 bg-gray-800 rounded-xl overflow-hidden mb-12 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">За нас</h1>
        </div>
      </div>

      {/* Интро секция */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-[#FB5FAB] inline-block">Кои сме ние?</h2>
        
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* 1. Fix за лявата снимка */}
          <div className="w-full lg:w-[45%] min-h-[350px] lg:min-h-[550px] relative rounded-xl overflow-hidden shadow-lg bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Модерна архитектура с големи прозорци"
              className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/plise-background.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <div className="w-full lg:w-[55%]">
            <div className="prose max-w-none text-gray-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Стремим се да предоставим най-високо качество</h3>

              <p className="text-lg mb-4 leading-relaxed">
                <span className="text-[#FB5FAB] font-semibold">Garanti Plise</span> е основана преди две години с ясната цел да внесе иновация и стил в ежедневието на българските домакинства. В свят, в който комфортът и естетиката вървят ръка за ръка, ние създаваме <span className="font-semibold">плисе комарници и щори</span>, които не само осигуряват надеждна защита от насекоми и контрол на светлината, но и допринасят за съвременния облик на вашия дом.
              </p>

              <p className="text-lg mb-4 leading-relaxed">
                Докато традиционните решения често се износват, създават неудобства или компрометират визията на пространството, нашите продукти комбинират <span className="font-semibold">дълготрайност</span>, <span className="font-semibold">функционалност</span> и <span className="font-semibold">модерен дизайн</span>. Без разкъсване, без досадни поправки — просто лекота, стил и сигурност.
              </p>

              <p className="text-lg mb-6 leading-relaxed">
                За нас комарниците и щорите не са просто функционални елементи. Те са <span className="font-semibold">удобство, което не прави компромис с визията</span>. С бърз монтаж и дискретно присъствие, <span className="text-[#FB5FAB] font-semibold">Garanti Plise</span> ви помага да се насладите на дома си – свободен от насекоми, изпълнен със свеж въздух и хармония, както и с перфектно регулирана светлина.
              </p>

               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 pt-6 border-t border-gray-200">
                <div className="relative flex-shrink-0 w-20 h-20">
                  <img 
                    src="/images/team/hasan.jpg"
                    alt="Хасан Исмаил"
                    width={80}
                    height={80}
                    className="w-full h-full rounded-full object-cover border-2 border-[#FB5FAB]"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/employee/hasan.jpg';
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FB5FAB]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="border-l-4 border-[#FB5FAB] pl-4 italic text-gray-700">
                    <p className="mb-2">"Вярваме в това, което правим, и създаваме доверие с клиентите си, като им осигуряваме надеждни и стилни решения за по-добър и спокоен дом."</p>
                  </div>
                  <div className="not-italic font-semibold mt-3">
                    <p className="text-[#FB5FAB]">
                      Хасан Исмаил
                    </p>
                    <p className="text-gray-600 text-sm">Управител и съосновател на Garanti Plise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Стойности */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-[#FB5FAB] inline-block">Нашите ценности</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4 mx-auto">
                <FaCheck className="text-[#FB5FAB] text-xl" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Екип */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-[#FB5FAB] inline-block">Нашият екип</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center flex flex-col items-center">
                {/* 3. Fix за закръглените и еднакви по размер снимки на екипа */}
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#FB5FAB] mb-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/placeholder-team.jpg';
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-[#FB5FAB] font-medium mb-2">{member.position}</p>
                <p className="text-gray-600">Професионалист с дългогодишен опит в областта.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* TODO: Ще чакаме за отзиви чак тогава ще ги кача за момента няма някакви отзиви! */}
      {/* Отзиви */}
      {/* <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-[#FB5FAB] inline-block">Отзиви на клиенти</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <FaQuoteLeft className="text-[#FB5FAB] text-2xl mb-4" />
              <p className="italic text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-right text-gray-800">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* ЧЗВ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#FB5FAB] inline-block">Често задавани въпроси</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Контакти */}
      <section className="bg-gray-50 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Имате въпроси?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Нашият екип е на разположение да отговори на всички ваши запитвания и да ви предостави необходимата информация.
        </p>
        <Link
          href="/contacts"
          className="inline-block px-8 py-3 bg-[#FB5FAB] text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors"
        >
          Свържете се с нас
        </Link>
      </section>
    </div>
  );
};

export default About;