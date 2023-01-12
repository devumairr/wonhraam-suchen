import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/router';

import menuIcon from '../../public/assets/images/icon-menu.png';
import logo from '../../public/assets/images/logo.png';

const Input = dynamic(() => import('../Input'), {
  suspense: true,
});

const Header: React.FC = () => {
  const { isReady, pathname } = useRouter();

  const [activePath, setActivePath] = useState('/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isReady) {
      setActivePath(pathname);
    }
  }, [isReady, pathname]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
          setIsMenuOpen(false);
        } else {
          setIsMenuOpen(true);
        }
      });
    }
  }, []); //

  return (
    <header className='bg-[#f8f8f8]'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between px-2 py-5'>
          <Link href='/'>
            <Image src={logo} alt='app logo' width={170} />
          </Link>

          <button className='block md:hidden' onClick={() => setIsMenuOpen(true)}>
            <Image src={menuIcon} alt='search icon' width={40} />
          </button>

          <div className={`transition-transform fixed top-0 right-0 translate-x-full md:translate-x-0 ${isMenuOpen && 'translate-x-0'} w-100 h-full md:static z-[9999] block md:flex items-center gap-4 w-full md:w-auto -ml-2 p-3 md:p-0 bg-[#f8f8f8]`}>
            <div className='close-menu block md:hidden text-right '>
              <button className='bg-gradient rounded-lg px-4 py-2 font-bold' onClick={() => setIsMenuOpen(false)}>
                X
              </button>
            </div>

            <ul className='block md:flex gap-4'>
              <li className=' px-3 pt-2 md:p-0 mb-3 md:mb-0  text-h5'>
                <Link href='/' className={` font-bold ${activePath === '/' ? 'gradientText' : ''}`}>
                  Home
                </Link>
              </li>
              <li className='px-3 pt-2 md:p-0 mb-3 md:mb-0 text-h5'>
                <Link href='/counselor' className={` font-bold ${activePath === '/counselor' ? 'gradientText' : ''}`}>
                  Counselor
                </Link>
              </li>
            </ul>
            <div className='w-full md:w-[280px] h-full px-3 pt-2 md:p-0'>
              <Input placeholder='Special Search' />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
