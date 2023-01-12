import Head from 'next/head';
import dynamic from 'next/dynamic';
import { SwiperSlide } from 'swiper/react';
import img1 from '../../public/assets/images/post1.png';
import img2 from '../../public/assets/images/post2.png';
import img3 from '../../public/assets/images/post3.png';
import img4 from '../../public/assets/images/post4.png';
import sliderBg from '../../public/assets/images/banner.png';

const Slider = dynamic(() => import('../../components/Slider'), {
  suspense: true,
});

const Button = dynamic(() => import('../../components/Button'), {
  suspense: true,
});
const FindSection = dynamic(() => import('../../components/FindSection'), {
  suspense: true,
});
const FindTenatesAndBuyers = dynamic(() => import('../../components/FindTenatesAndBuyers'), {
  suspense: true,
});
const PostPreviewHorizontal = dynamic(() => import('../../components/PostPreviewHorizontal'), {
  suspense: true,
});
const Sidebar = dynamic(() => import('../../components/Sidebar'), {
  suspense: true,
});

const data = [
  {
    title: 'Request - compare - select',
    desc: 'Construction financing made easy: Submit your free inquiry now and receive a selection of non-binding offers from our financing partners.',
    target: 'Determine the price now',
    imageUrl: img1,
  },
  {
    title: 'Request - compare - select',
    desc: 'Construction financing made easy: Submit your free inquiry now and receive a selection of non-binding offers from our financing partners.',
    target: 'Request an offer now',
    imageUrl: img2,
  },
  {
    title: 'Move stress free',
    desc: 'ow move quickly, safely and professionally - here you will find the right moving company in your region.',
    target: 'Ask for free',
    imageUrl: img2,
  },
  {
    title: 'Living & furnishing',
    desc: 'Tips and information on how to make your own four walls more beautiful. Also: Interesting facts about tenancy law and important court decisions',
    target: 'See more',
    imageUrl: img3,
  },
  {
    title: 'Build & renovate',
    desc: 'Tips and information on how to make your own four walls more beautiful. Also: Interesting facts about tenancy law and important court decisions',
    target: 'See more',
    imageUrl: img4,
  },
];

function Home() {
  return (
    <>
      <Head>
        <title>Wohnraam Sucher</title>
      </Head>
      <div className='banner-slider-container' style={{ backgroundImage: `url(${sliderBg.src})` }}>
        <div className='max-w-7xl mx-auto px-5 sm:px-7 md:px-28 lg:px-16 xl:px-15 2xl:px-0'>
          <Slider pageClass='homePage'>
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
      <FindSection />

      <div className='grid mt-12 max-w-7xl mx-auto grid-cols-1 md:grid-cols-3 .'>
        <div className='col-span-1 md:col-span-2 px-5'>
          <FindTenatesAndBuyers />
          <h3 className='text-h3 sm:text-h3-sm md:text-h3-md lg:text-h3-lg mb-5 font-bold'>
            Determine Real <span className='gradientText'> Rstate Prices</span>
          </h3>
          <PostPreviewHorizontal {...data[0]} />
          <h3 className='text-h3 sm:text-h3-sm md:text-h3-md lg:text-h3-lg mb-5 font-bold'>
            Construction <span className='gradientText'> Financing</span>
          </h3>
          <PostPreviewHorizontal {...data[1]} />
          <h3 className='text-h3 sm:text-h3-sm md:text-h3-md lg:text-h3-lg mb-5 font-bold'>Mover</h3>
          <PostPreviewHorizontal {...data[2]} />
          <h3 className='text-h3 sm:text-h3-sm md:text-h3-md lg:text-h3-lg mb-5 font-bold'>Counselor</h3>
          <PostPreviewHorizontal {...data[3]} />
          <PostPreviewHorizontal {...data[4]} />
        </div>
        <div className='px-5 mb-8'>
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Home;
