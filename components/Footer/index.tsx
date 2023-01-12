import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import footer from '../../public/assets/images/footerLogo.png';
import facebook from '../../public/assets/images/facebook.png';
import twitter from '../../public/assets/images/twitter.png';
import linkdIn from '../../public/assets/images/linkedin.png';
import instagram from '../../public/assets/images/insta.png';
import footerBg from '../../public/assets/images/footerImg.png';

import Input from '../Input';

const Footer: React.FC = () => {
  return (
    <footer className='footer-container' style={{ backgroundImage: `url(${footerBg.src})` }}>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12 px-5 py-12'>
          <div className='text-white'>
            <Image className='w-64' src={footer} alt='logo' />
            <p className='text-xs mt-4'>
              Lorem Ipsum is simply dummy text of the printing and typesetting <br />
              industry. Lorem Ipsum has been the industrys standard dummy...
            </p>
            <div className='flex mt-7'>
              <a href='#'>
                <Image className='social-logo' src={facebook} alt='facebook' />
              </a>
              <a href='#'>
                <Image className='social-logo' src={twitter} alt='twitter' />
              </a>

              <a href='#'>
                <Image className='social-logo' src={linkdIn} alt='linkedin' />
              </a>

              <a href='#'>
                <Image className='social-logo' src={instagram} alt='instagram' />
              </a>
            </div>
          </div>
          <div className='text-white'>
            <p className='text-h3'>Quick Links</p>
            <p className='mt-3'>Datenschutz</p>
            <p className='mt-3'>Rechtliche Informationen</p>
            <p className='mt-3'>Impressum</p>
          </div>
          <div className='text-white'>
            <p className='text-h3'>Connect with us</p>
            <p className='mt-3 font-semibold'>Email</p>
            <p className=''>info@exam.com</p>
            <p className='mt-3 font-semibold'>Phone</p>
            <p className=''>TEL: 123-456-789</p>
            <p className='mt-3 font-semibold'>Address</p>
            <p className=''>Street abc,lorem ipsum</p>
          </div>
          <div className=''>
            <p className='text-h3 mb-4 text-white'>Updates & offers</p>
            <Input button placeholder='Special Search' />
          </div>
        </div>
      </div>
      <div className='footer-divider'></div>
      <p className='text-xs text-center my-3  text-white'>Copyright © 2022 wohnsucher.de . all rights reserved.</p>
    </footer>
  );
};

export default Footer;
