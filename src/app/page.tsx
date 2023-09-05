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
            <h1 className='font-extrabold text-2xl text-Title'>PIMS</h1>
            <h1
              className='font-extrabold text-xl mt-1
        py-1 '
            >
              Síndrome inflamatorio multisisitemico past COVID-19
            </h1>
          </div>
          <div className='pt-10'>
            <Image
              src={'/resumen.jpg'}
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
                  Que es PIMS?
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
                  Sintomas
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
                  Factores de Riesgo
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
                  Diagnóstico
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
              Que es PIMS?
            </h3>
            <p className='paragraph'>
              El sindrome inflamatorio post COVID-19, abreviado como PIMS
              (Post-inflammatory Multisystem Syndrome) es una respuesta
              inflamatoria sistemica que se desarrolla despues de la infección
              por el virus{' '}
              <span className='font-bold text-LightBlue'>SARS-CoV-2</span>, que
              causa la COVID-19. <br />
              Es una condición médica rara que ha afectado principalmente a{' '}
              <span className='font-bold text-LightBlue'>
                niños y adolescentes
              </span>{' '}
              después de haber tenido una infección por COVID-19.
            </p>
          </div>
          <div className='content-box'>
            <h3 className='indexes' id='2'>
              Sintomas
            </h3>
            <p className='paragraph'>
              Los sintomas de PIMS son silimares a los de otras enfermedades
              inflamatoria y varia en gravedad.
              <br />
            </p>
            <span className='font-bold text-xl text-LightBlue'>
              SINTOMAS COMUNES
            </span>
            <ul className='list-disc list-inside space-y-1 mb-4'>
              <li>Fiebre alta</li>
              <li>Erupciones cutáneas</li>
              <li>Inflamacion de los ojos, labios y lengua</li>
              <li>Inflamacion de los ganglios linfáticos</li>
              <li>Dolor abdominal</li>
              <li>Diarrea</li>
              <li>Vómitos</li>
              <li>Dificultad para respirar</li>
            </ul>
            <span className='font-bold text-xl text-LightBlue'>
              SINTOMAS GRAVES
            </span>
            <br />
            <span>En caso más grave puede afectar:</span>
            <ul className='list-disc list-inside space-y-1 mb-4'>
              <li>El corazón</li>
              <li>Los riñones</li>
              <li>El sistema nervioso</li>
              <li>Otros órganos</li>
            </ul>
            <div className='mb-4'>
              <Image
                src={'/sintomas2.png'}
                width={500}
                height={500}
                alt='sintomas'
                style={{ borderRadius: '3%' }}
              />
            </div>
          </div>
          <div className='content-box'>
            <h3 className='indexes' id='3'>
              Factores de riesgo
            </h3>
            <ol className='list-decimal list-inside space-y-4'>
              <li>
                <span className='font-bold'>Edad</span>
                <br />
                Los niños y adolescentes{' '}
                <span className='font-bold text-LightBlue'>
                  menores de 21 años.
                </span>
                <br /> Los niños mas paquenos tienden de estar en mayor riesgo.
              </li>
              <li>
                <span className='font-bold'>Exposición previa al COVID-19</span>
                <br />
                Los que han tenido una infección por COVID-19 o han estado
                expuestos al COVID-19.
              </li>
              <li>
                <span className='font-bold'>Genética</span>
                <br />
                Algunos pueden tener una{' '}
                <span className='font-bold text-LightBlue'>
                  respuesta inmunológica anormal
                </span>{' '}
                después de la infección por COVID-19, debido a su predisposición
                genética.
              </li>
              <li>
                <span className='font-bold'>Antecedentes médicos</span>
                <br />
                Antecedentes médicos de afecciones crónicas, como{' '}
                <span className='font-bold text-LightBlue'>
                  obesidad
                </span> o{' '}
                <span className='font-bold text-LightBlue'>
                  enfermedades autoinmunitarias
                </span>
                , pueden estar en mayor riesgo de desarrollar PIMS.
              </li>
              <li>
                <span className='font-bold'>
                  Gravedad de la infección por COVID-19
                </span>
                <br />
                Se ha observado que el PIMS se presenta a menudo en caso leves o
                asintomáticas de COVID-19.
              </li>
            </ol>
            <div className='rounded-lg lg:w-fit border-solid border-2 p-1 mt-2 flex flex-col items-center'>
              <span>
                <span className=' text-red-600 font-extrabold'>X</span> síntomas
                graves de COVID-19
              </span>
              <p>=</p>
              <div className='flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941'
                  />
                </svg>
                desarrollo de PIMS
              </div>
            </div>
            <p className='paragraph'></p>
          </div>
          <div className='content-box'>
            <h3 className='indexes' id='4'>
              Diagnóstico
            </h3>
            <p className='paragraph'>
              El diagnóstico de PIMS se basa en la presencia de síntomas
              característicos después de una infección por COVID-19. También
              puede solicitar algunos estudios para confirmar el diagnóstico.
            </p>
            <span className='font-bold text-xl text-LightBlue'>Estudios</span>
            <ul className='list-disc list-inside space-y-1 mb-4'>
              <li>Análisis de sangre</li>
              <li>Ecocardiograma</li>
              <li>Radiografía de tórax</li>
              <li>Ecografía abdominal</li>
              <li>Cultivo de sangre y pruebas de PCR para COVID-19</li>
            </ul>
          </div>
          <div className='content-box'>
            <h3 className='indexes' id='5'>
              Tratamiento
            </h3>
            <ul className='list-disc list-inside space-y-2 mb-4'>
              <li>
                <span className='font-bold'>
                  Medicamentos antiinflamatorios
                </span>
                <ul className='list-disc list-inside space-y-2 pl-6'>
                  <li>
                    Inmunoglobulina intravenosa (IVIG)
                    <br />
                    <span className='flex'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6 mr-2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                        />
                      </svg>
                      Reduce inflamación y modula la respuesta inmunológica.
                    </span>
                  </li>
                  <li>
                    Corticosteroides
                    <br />
                    <span className='flex'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6 mr-2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                        />
                      </svg>
                      Reduce la inflamación y controlar los síntomas. eg.
                      Prednisona
                    </span>
                  </li>
                  <li>
                    Antiinflamatorios biológicos
                    <br />
                    <span className='flex'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-4 mr-2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                        />
                      </svg>
                      En caso grave o resistentes a otros tratamiento. eg.
                      Tocilizumab.
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <span className='font-bold'>
                  Tratamiento de los órganos afetcados
                </span>

                <ul className='list-disc list-inside space-y-2 pl-6'>
                  <li>
                    Cardiaco
                    <br />
                    <span className='flex'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-4 mr-2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                        />
                      </svg>
                      En caso de inflamación en el corazón o vasos sanguíneos.
                      <br />
                      Medicamentos: aspirina, anticoagulantes o Cirugía.
                    </span>
                  </li>
                  <li>
                    Respiratorio
                    <br />
                    <span className='flex'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-4 mr-2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                        />
                      </svg>
                      Soporte respiratorio con oxígeno
                    </span>
                  </li>
                  <li>
                    Renal y gastrointestinal
                    <br />
                    <span className='flex'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-4 mr-2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                        />
                      </svg>
                      <ul className='space-y-2'>
                        <li>Riñon: Hidratacion, Monitorización, Diálisis</li>
                        <li>
                          Gastrointestinal: Tratamiento sintomático, Nutrición
                          intravenosa o alimentación enteral, Monitorización.
                        </li>
                      </ul>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
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
