'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const setScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition >= 500) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', setScroll);
    return () => {
      window.removeEventListener('scroll', setScroll);
    };
  }, []);

  const onClickAncherTag = (x: Number) => {
    const target = document.getElementById(x.toString());
    console.log(target);
    target && target.scrollIntoView({ block: 'start' });
  };

  return (
    <div className=' max-w-[1024px] mx-auto'>
      {showNavbar && <Navbar />}
      <main id='main' className='w-full lg:max-w-[1024px] px-4 pt-1 mb-60'>
        <div className='mt-5'>
          <div className='pb-6 bottom-border'>
            <h1 className='font-extrabold text-2xl text-Title'>Covid-19</h1>
            <h1
              className='font-extrabold text-xl mt-1
        py-1 '
            >
              Síndrome inflamatorio multisisitemico past COVID-19
            </h1>
          </div>
          <div className='rounded-2xl  pt-10'>
            <Image
              src={'/covidimg01.jpg'}
              width={500}
              height={500}
              alt='covid img'
              style={{ borderRadius: '3%' }}
            />
          </div>
          <div className='mt-3 px-2 flex mb-3 bottom-border'>
            <h3 className='indexes mr-5'>Contenido</h3>
            <ul
              className='mt-3 text-LightBlue list-inside font-extrabold
          space-y-2 mb-11 '
            >
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    onClickAncherTag(1);
                  }}
                  href='#1'
                >
                  Introducción
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    onClickAncherTag(2);
                  }}
                  href='#2'
                >
                  Fisiopatologia
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    onClickAncherTag(3);
                  }}
                  href='#3'
                >
                  Epidemia
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    onClickAncherTag(4);
                  }}
                  href='#4'
                >
                  Sintoma
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    onClickAncherTag(5);
                  }}
                  href='#5'
                >
                  Tratamiento
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    onClickAncherTag(6);
                  }}
                  href='#6'
                >
                  Integrante
                </a>
              </li>
            </ul>
          </div>
          <div className='content-box'>
            <h3 className='indexes' id='1'>
              Introducción
            </h3>
            <p className='paragraph'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              quia sit alias laborum porro aliquam, debitis ex quibusdam. Sint
              officiis laborum voluptatem exercitationem iste ad ut, nesciunt
              dolorum doloribus autem.
            </p>
          </div>
          <div className='content-box'>
            <h3 className='indexes' id='2'>
              Fisiopatologia
            </h3>
            <p className='paragraph'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quam mauris, mattis et erat eu, congue rhoncus neque.
              Integer feugiat tincidunt lobortis. Vestibulum eu tempus lectus.
              Curabitur iaculis tellus non lorem fringilla, nec tincidunt turpis
              elementum. Pellentesque pellentesque commodo posuere. Mauris
              feugiat quis nunc vel tincidunt. Vivamus urna mauris, tincidunt ac
              porta nec, congue id nunc. Quisque ac nisl diam. Vestibulum
              aliquam venenatis dictum. Aenean sed nibh lobortis magna molestie
              pellentesque malesuada placerat turpis. Morbi non tellus felis.
              Fusce sed quam in urna tempus pretium ut non justo. Nulla
              malesuada dui a pellentesque blandit. Nullam dictum tristique
              orci, a vestibulum velit venenatis sit amet. Sed iaculis sed
              libero nec congue. Pellentesque nec nibh libero.
            </p>
            <p className='paragraph'>
              Sed in metus at nunc pharetra imperdiet. Sed ac sodales dui.
              Maecenas eros magna, finibus et lorem auctor, porta venenatis
              nisi. Fusce malesuada mollis enim quis porta. Donec eu felis vel
              elit ullamcorper facilisis. Pellentesque vulputate viverra
              laoreet. Aliquam ligula magna, tincidunt in aliquet vitae, pretium
              nec est. Curabitur vel posuere eros. Nam at purus eget justo
              vehicula elementum sed in ligula. In hac habitasse platea
              dictumst. Proin arcu quam, dignissim sed fermentum non, tincidunt
              sit amet massa. Donec ut mollis turpis. Nulla vitae porttitor
              enim. Suspendisse sapien enim, feugiat quis iaculis at, cursus nec
              nisi. Fusce nec ipsum semper, ultricies mi in, lobortis quam.
              Pellentesque pulvinar, nulla non cursus pulvinar, eros lacus
              scelerisque mi, id volutpat ipsum augue malesuada nisl. Aenean
              urna velit, rhoncus et feugiat a, molestie in nibh. Vestibulum
              suscipit ornare sollicitudin. Vivamus laoreet volutpat augue, non
              cursus eros tempus in. Proin fringilla luctus tellus quis
              facilisis.
            </p>
          </div>
          <div className='content-box'>
            <h3 className='indexes' id='3'>
              Epidemia
            </h3>
            <p className='paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              eum maiores consequuntur quasi ea amet libero qui laborum rem,
              reprehenderit voluptatibus ratione sunt eaque repudiandae
              quibusdam quos, corrupti voluptas laboriosam?
            </p>
          </div>
          <div className='content-box'>
            <h3 className='indexes' id='4'>
              Sintoma
            </h3>
            <ul className='list-disc list-inside space-y-2 mb-3'>
              <li>Donec sodales dui vitae volutpat egestas.</li>
              <li>Nullam at neque sed nunc ornare imperdiet non eget erat.</li>
              <li>
                Donec vitae libero sit amet quam tempor eleifend eget nec risus.
              </li>
              <li>
                Pellentesque sit amet risus sed ante rutrum imperdiet quis ut
                nunc.
              </li>
              <li>Aenean posuere velit nec mattis placerat.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
          <div className='content-box'>
            <h3 className='indexes' id='5'>
              Tratamiento
            </h3>
            <p className='paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis tempora labore a quis laboriosam temporibus officia et
              placeat, dignissimos explicabo nobis nesciunt, itaque maiores
              aliquam eaque quos. Hic, ea corporis.
            </p>
          </div>
          <div className='mb-11'>
            <h3 className='indexes' id='6'>
              Integrantes
            </h3>
            <ul className='list-disc list-inside space-y-3'>
              <li>Vitoria Regina Pereira Silva 59272</li>
              <li>Si Yeol Lee 51260</li>
              <li>Sicel Rios Saucedo 66713</li>
              <li>Rebeca Melka de Morais Melo 59804</li>
              <li>Laura Cori ticona 57877</li>
              <li>Emerson Santiago da Silva 66390</li>
              <li>Frixon Stevee Pijal Vargas 66748</li>
              <li>Ángela Patricia Dorado Roca 56181</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

// ESTUDIANTES
// 1. Vitoria Regina Pereira Silva 59272

// 2. Si Yeol Lee 51260 grupo A

// 3.Sicel Rios Saucedo 66713 grupo A

// 4. Rebeca Melka de Morais Melo 59804 Grupo A

// 5. Laura Cori ticona 57877

// 6.Emerson Santiago da Silva 66390

// 7.Frixon Stevee Pijal Vargas 66748

// 8.Ángela Patricia Dorado Roca  56181  * grupo C*
