import Image, { StaticImageData } from 'next/image';
import React from 'react';
import arrow from '../../public/assets/images/arrow.png';

interface IProps {
  title: string;
  desc: string;
  imageUrl: StaticImageData;
  target: string;
}

const PostPreviewHorizontal: React.FC<IProps> = ({ title, desc, imageUrl, target }) => {
  return (
    <div className='mb-10 rounded-xl overflow-hidden'>
      {/* <h3 className='text-h3 sm:text-h3-sm md:text-h3-md lg:text-h3-lg mb-5 font-bold'>
        {heading} <span className='gradientText'> {span}</span>
      </h3> */}

      <div className='bg-[#F6F6F6] flex flex-col sm:flex-row '>
        <div className='flex-grow w-full  sm:w-1/3 relative rounded-xl overflow-hidden h-[150px] sm:h-auto'>
          <Image src={imageUrl} fill alt='Something' className=' object-cover' />
        </div>
        <div className='p-6 w-full  md:w-2/3'>
          <h4 className='text-h4 sm:text-h4-sm md:text-h4-md lg:text-h4-lg mb-4'>{title}</h4>
          <p className='pb-6'>{desc}</p>
          <div className='flex gap-2 align-center'>
            <p className='gradientText'>{target}</p>
            <Image className='object-contain' src={arrow} width={15} height={15} alt='arrow' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPreviewHorizontal;
