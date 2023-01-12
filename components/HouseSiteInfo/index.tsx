import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface IProps {
  heading: string;
  image: StaticImageData;
  descriptionText: string;
}

const HouseSiteInfo: React.FC<IProps> = ({ heading, image, descriptionText }) => {
  const headingArray = heading.split(' ');

  let text1 = '';
  let text2 = '';

  for (let index = 0; index < headingArray.length; index++) {
    if (index < Math.ceil(headingArray.length / 2)) {
      text1 += headingArray[index] + ' ';
    } else {
      text2 += headingArray[index] + ' ';
    }
  }

  return (
    <div>
      <h2 className='text-h2 sm:text-h2-sm md:text-h2-md lg:text-h2-lg mb-8'>
        {text1} <span className='gradientText'>{text2}</span>
      </h2>

      <div className='preview-with-desc '>
        <div className='w-full h-[300px] relative rounded-2xl px-4 py-3 overflow-hidden bg-[#f6f6f6]'>
          <div className='w-full h-full relative rounded-2xl overflow-hidden'>
            <Image className=' object-cover' src={image} fill alt='image' />
          </div>
        </div>
        <p className='description text-lightBlack mt-8 px-4'>{descriptionText}</p>
      </div>
    </div>
  );
};

export default HouseSiteInfo;
