import dynamic from 'next/dynamic';
import React from 'react';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

const Button = dynamic(() => import('../Button'), {
  suspense: true,
});

import 'swiper/css';
import 'swiper/css/pagination';

interface IProps {
  children: React.ReactNode;
  pageClass: string;
}

const Slider: React.FC<IProps> = ({ children, pageClass }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      // direction={'vertical'}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className={pageClass}
    >
      <SwiperSlide key={`banner-slide-1`}>
        <h1 className='text-h1 sm:text-h1-sm md:text-h1-md lg:text-h1-lg'>
          <span className='gradientText'>Buy a House </span> from a <br />
          Private Person
        </h1>
        <p>
          Would you like to move, rent a new apartment and make a change. Are you changing your job and need to rent a new
          <br />
          apartment? Are you finally grown up and want to rent your first apartment?
        </p>
        <Button text='Read more' />
      </SwiperSlide>

      <SwiperSlide key={`banner-slide-2`}>
        <h1 className='text-h1 sm:text-h1-sm md:text-h1-md lg:text-h1-lg'>
          <span className='gradientText'>Simply rent </span> an <br />
          Spartment in Germany
        </h1>
        <p>
          Rents in Germany are rising! However, renting an apartment gives you the flexibility to react to a new <br /> life situation
        </p>
        <Button text='Read more' />
      </SwiperSlide>

      <SwiperSlide key={`banner-slide-3`}>
        <h1 className='text-h1 sm:text-h1-sm md:text-h1-md lg:text-h1-lg'>
          <span className='gradientText'>To Rent An </span>
          <br />
          Apartment
        </h1>
        <p>
          Rents in Germany are rising! However, renting an apartment gives you the flexibility to react to a new <br /> life situation
        </p>
        <Button text='Read more' />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
