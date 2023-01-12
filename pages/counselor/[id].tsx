import dynamic from 'next/dynamic';
import Head from 'next/head';
import { StaticImageData } from 'next/image';
import { SwiperSlide } from 'swiper/react';

const Sidebar = dynamic(() => import('../../components/Sidebar'), {
  suspense: true,
});

const Slider = dynamic(() => import('../../components/Slider'), {
  suspense: true,
});

const Button = dynamic(() => import('../../components/Button'), {
  suspense: true,
});

const HouseSiteInfo = dynamic(() => import('../../components/HouseSiteInfo'), {
  suspense: true,
});

import housePreviewImage1 from '../../public/assets/images/house-info-preview-img1.png';
import housePreviewImage2 from '../../public/assets/images/house-info-preview-img2.png';
import housePreviewImage3 from '../../public/assets/images/house-info-preview-img3.png';
import sliderBg from '../../public/assets/images/banner.png';
import React from 'react';

const sitesInfoArray = [
  {
    id: 'cheap-rent',
    heading: 'Cheap Rent',
    image: housePreviewImage1,
    descriptionText:
      "Have you been looking for an apartment or house for an affordable, even cheap, rent for a long time? Who searches must also find! And it is becoming increasingly difficult to find a cheap rent these days, so we recommend that you use the right search to find a cheap rent. Because only those who search correctly will find the right one! We will be happy to help you with the search and without a broker, without registration and completely uncomplicated with the largest stock of apartments and houses that can be rented cheaply. Don't wait, start your search for cheap rent now and find your new home with a guarantee!'",
  },
  {
    id: 'cheap-rents-in-germany',
    heading: 'Cheap Rent in Germany Rent',
    image: housePreviewImage2,
    descriptionText:
      'Rents in Germany are rising! Renting an apartment gives you the flexibility to react to a new life situation. A cheap rent in Germany is not rocket science. Only the right search can make your dream of cheap rent in Germany come true. We will be happy to help you with our search engine for cheap properties in Germany. No registration - only contact the provider if the offer is right! The search for cheap rent in Germany has never been easier. It is best to start looking for cheap rent in Germany right away.',
  },
  {
    id: 'inexpensive-rents-in-germany',
    heading: 'Inexpensive Rent in Germany',
    image: housePreviewImage3,
    descriptionText:
      'Rents in Germany are rising! Renting an apartment gives you the flexibility to react to a new life situation. A cheap rent in Germany is not rocket science. Only the right search can make your dream of cheap rent in Germany come true. We will be happy to help you with our search engine for cheap properties in Germany. No registration - only contact the provider if the offer is right! The search for cheap rent in Germany has never been easier. It is best to start looking for cheap rent in Germany right away.',
  },
];

interface IProps {
  heading: string;
  image: StaticImageData;
  descriptionText: string;
}

const Counselor: React.FC<IProps> = ({ heading, image, descriptionText }: IProps) => {
  return (
    <>
      <Head>
        <title>Wohnraam Sucher | Counselor</title>
      </Head>

      <div className='banner-slider-container' style={{ backgroundImage: `url(${sliderBg.src})` }}>
        <div className='max-w-7xl mx-auto px-5 sm:px-7 md:px-28 lg:px-16 xl:px-10'>
          <Slider pageClass='coucelorPage'>
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
          </Slider>
        </div>
      </div>

      <div className='grid mt-16 max-w-7xl mx-auto grid-cols-1 md:grid-cols-3'>
        <div className='col-span-1 md:col-span-2 px-5 mb-16'>
          <HouseSiteInfo heading={heading} image={image} descriptionText={descriptionText} />
        </div>

        <div className='px-5 mb-8'>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const pageIDs: Array<string> = ['cheap-rent', 'cheap-rents-in-germany', 'inexpensive-rents-in-germany'];

  const paths = pageIDs.map((item) => {
    return { params: { id: item } };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const id = context.params.id;

  const currentPost = sitesInfoArray.find((siteInfo) => id === siteInfo.id.toString());

  return {
    props: { ...currentPost },
  };
}

export default Counselor;
