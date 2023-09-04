'use client';

import { useEffect, useState, useRef } from 'react';

const Navbar = () => {
  const [ratio, setRatio] = useState(0);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const aTagContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      const scrollBarAnimation = () => {
        const yOffset = window.scrollY;
        const fullHeight = document.getElementById('main')!.offsetHeight;
        const newRatio = (yOffset / fullHeight) * 100;
        setRatio(newRatio);
      };

      const indexButtonHandler = () => {
        const id1 = document.getElementById('1')!.offsetTop - 100;
        const id2 = document.getElementById('2')!.offsetTop - 100;
        const id3 = document.getElementById('3')!.offsetTop - 100;
        const id4 = document.getElementById('4')!.offsetTop - 100;
        const id5 = document.getElementById('5')!.offsetTop - 100;
        const id6 = document.getElementById('6')!.offsetTop - 100;
        const yOffset = window.scrollY;

        if (yOffset >= id1 && yOffset < id2) {
          setActiveButtonIndex(1);
        } else if (yOffset >= id2 && yOffset < id3) {
          setActiveButtonIndex(2);
        } else if (yOffset >= id3 && yOffset < id4) {
          setActiveButtonIndex(3);
        } else if (yOffset >= id4 && yOffset < id5) {
          setActiveButtonIndex(4);
        } else if (yOffset >= id5 && yOffset < id6) {
          setActiveButtonIndex(5);
        } else if (yOffset >= id6) {
          setActiveButtonIndex(6);
        }
      };

      scrollBarAnimation();
      indexButtonHandler();
    };

    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  useEffect(() => {
    const parentContainer = aTagContainerRef.current;
    const activeButton = document.querySelector(
      '.button-active'
    ) as HTMLElement;

    if (parentContainer && activeButton) {
      parentContainer.scrollLeft =
        activeButton.offsetLeft - parentContainer.offsetWidth / 2;
    }
  }, [activeButtonIndex]);

  return (
    <nav className='fixed w-full lg:w-[1024px] bg-background  '>
      <div className='px-2'>
        <h1 className='indexes'>Contenido</h1>
        <div
          className='flex overflow-x-scroll scrollbar-hidden transition'
          ref={aTagContainerRef}
        >
          <a
            id='link1'
            className={`contents-button mr-2 ${
              activeButtonIndex === 1 && 'button-active'
            }`}
            href='#1'
          >
            Introduccion
          </a>
          <a
            id='link2'
            className={`contents-button mr-2 ${
              activeButtonIndex === 2 && 'button-active'
            }`}
            href='#2'
          >
            Fisiopatologia
          </a>
          <a
            id='link3'
            className={`contents-button mr-2 ${
              activeButtonIndex === 3 && 'button-active'
            }`}
            href='#3'
          >
            Epidemia
          </a>
          <a
            id='link4'
            className={`contents-button mr-2 ${
              activeButtonIndex === 4 && ' button-active'
            }`}
            href='#4'
          >
            Sintoma
          </a>
          <a
            id='link5'
            className={`contents-button mr-2 ${
              activeButtonIndex === 5 && ' button-active'
            }`}
            href='#5'
          >
            Tratamiento
          </a>
          <a
            id='link6'
            className={`contents-button ${
              activeButtonIndex === 6 && ' button-active'
            }`}
            href='#6'
          >
            Integrantes
          </a>
        </div>
      </div>
      <div className='w-full h-[2px] relative'>
        <div
          className={`bg-ColumnLine h-full absolute`}
          style={{ width: `${ratio.toFixed(0)}%` }}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;

// Síndrome inflamatorio multisisitemico past COVID-19
